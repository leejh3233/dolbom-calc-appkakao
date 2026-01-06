function calculate() {
  const apt = document.getElementById("aptName").value;
  const pyeong = Number(document.getElementById("pyeong").value);
  const area = document.getElementById("area").value;
  const color = document.getElementById("color").value;
  const count = Number(document.getElementById("matCount").value);

  // 금액 계산 로직
  const basePrice = count * 16000;          // 기본가 (16,000원)
  const groupBuy = count * 15500;            // 공구가 (15,500원)
  const onnuriPrice = count * 13950;        // 온누리+공구 적용가 (13,950원)
  
  // 모든 혜택 적용가 (온누리 13,950원 - 쿠폰 3만 - 후기 6만)
  const totalBenefitPrice = onnuriPrice - 90000;
  
  // 총 할인 금액 계산 (소비자가 16,000원 기준 - 최종 혜택가)
  const totalDiscount = basePrice - totalBenefitPrice;

  const result = `🧾 <돌봄매트 예상 견적>

🏢 아파트: ${apt}
📏 평형: ${pyeong}평
🛋️ 시공 공간: ${area}
🎨 색상: ${color}
🧱 매트 수: ${count}장

━━━━━━━━━━━━━━━━

💰 소비자가: ${basePrice.toLocaleString()}원(장당 16,000원)
👨‍👩‍👧‍👦 공동구매가: ${groupBuy.toLocaleString()}원 (장당 15,500원)

🎁 추가 혜택 리스트: 
1️⃣ 온누리 상품권 결제 시 10% 추가 할인
2️⃣ 샘플박스 내 3만원 할인쿠폰 적용
3️⃣ 후기 작성 시 최대 2+2+2 = 6만원 캐시백

🔥 온누리+공구적용 시: ${onnuriPrice.toLocaleString()}원(장당 13,950원)
✨ 모든 추가 혜택적용 시: ${totalBenefitPrice.toLocaleString()}원
(소비자가 대비 ✨${totalDiscount.toLocaleString()}원✨ 저렴하게 가능!)

━━━━━━━━━━━━━━━━

📌 예약 원하실 경우 카카오톡 채널에 "예약"이라고 입력해주세요!
⚠️ 실제 시공 후 사용한 장수로 최종 정산됩니다.`;

  document.getElementById("resultBox").innerText = result;
}

// 복사 기능 (기존과 동일)
function copyResult() {
  const resultText = document.getElementById("resultBox").innerText;

  if (!resultText) {
    alert("먼저 견적 계산 버튼을 눌러주세요!");
    return;
  }

  navigator.clipboard.writeText(resultText).then(() => {
    alert("📋 견적 내용이 복사되었습니다! 카톡창에 붙여넣기(Ctrl+V) 하세요.");
  }).catch(err => {
    console.error('복사 실패:', err);
    alert("복사에 실패했습니다. 수동으로 복사해주세요.");
  });
}

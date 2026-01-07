function calculate() {
  // 각 입력 필드에서 값을 가져옵니다.
  const apt = document.getElementById("aptName").value;
  const pyeong = document.getElementById("pyeong").value;
  const area = document.getElementById("area").value;
  const color = document.getElementById("color").value;
  const count = Number(document.getElementById("matCount").value);

  // 1. 필수 입력값 체크 (매트 수가 0이거나 비어있으면 경고)
  if (!count || count <= 0) {
    alert("매트 수량을 정확히 입력해주세요.");
    return;
  }

  // 2. 금액 계산 로직
  const basePrice = count * 16000;         // 기본가
  const groupBuy = count * 15500;          // 공구가
  const onnuriPrice = Math.floor(count * 13950); // 온누리 (소수점 버림)
  
  // 모든 혜택 적용가 (온누리 적용가 - 쿠폰 3만 - 후기 6만)
  let totalBenefitPrice = onnuriPrice - 90000;
  
  // 혹시라도 혜택가가 0보다 작아지는 것 방지
  if (totalBenefitPrice < 0) totalBenefitPrice = 0;
  
  // 총 할인 금액 계산
  const totalDiscount = basePrice - totalBenefitPrice;

  // 3. 결과 메시지 생성
  const result = `🧾 <돌봄매트 예상 견적>
🏢 아파트: ${apt}
📏 평형: ${pyeong}평
🛋️ 시공 공간: ${area}
🎨 색상: ${color}
🧱 매트 수: ${count}장
━━━━━━━━━━━━━━━━
💰 소비자가: ${basePrice.toLocaleString()}원 (장당 16,000원)
👨‍👩‍👧‍👦 공동구매가: ${groupBuy.toLocaleString()}원 (장당 15,500원)
🎁 추가 혜택 리스트: 
1️⃣ 온누리 상품권 결제 시 10% 추가 할인
2️⃣ 샘플박스 내 3만원 할인쿠폰 적용
3️⃣ 후기 작성 시 최대 2+2+2 = 6만원 캐시백

🔥 온누리+공구적용 시: ${onnuriPrice.toLocaleString()}원 (장당 13,950원)
✨ 모든 추가 혜택적용 시: ${totalBenefitPrice.toLocaleString()}원
(소비자가 대비 ✨${totalDiscount.toLocaleString()}원✨ 저렴하게 가능!)
━━━━━━━━━━━━━━━━
⚠️ 100장 이하 시공 시 시공비 10만원이 추가됩니다.
⚠️ 실제 시공 후 사용한 장수로 최종 정산됩니다.
📌 예약 원하실 경우 카카오톡 채널에 "예약"이라고 입력해주세요.`;

  // 4. 화면에 출력
  const resultBox = document.getElementById("resultBox");
  if (resultBox) {
    resultBox.innerText = result;
  } else {
    console.error("ID가 'resultBox'인 요소를 찾을 수 없습니다.");
  }
}

// 복사 기능
function copyResult() {
  const resultText = document.getElementById("resultBox").innerText;

  if (!resultText || resultText.trim() === "") {
    alert("먼저 견적 계산 버튼을 눌러주세요!");
    return;
  }

  // 최신 브라우저 복사 API
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(resultText).then(() => {
      alert("📋 견적 내용이 복사되었습니다! 카톡창에 붙여넣기(Ctrl+V) 하세요.");
    }).catch(err => {
      fallbackCopyTextSelection(resultText);
    });
  } else {
    // 구형 브라우저 대응
    fallbackCopyTextSelection(resultText);
  }
}

// 복사 기능 보조 (구형 대응)
function fallbackCopyTextSelection(text) {
  const textArea = document.createElement("textarea");
  textArea.value = text;
  document.body.appendChild(textArea);
  textArea.select();
  try {
    document.execCommand('copy');
    alert("📋 견적 내용이 복사되었습니다!");
  } catch (err) {
    alert("복사에 실패했습니다. 수동으로 복사해주세요.");
  }
  document.body.removeChild(textArea);
}

function calculate() {
  const apt = document.getElementById("aptName").value;
  const pyeong = Number(document.getElementById("pyeong").value);
  const area = document.getElementById("area").value;
  const color = document.getElementById("color").value;
  const count = Number(document.getElementById("matCount").value);

  // 금액 계산 로직
  const basePrice = count * 16000;      // 기본가 (16,000원)
  const groupBuy = count * 15500;       // 공구가 (15,500원)
  const totalBenefitPrice = count * 13050; // 모든 혜택 적용가 (13,050원)

  const result = `🧾 <돌봄매트 예상 견적>

🏢 아파트: ${apt}
📏 평형: ${pyeong}평
🛋️ 시공 공간: ${area}
🎨 색상: ${color}
🧱 매트 수: ${count}장

💰 기본가: ${basePrice.toLocaleString()}원 (장당 16,000원)
👨‍👩‍👧‍👦 공동구매가: ${groupBuy.toLocaleString()}원 (장당 15,500원)

🎁 추가혜택: 
1️⃣ 온누리 상품권 사용시 결제 금액 10%할인
2️⃣ 샘플박스 안 3만원 할인쿠폰
3️⃣ 후기 작성시 2+2+2만원, 총 6만원 캐시백!!

✨ 모든 혜택 적용 시: ${totalBenefitPrice.toLocaleString()}원 (장당 13,050원)

📌 예약 원하실 경우 카카오톡 채널에 "예약"이라고 입력해주세요!

⚠️ 실제 시공 후 사용한 장수로 최종 정산됩니다.`;

  document.getElementById("resultBox").innerText = result;
}

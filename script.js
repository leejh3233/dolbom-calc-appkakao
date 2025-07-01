
function calculate() {
  const apt = document.getElementById("aptName").value;
  const pyeong = Number(document.getElementById("pyeong").value);
  const area = document.getElementById("area").value;
  const color = document.getElementById("color").value;
  const count = Number(document.getElementById("matCount").value);

  const basePrice = count * 16000;
  const onNuri = basePrice * 0.9;
  const groupBuy = count * 15500;
  const both = count * 13950;

  const result = `🧾 <돌봄매트 예상 견적>

🏢 아파트: ${apt}
📏 평형: ${pyeong}평
🛋️ 시공 공간: ${area}
🎨 색상: ${color}
🧱 매트 수: ${count}장

💰 기본가: ${basePrice.toLocaleString()}원 (장당 16,000원)
💳 온누리 사용 시: ${onNuri.toLocaleString()}원 (장당 14,400원)
👨‍👩‍👧‍👦 공동구매가: ${groupBuy.toLocaleString()}원 (장당 15,500원)
💎 공동+온누리: ${both.toLocaleString()}원 (장당 13,950원)

🎁 추가혜택: 30,000원 할인쿠폰, 리뷰이벤트 캐시백 50,000원!!
📌 예약 원하실 경우 카카오톡 채널에 "예약"이라고 입력해주세요!

⚠️ 실제 시공 후 사용한 장수로 최종 정산됩니다.`;

  document.getElementById("resultBox").innerText = result;
}

function copyResult() {
  const text = document.getElementById("resultBox").innerText;
  navigator.clipboard.writeText(text).then(() => {
    alert("복사되었습니다!");
  });
}

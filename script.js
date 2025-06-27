/* ==== シンプル自動スライダー ==== */
document.addEventListener('DOMContentLoaded', () => {
  // 画像パスを JPG 名称に合わせて列挙
  const slides = [
    'image/slide1.jpg',
    'image/slide2.jpg',
    'image/slide3.jpg'
  ];

  const slider = document.getElementById('slider');
  let i = 0;

  // 4 秒ごとに画像を切り替え
  setInterval(() => {
    i = (i + 1) % slides.length;
    slider.src = slides[i];
  }, 4000);
});
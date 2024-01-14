document.addEventListener('DOMContentLoaded', function () {
    const texts = document.querySelectorAll('.mv-text');
    let currentIndex = 0;
  
    setInterval(function () {
        texts[currentIndex].classList.remove('show');
        currentIndex = (currentIndex + 1) % texts.length;
        texts[currentIndex].classList.add('show');
      }, 5000); // 5秒ごとに切り替える（適宜調整可能）
  });
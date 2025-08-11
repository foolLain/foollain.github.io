// 我的喜爱页面交互功能 - 仅在favorites页面运行
document.addEventListener('DOMContentLoaded', function() {
  // 检查是否在favorites页面
  if (!window.location.pathname.includes('/favorites/')) {
    return; // 不在favorites页面，不执行任何代码
  }
  
  // 图片画廊模态框功能
  const modal = document.getElementById('imageModal');
  const modalImg = document.getElementById('modalImage');
  const modalCaption = document.getElementById('modalCaption');
  const closeBtn = document.querySelector('.close');
  
  if (!modal || !modalImg || !modalCaption || !closeBtn) {
    return; // 必要的元素不存在，退出
  }
  
  // 为所有画廊图片添加点击事件
  const galleryItems = document.querySelectorAll('.gallery-item img');
  galleryItems.forEach(img => {
    img.addEventListener('click', function() {
      modal.style.display = 'block';
      modalImg.src = this.src;
      modalCaption.innerHTML = this.alt;
    });
  });
  
  // 关闭模态框
  closeBtn.addEventListener('click', function() {
    modal.style.display = 'none';
  });
  
  // 点击模态框外部关闭
  modal.addEventListener('click', function(e) {
    if (e.target === modal) {
      modal.style.display = 'none';
    }
  });
  
  // ESC键关闭模态框
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && modal.style.display === 'block') {
      modal.style.display = 'none';
    }
  });
  
  // 专辑卡片点击效果
  const albumCards = document.querySelectorAll('.album-card');
  albumCards.forEach(card => {
    card.addEventListener('click', function() {
      // 添加点击动画
      this.style.transform = 'scale(0.95)';
      setTimeout(() => {
        this.style.transform = '';
      }, 150);
      
      // 这里可以添加播放音乐的逻辑
      const albumName = this.querySelector('h3').textContent;
      console.log(`Playing album: ${albumName}`);
    });
  });
  
  // 滚动动画效果
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };
  
  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);
  
  // 观察所有需要动画的元素
  const animatedElements = document.querySelectorAll('.album-card, .gallery-item, .favorite-item');
  animatedElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'all 0.6s ease';
    observer.observe(el);
  });
  
  // 添加鼠标悬停效果
  const favoriteItems = document.querySelectorAll('.favorite-item');
  favoriteItems.forEach(item => {
    item.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-5px) scale(1.02)';
    });
    
    item.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0) scale(1)';
    });
  });
  
  // 专辑播放按钮悬停效果
  const albumCovers = document.querySelectorAll('.album-cover');
  albumCovers.forEach(cover => {
    cover.addEventListener('mouseenter', function() {
      const overlay = this.querySelector('.album-overlay');
      if (overlay) {
        overlay.style.opacity = '1';
      }
    });
    
    cover.addEventListener('mouseleave', function() {
      const overlay = this.querySelector('.album-overlay');
      if (overlay) {
        overlay.style.opacity = '0';
      }
    });
  });
});

// 访客地区统计展板功能 - 仅在侧边栏存在时运行
document.addEventListener('DOMContentLoaded', function() {
  // 检查访客统计展板是否存在
  const statsPanel = document.querySelector('.visitor-stats-panel');
  if (!statsPanel) {
    return; // 展板不存在，不执行任何代码
  }
  
  // 模拟访客数据（实际项目中应该从后端API获取）
  const mockVisitorData = {
    totalVisitors: 12547,
    uniqueCountries: 23,
    todayVisitors: 89,
    countries: [
      { name: 'China', count: 8234, flag: '🇨🇳' },
      { name: 'United States', count: 2156, flag: '🇺🇸' },
      { name: 'Japan', count: 987, flag: '🇯🇵' },
      { name: 'South Korea', count: 654, flag: '🇰🇷' },
      { name: 'Germany', count: 432, flag: '🇩🇪' },
      { name: 'United Kingdom', count: 398, flag: '🇬🇧' },
      { name: 'France', count: 287, flag: '🇫🇷' },
      { name: 'Canada', count: 234, flag: '🇨🇦' },
      { name: 'Australia', count: 198, flag: '🇦🇺' },
      { name: 'Singapore', count: 156, flag: '🇸🇬' }
    ]
  };
  
  // 更新统计数据
  function updateStats() {
    // 更新总访客数
    animateCounter('totalVisitors', mockVisitorData.totalVisitors);
    
    // 更新国家数量
    animateCounter('uniqueCountries', mockVisitorData.uniqueCountries);
    
    // 更新今日访客数
    animateCounter('todayVisitors', mockVisitorData.todayVisitors);
    
    // 更新国家列表
    updateCountryList();
    
    // 更新最后更新时间
    updateLastUpdate();
  }
  
  // 数字动画效果
  function animateCounter(elementId, targetValue) {
    const element = document.getElementById(elementId);
    if (!element) return;
    
    const startValue = 0;
    const duration = 2000;
    const startTime = performance.now();
    
    function updateCounter(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // 使用缓动函数
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentValue = Math.floor(startValue + (targetValue - startValue) * easeOutQuart);
      
      element.textContent = currentValue.toLocaleString();
      
      if (progress < 1) {
        requestAnimationFrame(updateCounter);
      }
    }
    
    requestAnimationFrame(updateCounter);
  }
  
  // 更新国家列表
  function updateCountryList() {
    const countryList = document.getElementById('countryList');
    if (!countryList) return;
    
    countryList.innerHTML = '';
    
    mockVisitorData.countries.forEach(country => {
      const countryItem = document.createElement('div');
      countryItem.className = 'country-item';
      countryItem.innerHTML = `
        <div class="country-name">
          <span class="flag">${country.flag}</span>
          ${country.name}
        </div>
        <div class="country-count">${country.count.toLocaleString()}</div>
      `;
      
      // 添加动画效果
      countryItem.style.opacity = '0';
      countryItem.style.transform = 'translateX(-20px)';
      countryItem.style.transition = 'all 0.3s ease';
      
      countryList.appendChild(countryItem);
      
      // 延迟显示动画
      setTimeout(() => {
        countryItem.style.opacity = '1';
        countryItem.style.transform = 'translateX(0)';
      }, 100);
    });
  }
  
  // 更新最后更新时间
  function updateLastUpdate() {
    const lastUpdate = document.getElementById('lastUpdate');
    if (!lastUpdate) return;
    
    const now = new Date();
    const timeString = now.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });
    
    lastUpdate.textContent = timeString;
  }
  
  // 刷新按钮功能
  const refreshBtn = document.getElementById('refreshStats');
  if (refreshBtn) {
    refreshBtn.addEventListener('click', function() {
      // 添加旋转动画
      this.style.transform = 'rotate(360deg)';
      
      // 模拟数据刷新
      setTimeout(() => {
        // 随机更新一些数据
        mockVisitorData.todayVisitors += Math.floor(Math.random() * 10) + 1;
        mockVisitorData.totalVisitors += mockVisitorData.todayVisitors;
        
        updateStats();
        
        // 重置按钮旋转
        this.style.transform = 'rotate(0deg)';
      }, 1000);
    });
  }
  
  // 世界地图交互效果
  const worldMap = document.getElementById('worldMap');
  if (worldMap) {
    // 添加鼠标悬停效果
    worldMap.addEventListener('mouseenter', function() {
      this.style.transform = 'scale(1.05)';
      this.style.transition = 'transform 0.3s ease';
    });
    
    worldMap.addEventListener('mouseleave', function() {
      this.style.transform = 'scale(1)';
    });
    
    // 添加点击效果
    worldMap.addEventListener('click', function() {
      this.style.transform = 'scale(0.95)';
      setTimeout(() => {
        this.style.transform = 'scale(1)';
      }, 150);
      
      // 显示世界地图信息
      showMapInfo();
    });
  }
  
  // 显示地图信息
  function showMapInfo() {
    const info = document.createElement('div');
    info.className = 'map-info';
    info.innerHTML = `
      <div class="map-info-content">
        <h4>World Visitor Distribution</h4>
        <p>Total visitors from ${mockVisitorData.uniqueCountries} countries/regions</p>
        <p>Main visitors are from Asia, accounting for 75% of total visitors</p>
      </div>
    `;
    
    info.style.cssText = `
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background: rgba(0, 0, 0, 0.8);
      color: white;
      padding: 1rem;
      border-radius: 8px;
      text-align: center;
      z-index: 10;
      animation: fadeIn 0.3s ease;
    `;
    
    const mapContainer = document.querySelector('.map-container');
    if (mapContainer) {
      mapContainer.appendChild(info);
      
      // 3秒后自动隐藏
      setTimeout(() => {
        info.style.animation = 'fadeOut 0.3s ease';
        setTimeout(() => {
          if (info.parentNode) {
            info.parentNode.removeChild(info);
          }
        }, 300);
      }, 3000);
    }
  }
  
  // 添加CSS动画
  const style = document.createElement('style');
  style.textContent = `
    @keyframes fadeIn {
      from { opacity: 0; transform: translate(-50%, -50%) scale(0.8); }
      to { opacity: 1; transform: translate(-50%, -50%) scale(1); }
    }
    
    @keyframes fadeOut {
      from { opacity: 1; transform: translate(-50%, -50%) scale(1); }
      to { opacity: 0; transform: translate(-50%, -50%) scale(0.8); }
    }
  `;
  document.head.appendChild(style);
  
  // 初始化统计数据
  updateStats();
  
  // 每5分钟自动更新一次数据
  setInterval(updateStats, 5 * 60 * 1000);
});

import React from 'react';

const MenuScreen = () => {
  return (
    <div className="screen-scroll-content">
      <h1 className="screen-header">Меню</h1>
      <div className="menu-sub-text">Версія Дії: 4.31.7.2515</div>
      
      <div className="menu-group">
        <div className="menu-row" style={{borderBottom: 'none'}}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="1.5"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
          <span className="menu-row-text">Повідомлення</span>
        </div>
      </div>

      <div className="menu-group">
        <div className="menu-row">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="1.5"><circle cx="15" cy="12" r="3"/><path d="M12 12H3"/></svg>
          <span className="menu-row-text">Дія.Підпис</span>
        </div>
        <div className="menu-row" style={{borderBottom: 'none'}}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="1.5"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/><rect x="8" y="12" width="8" height="6" rx="1"/></svg>
          <span className="menu-row-text">Історія підписань</span>
        </div>
      </div>

      <div className="menu-group">
        <div className="menu-row">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="1.5"><path d="M12 20h9M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>
          <span className="menu-row-text">Налаштування</span>
        </div>
        <div className="menu-row">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="1.5"><path d="M23 4v6h-6M1 20v-6h6"/><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/></svg>
          <span className="menu-row-text">Оновити застосунок</span>
        </div>
        <div className="menu-row" style={{borderBottom: 'none'}}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="1.5"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>
          <span className="menu-row-text">Підключені пристрої</span>
        </div>
      </div>
    </div>
  );
};

export default MenuScreen;
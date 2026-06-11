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





import React from 'react';



const FeedScreen = () => {

  return (

    <div className="screen-scroll-content">

      <h1 className="screen-header">Привіт, Ілля 👋</h1>

      

      <div className="nezlamnist-card">

        <div className="nezlamnist-title">Незламність</div>

        <div className="nezlamnist-text">Мапа укриттів, Пунктів незламності та відділень Power Banking. Заява про відсутній зв'язок.</div>

        <div className="nezlamnist-bottom">

          <div style={{display: 'flex', gap: '5px'}}>

             <div style={{width: 20, height: 20, borderRadius: '50%', backgroundColor: '#facc15'}} />

             <div style={{width: 20, height: 20, borderRadius: '50%', backgroundColor: '#3b82f6'}} />

             <div style={{width: 20, height: 20, borderRadius: '50%', backgroundColor: '#22c55e'}} />

          </div>

          <div className="arrow-btn">

            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>

          </div>

        </div>

      </div>



      <div className="quick-actions-row">

        <div className="quick-action-item">

          <div className="quick-action-icon">

            <div className="quick-action-inner"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><path d="M3 9h18M9 21V9"/></svg></div>

          </div>

          <div className="quick-action-text">Дія Сканер</div>

        </div>

        <div className="quick-action-item">

          <div className="quick-action-icon">

            <div className="quick-action-inner"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><path d="M12 22v-7l-2-2m4 0l-2 2M12 15V3m0 0L8 7m4-4l4 4"/></svg></div>

          </div>

          <div className="quick-action-text">Військові<br/>облігації</div>

        </div>

        <div className="quick-action-item">

          <div className="quick-action-icon">

            <div className="quick-action-inner"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><path d="M10 10l4 4m0-4l-4 4M2 2l20 20"/></svg></div>

          </div>

          <div className="quick-action-text">Відсутній<br/>зв'язок</div>

        </div>

      </div>



      <div className="drone-banner">

        <div className="drone-title">ЛІНІЯ<br/>ДРОНІВ</div>

        <div className="drone-bottom">

          <div className="drone-text">Змінити хід подій</div>

          <div className="arrow-btn white-btn">

            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>

          </div>

        </div>

      </div>

      

      <h1 className="screen-header" style={{fontSize: '20px'}}>Що нового?</h1>

    </div>

  );

};



export default FeedScreen; 

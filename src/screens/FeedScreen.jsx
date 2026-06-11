import React from 'react';

const FeedScreen = ({ firstName }) => {
  // Если имя передано сверху (из базы), используем его. Если нет — оставляем Илью по умолчанию.
  const nameToDisplay = firstName || "Ілля";

  return (
    <div className="screen-scroll-content">
      <h1 className="screen-header">Привіт, {nameToDisplay} 👋</h1>
      
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

import React from 'react';

const servicesData = [
  { title: "Допомога армії", icon: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/> },
  { title: "Незламність", icon: <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/> },
  { title: "Дія.Картка", icon: <><rect x="2" y="5" width="20" height="14" rx="2" ry="2"/><line x1="2" y1="10" x2="22" y2="10"/></> },
  { title: "Військові облігації", icon: <path d="M12 22v-7l-2-2m4 0l-2 2M12 15V3m0 0L8 7m4-4l4 4"/> },
  { title: "Лінія дронів", icon: <><circle cx="12" cy="12" r="3"/><path d="M3 3h4v4H3zM17 3h4v4h-4zM3 17h4v4H3zM17 17h4v4h-4z"/></> },
  { title: "Національний кешбек", icon: <path d="M3 5h2v14H3zM7 5h2v14H7zM11 5h2v14h-2zM15 5h4v14h-4zM21 5h-2v14h2z"/> },
  { title: "Чатбот єВорог", icon: <><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="3"/></> },
  { title: "єВідновлення", icon: <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 9.36l-7.1 7.1a1 1 0 0 1-1.41-1.41l7.1-7.1a6 6 0 0 1 9.36-7.94l-3.77 3.77a1 1 0 0 0-1.4 0z"/> },
];

const ServicesScreen = () => {
  return (
    <div className="screen-scroll-content">
      <h1 className="screen-header">Сервіси</h1>
      <div className="search-bar">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#8e8e93" strokeWidth="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
        <span className="search-text">Пошук</span>
      </div>
      <div className="services-grid">
        {servicesData.map((item, idx) => (
          <div key={idx} className="service-card">
            <div className="service-icon-wrapper">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">{item.icon}</svg>
            </div>
            <div className="service-card-text">{item.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesScreen;
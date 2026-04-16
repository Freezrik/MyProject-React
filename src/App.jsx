import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

import Marquee from './components/Marquee';
import './App.css';
import signatureImg from './signature.png';

// ИМПОРТЫ НАШИХ НОВЫХ ЭКРАНОВ
import FeedScreen from './screens/FeedScreen';
import ServicesScreen from './screens/ServicesScreen';
import MenuScreen from './screens/MenuScreen';

function App() {
  // Начинаем с hello, потом pin, потом main
  const [screen, setScreen] = useState("hello"); 
  const [activeTab, setActiveTab] = useState("документи"); // Управление вкладками
  
  const [pin, setPin] = useState("");
  const [flippedIndex, setFlippedIndex] = useState(null);
  const [timeLeft, setTimeLeft] = useState(180); 

  const tapKey = (key) => {
    if (key === 'back') {
      setPin(prev => prev.slice(0, -1));
    } else if (pin.length < 4) {
      const newPin = pin + key;
      setPin(newPin);
      if (newPin.length === 4) {
        setTimeout(() => { setScreen("main"); setPin(""); }, 300); // Переходим на main экран
      }
    }
  };

  const handleCardClick = (index) => {
    if (flippedIndex === index) {
      setFlippedIndex(null); 
    } else {
      setFlippedIndex(index); 
      setTimeLeft(180); 
    }
  };

  useEffect(() => {
    let timer;
    if (flippedIndex !== null && timeLeft > 0) {
      timer = setInterval(() => { setTimeLeft((prev) => prev - 1); }, 1000);
    }
    return () => clearInterval(timer);
  }, [flippedIndex, timeLeft]);

  const formatTime = (seconds) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  const docsData = [
    {
      type: "Паспорт громадянина України",
      photo: "./photo.jpeg",
      fields: [
        { label: "Дата народження:", value: "11.07.2007" },
        { label: "Номер:", value: "010128102" }
      ],
      name: "Паршук\n Ілля\n Євгенович",
      color: "rgba(255, 255, 255, 0.45)"
    },
    {
      type: "Картка платника податків",
      photo: null, 
      fields: [
        { label: "Номер", value: "4000410059", isBig: true },
        { label: "Прізвище, ім'я, по батькові", value: "Паршук Ілля Євгенович" },
        { label: "Дата народження", value: "11.07.2007" }
      ],
      valueBig: "4000410059 ❐",
      color: "rgba(230, 255, 250, 0.55)"
    }
  ];

  return (
    <div className="app-container">
      
      {/* 1. ПРИВЕТСТВИЕ */}
      {screen === "hello" && (
        <>
          <div className="gradient-bg"></div>
          <div className="screen active hello-screen" onClick={() => setScreen("pin")}>
            <div className="hello-text-container">
              <span className="hello-text">Привіт</span>
              <span className="hello-emoji">👋</span>
            </div>
            <div className="logo-footer">
              <div className="logo-btn dark">Дія</div>
            </div>
          </div>
        </>
      )}

      {/* 2. PIN-КОД */}
      {screen === "pin" && (
        <>
          <div className="gradient-bg"></div>
          <div className="screen active pin-screen">
            <div className="pin-top">
              <div className="pin-title">Код для входу</div>
              <div className="pin-dots">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className={`dot ${i < pin.length ? 'filled' : ''}`}></div>
                ))}
              </div>
            </div>
            
            <div className="keyboard">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(key => (
                <div key={key} className="key number" onClick={() => tapKey(key)}>
                  {key}
                </div>
              ))}
              <div className="key icon" onClick={() => {}}>
                 <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 3v4M19 3v4M5 21v-4M19 21v-4M9 9h.01M15 9h.01M12 12v3M9 16c1.5 1.5 4.5 1.5 6 0"/></svg>
              </div>
              <div className="key number" onClick={() => tapKey(0)}>0</div>
              <div className="key icon" onClick={() => tapKey('back')}>
                 <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 4H8l-7 8 7 8h13a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z"></path><line x1="18" y1="9" x2="12" y2="15"></line><line x1="12" y1="9" x2="18" y2="15"></line></svg>
              </div>
            </div>
            <div className="pin-forgot">Не пам'ятаю код для входу</div>
          </div>
        </>
      )}

      {/* 3. ГЛАВНЫЙ ЭКРАН (С Вкладками) */}
      {screen === "main" && (
        <div className="screen active docs-screen" style={{paddingTop: 0}}>
          
          {/* Умный фон: крутится только для документов */}
          {activeTab === "документи" ? <div className="gradient-bg"></div> : <div className="static-bg"></div>}
          
          {/* РОУТИНГ ПО ВКЛАДКАМ */}
          {activeTab === "стрічка" && <FeedScreen />}
          {activeTab === "сервіси" && <ServicesScreen />}
          {activeTab === "меню" && <MenuScreen />}

          {/* ДОКУМЕНТЫ */}
          {activeTab === "документи" && (
            <div className="swiper-centering-container">
              <Swiper grabCursor={true} centeredSlides={true} slidesPerView={'auto'} spaceBetween={16} pagination={{ clickable: true }} modules={[Pagination]} className="mySwiper">
                {docsData.map((doc, index) => (
                  <SwiperSlide key={index}>
                    <div className={`flip-card ${flippedIndex === index ? 'flipped' : ''}`} onClick={() => handleCardClick(index)}>
                      <div className="flip-card-inner">
                        
                        <div className="card-face card-front" style={{ background: doc.color }}>
                          <div className="doc-type">{doc.type}</div>
                          {doc.photo ? (
                            <div className="doc-main-info">
                              <div className="doc-photo"><img src={doc.photo} alt="user" /></div>
                              <div className="doc-fields">
                                {doc.fields.map((f, i) => (
                                  <div key={i} className="field-group">
                                    <div className="field-label">{f.label}</div>
                                    <div className="field-value">{f.value}</div>
                                  </div>
                                ))}
                                <img src={signatureImg} alt="Підпис" className="signature" />
                              </div>
                            </div>
                          ) : (
                            <div className="doc-fields-no-photo">
                              {doc.fields.map((f, i) => (
                                <div key={i} className="field-group">
                                  <div className="field-label">{f.label}</div>
                                  <div className="field-value" style={{ fontSize: f.isBig ? '18px' : '15px' }}>{f.value}</div>
                                </div>
                              ))}
                            </div>
                          )}
                          <div className="doc-bottom-section">
                            <Marquee />
                            {doc.name && <div className="doc-owner-name">{doc.name}</div>}
                            {doc.valueBig && <div className="doc-value-big">{doc.valueBig}</div>}
                            <div className="doc-more-btn">
                              <svg width="20" height="20" viewBox="0 0 24 24" fill="white"><circle cx="5" cy="12" r="2.5" /><circle cx="12" cy="12" r="2.5" /><circle cx="19" cy="12" r="2.5" /></svg>
                            </div>
                          </div>
                        </div>

                        <div className="card-face card-back">
                          <div className="qr-timer">Код діятиме ще {formatTime(timeLeft)} хв</div>
                          <div className="qr-image-container"><img src="https://api.qrserver.com/v1/create-qr-code/?size=400x400&data=Diia_Application_Dynamic_QR_Code_Simulation_Very_Dense_Format_1234567890_VERY_LONG_STRING_TO_MAKE_IT_LOOK_COMPLEX_AND_REALISTIC_LIKE_ORIGINAL_UKRAINE_APP" alt="QR" /></div>
                          <div className="qr-buttons">
                            <div className="qr-btn-group">
                              <div className="qr-btn black-btn"><svg width="22" height="22" viewBox="0 0 24 24" fill="white"><path d="M3 3h8v8H3V3zm2 2v4h4V5H5zm8-2h8v8h-8V3zm2 2v4h4V5h-4zM3 13h8v8H3v-8zm2 2v4h4v-4H5zm13-2h3v2h-3v-2zm-3 0h2v2h-2v-2zm3 3h3v2h-3v-2zm-3 0h2v2h-2v-2zm3 3h3v2h-3v-2zm-3 0h2v2h-2v-2z"/></svg></div>
                              <span>QR-код</span>
                            </div>
                            <div className="qr-btn-group">
                              <div className="qr-btn gray-btn"><svg width="24" height="24" viewBox="0 0 24 24" fill="black"><path d="M4 5h2v14H4V5zm3 0h1v14H7V5zm3 0h2v14h-2V5zm3 0h1v14h-1V5zm3 0h3v14h-3V5z"/></svg></div>
                              <span>Штрихкод</span>
                            </div>
                          </div>
                        </div>

                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          )}

          {/* НИЖНЕЕ МЕНЮ */}
          <div className="tab-bar">
            <div className={`tab-item ${activeTab === 'стрічка' ? 'active' : ''}`} onClick={() => setActiveTab('стрічка')}>
              <svg className="tab-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/></svg>
              Стрічка
            </div>
            <div className={`tab-item ${activeTab === 'документи' ? 'active' : ''}`} onClick={() => setActiveTab('документи')}>
              <svg className="tab-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-9 15H5v-2h7v2zm0-4H5v-2h7v2zm8-4h-6V7h6v3z"/></svg>
              Документи
            </div>
            <div className={`tab-item ${activeTab === 'сервіси' ? 'active' : ''}`} onClick={() => setActiveTab('сервіси')}>
              <svg className="tab-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M11 21h-1l1-7H7.5c-.58 0-.57-.32-.38-.66C7.67 12.24 9.02 9.68 11 6h1l-1 7h3.5c.49 0 .56.33.47.51l-.07.15C12.96 17.55 11 21 11 21z"/></svg>
              Сервіси
            </div>
            <div className={`tab-item ${activeTab === 'меню' ? 'active' : ''}`} onClick={() => setActiveTab('меню')}>
              <svg className="tab-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/></svg>
              Меню
            </div>
          </div>
          
        </div>
      )}
    </div>
  );
}

export default App;
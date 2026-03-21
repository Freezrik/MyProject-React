import React, { useState } from 'react';
// Подключаем Swiper React компоненты
import { Swiper, SwiperSlide } from 'swiper/react';
// Подключаем модули Swiper (пагинация и эффект карты)
import { Pagination, EffectCoverflow } from 'swiper/modules';

// Подключаем стили Swiper
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

import Marquee from './components/Marquee';
import './App.css';

function App() {
  const [pin, setPin] = useState("");
  const [screen, setScreen] = useState("hello"); // hello, pin, docs

  // Данные документов (заглушки)
  const docsData = [
    {
      type: "Паспорт громадянина України",
      photo: "photo.jpg",
      fields: [
        { label: "Дата народження:", value: "11.07.2000" },
        { label: "Номер:", value: "010183103" }
      ],
      name: "Іванов\nІван\nІванович",
      color: "rgba(255, 255, 255, 0.65)" // Glass
    },
    {
      type: "Картка платника податків",
      photo: null, // У кода нет фото
      fields: [
        { label: "РНОКПП", value: "4000410059", isBig: true },
        { label: "Прізвище, ім'я, по батькові", value: "Іванов Іван Іванович" },
        { label: "Дата народження", value: "11.07.2000" }
      ],
      valueBig: "4000410059 ❐",
      color: "rgba(230, 255, 250, 0.7)" // Зеленоватый Glass (image_4.png)
    },
    {
      type: "Студентський квиток",
      photo: "photo.jpg",
      fields: [
        { label: "ВНЗ:", value: "IT STEP" },
        { label: "Факультет:", value: "Розробка ПЗ" },
        { label: "Курс:", value: "2" }
      ],
      name: "Іванов Іван Іванович",
      color: "rgba(255, 250, 240, 0.7)" // Желтоватый Glass
    }
  ];

  // Логика Пин-кода
  const tapKey = (key) => {
    if (key === 'back') {
      setPin(prev => prev.slice(0, -1));
    } else if (pin.length < 4) {
      setPin(prev => prev + key);
      if (pin.length === 3) {
        // Если ввели 4-ю цифру - пускаем
        setTimeout(() => {
          setScreen("docs");
          setPin("");
        }, 300);
      }
    }
  };

  return (
    <div className="app-container">
      {/* Живой фон (как в оригинале) */}
      <div className="gradient-bg"></div>

      {/* 1. ПРИВЕТСТВИЕ */}
      {screen === "hello" && (
        <div className="screen active hello-screen" onclick={() => setScreen("pin")}>
          <div className="hello-text">Привіт <span className="wave-emoji">👋</span></div>
          <div className="logo-footer">
            <div className="logo-btn logo-dark">Дія</div>
            <div className="logo-btn logo-light">🇺🇦</div>
          </div>
        </div>
      )}

      {/* 2. ПИН */}
      {screen === "pin" && (
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
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, '👤', 0, '⌫'].map(key => (
              <div key={key} className={`key ${typeof key === 'string' ? 'icon' : ''}`} onclick={() => typeof key === 'number' ? tapKey(key) : key === '⌫' ? tapKey('back') : null}>
                {key}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 3. ДОКУМЕНТЫ */}
      {screen === "docs" && (
        <div className="screen active docs-screen">
          <div className="docs-header">Документи</div>
          
          {/* SWIPER (3D Coverflow) */}
          <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={'auto'}
            coverflowEffect={{
              rotate: 20,
              stretch: 0,
              depth: 150,
              modifier: 1,
              slideShadows: false,
            }}
            pagination={{ clickable: true }}
            modules={[EffectCoverflow, Pagination]}
            className="mySwiper"
          >
            {docsData.map((doc, index) => (
              <SwiperSlide key={index}>
                <div className="doc-card" style={{ background: doc.color }}>
                  <p className="doc-type" style={{ color: doc.photo ? '#1a1a1a' : '#0a5a4a' }}>{doc.type}</p>
                  
                  {doc.photo && (
                    <div className="doc-main-info">
                      <div className="doc-photo"><img src={doc.photo} alt="фото" /></div>
                      <div className="doc-fields">
                        {doc.fields.map((f, i) => (
                          <div key={i}><div className="field-label">{f.label}</div><div className="field-value">{f.value}</div></div>
                        ))}
                        <div style={{ marginTop: 'auto', fontSize: '24px' }}>✍️</div>
                      </div>
                    </div>
                  )}

                  {!doc.photo && (
                    <div className="doc-fields" style={{ gap: '20px', fontSize: '14px', marginBottom: '30px' }}>
                      {doc.fields.map((f, i) => (
                        <div key={i}><div className="field-label">{f.label}</div><div className="field-value" style={{ fontSize: f.isBig ? '18px' : '15px' }}>{f.value}</div></div>
                      ))}
                    </div>
                  )}
                  
                  {/* ПОДКЛЮЧАЕМ БЕГУЩУЮ СТРОКУ */}
                  <Marquee />
                  
                  {doc.name && <p className="doc-owner-name">{doc.name}</p>}
                  {doc.valueBig && <div className="doc-value-big" style={{ fontSize: '28px', fontWeight: '600', letterSpacing: '1px', marginTop: '10px' }}>{doc.valueBig}</div>}
                  
                  <div className="doc-more-btn">•••</div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* ТАБ-БАР (image_2.png) */}
          <div className="tab-bar visible">
            <a href="#" className="tab-item"><div className="tab-icon">📄</div>Стрічка</a>
            <a href="#" className="tab-item active"><div className="tab-icon">🪪</div>Документи</a>
            <a href="#" className="tab-item"><div className="tab-icon">⚡️</div>Сервіси</a>
            <a href="#" className="tab-item"><div className="tab-icon">👤</div>Меню</a>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
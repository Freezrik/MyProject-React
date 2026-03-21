import './Marquee.css';

const Marquee = () => {
  const text = "Документ оновлено о 10:47 | 21.03.2026 • ";
  return (
    <div className="marquee-container">
      <div className="marquee-inner">
        {/* Дублируем 4 раза для полной бесшовности */}
        <span>{text}</span><span>{text}</span><span>{text}</span><span>{text}</span>
      </div>
    </div>
  );
};
export default Marquee;
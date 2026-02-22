import { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useFormModal } from '../App';

const CARD_WIDTH = 340;
const CARD_GAP = 28;
const TRACK_STEP = CARD_WIDTH + CARD_GAP;

const StatusSwiper = () => {
  const { openForm } = useFormModal();
  const [activeIndex, setActiveIndex] = useState(2);
  const touchStartX = useRef(null);

  const cards = [
    {
      id: 0,
      title: 'Status "Silver"',
      src: '/cards/silver.svg',
      color: '#979994',
      price: 'від 2.000',
      description: [
        'Персоналізований цифровий сертифікат інвестора',
        'Доступ до закритого Telegram-каналу',
        'Щомісячні звіти про розвиток проєкту',
        'Накопичення IFW-балів за інвестиції'
      ]
    },
    {
      id: 1,
      title: 'Status "Green"',
      src: '/cards/green.svg',
      color: '#7ED321',
      price: 'від 5.000',
      description: [
        'Персоналізований цифровий сертифікат інвестора',
        'Доступ до закритого Telegram-каналу',
        'Щомісячні звіти про розвиток проєкту',
        'Накопичення IFW-балів за інвестиції',
        '3% фіксованої винагороди від першого внеску реферала'
      ]
    },
    {
      id: 2,
      title: 'Status "Purple"',
      src: '/cards/purple.svg',
      color: '#7667ED',
      price: 'від 15.000',
      description: [
        'Персоналізований цифровий та фізичний сертифікат інвестора',
        'Доступ до закритого Telegram-каналу',
        'Щомісячні звіти про розвиток проєкту',
        'Накопичення IFW-балів за інвестиції',
        '5% фіксованої винагороди від першого внеску реферала',
        'Пріоритетний доступ до нових інвестиційних раундів'
      ]
    },
    {
      id: 3,
      title: 'Status "Gold"',
      src: '/cards/gold.svg',
      color: '#D4AF37',
      price: 'від 50.000',
      description: [
        {
          title: 'Персоналізований цифровий та фізичний сертифікат інвестора',
          details: [
            'Іменний документ, що підтверджує ваш статус та участь у проектах IFW.'
          ]
        },
        {
          title: 'Унікальний Інвесторський номер з доступом до реферальної системи.',
          details: [
            'На ваш вибір:',
            '— 8% фіксованої винагороди від першого внеску інвестора, залученого за вашим промокодом або',
            '— 5% від усіх інвестицій залученого клієнта за вашим промокодом та подальших від Вашої лінії інвестицій',
            '«Після залучення Вами інвестора всі подальші інвестиції як цього інвестора, так і осіб, залучених ним, фіксуються з Вашим бонусом».'
          ]
        },
        {
          title: 'Доступ до бонусної системи з накопиченням IFW-балів за кожного залученого інвестора вам нараховуються IFW-балі від суми залучених інвестицій',
          details: [
            'Накопичені бали можно обміняти на реальні кошти.',
            'Еквівалент балів до обсягу інвестицій ви можете уточнити у нашого менеджера.',
            'Чим більша сума залучених інвестицій — тим більше балів ви отримуєте, відповідно зростає і ваш дохід.',
            'Унікальний набір інвестора Gold',
            'Особиста знижка в закладах харчування проєкту',
            'Закритий чат інвесторів з актуальною інформацією та етапами розвитку проєктів',
            'Пріоритет на відвідування закритих презентацій, зустрічей, дегустацій клубу.'
          ]
        }
      ]
    },
    {
      id: 4,
      title: 'Status "Platinum"',
      src: '/cards/platinum.svg',
      color: '#E8E8E8',
      price: 'від 100.000',
      description: [
        {
          title: 'Персоналізований цифровий та фізичний сертифікат інвестора',
          details: [
            'Іменний документ, що підтверджує ваш статус та участь у проектах IFW.'
          ]
        },
        {
          title: 'Унікальний Інвесторський номер з доступом до реферальної системи.',
          details: [
            'На ваш вибір:',
            '— 9% фіксованої винагороди від першого внеску інвестора, залученого за вашим промокодом або',
            '— 5% від усіх інвестицій залученого клієнта за вашим промокодом та подальших від Вашої лінії інвестицій',
            '«Після залучення Вами інвестора всі подальші інвестиції як цього інвестора, так і осіб, залучених ним, фіксуються з Вашим бонусом».'
          ]
        },
        {
          title: 'Доступ до бонусної системи з накопиченням IFW-балів за кожного залученого інвестора вам нараховуються IFW-балі від суми залучених інвестицій',
          details: [
            'Накопичені бали можно обміняти на реальні кошти.',
            'Еквівалент балів до обсягу інвестицій ви можете уточнити у нашого менеджера.',
            'Чим більша сума залучених інвестицій — тим більше балів ви отримуєте, відповідно зростає і ваш дохід.',
            'Унікальний набір інвестора Platinum',
            'Особиста знижка в закладах харчування проєкту',
            'Закритий чат інвесторів з актуальною інформацією та етапами розвитку проєктів',
            'Пріоритет на відвідування закритих презентацій, зустрічей, закладів, дегустацій клубу.',
            'Індивідуальний менеджер',
            'Можливість першим отримати доступ до нових інвестицій',
            'Кращі умови зі знижкою',
            'Закритий відпочинковий клуб',
            'Можливість купити бізнес за ціною, яка обговорюється.'
          ]
        }
      ]
    },
    {
      id: 5,
      title: 'Status "Black"',
      src: '/cards/black.svg',
      color: '#A0A0A0',
      price: 'від 250.000',
      description: [
        {
          title: 'Персоналізований цифровий та фізичний сертифікат інвестора',
          details: [
            'Іменний документ, що підтверджує ваш статус та участь у проектах IFW.'
          ]
        },
        {
          title: 'Унікальний Інвесторський номер з доступом до реферальної системи.',
          details: [
            'На ваш вибір:',
            '— 15% фіксованої винагороди від першого внеску інвестора, залученого за вашим промокодом або',
            '— 5% від усіх інвестицій залученого клієнта за вашим промокодом та подальших від Вашої лінії інвестицій',
            '«Після залучення Вами інвестора всі подальші інвестиції як цього інвестора, так і осіб, залучених ним, фіксуються з Вашим бонусом».'
          ]
        },
        {
          title: 'Доступ до бонусної системи з накопиченням IFW-балів за кожного залученого інвестора вам нараховуються IFW-балі від суми залучених інвестицій',
          details: [
            'Накопичені бали можно обміняти на реальні кошти.',
            'Еквівалент балів до обсягу інвестицій ви можете уточнити у нашого менеджера.',
            'Чим більша сума залучених інвестицій — тим більше балів ви отримуєте, відповідно зростає і ваш дохід.',
            'Унікальний набір інвестора Black',
            'Особиста знижка в закладах харчування проєкту',
            'Закритий чат інвесторів з актуальною інформацією та етапами розвитку проєктів',
            'Пріоритет на відвідування закритих презентацій, зустрічей, закладів, дегустацій клубу.',
            'Індивідуальний менеджер',
            'Можливість першим отримати доступ до нових інвестицій',
            'Кращі умови зі знижкою',
            'Закритий відпочинковий клуб',
            'Можливість купити бізнес за ціною, яка обговорюється.',
            'Участь у Раді інвесторів',
            'Прямий контакт з засновниками проєкту'
          ]
        }
      ]
    }
  ];

  const n = cards.length;
  const activeCard = cards[activeIndex];

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + n) % n);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % n);
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const delta = touchStartX.current - e.changedTouches[0].clientX;
    if (delta > 50) handleNext();
    else if (delta < -50) handlePrev();
    touchStartX.current = null;
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Compute shortest-path offset for loop (wraps around)
  const getOffset = (index) => {
    let offset = index - activeIndex;
    if (offset > n / 2) offset -= n;
    if (offset < -n / 2) offset += n;
    return offset;
  };

  const getCardStyle = (index) => {
    const offset = getOffset(index);
    const absOffset = Math.abs(offset);

    let scale = 1;
    let opacity = 1;

    if (absOffset === 1) { scale = 0.84; opacity = 0.65; }
    else if (absOffset === 2) { scale = 0.70; opacity = 0.35; }
    else if (absOffset >= 3) { scale = 0.60; opacity = 0; }

    return {
      transform: `translateX(calc(-50% + ${offset * TRACK_STEP}px)) scale(${scale})`,
      opacity,
      zIndex: absOffset === 0 ? 10 : absOffset === 1 ? 6 : absOffset === 2 ? 3 : 0,
      pointerEvents: absOffset >= 3 ? 'none' : 'auto',
      position: 'absolute',
      left: '50%',
      top: 0,
      transition: 'transform 0.5s cubic-bezier(0.4,0,0.2,1), opacity 0.5s ease',
    };
  };

  const cardH = Math.round(CARD_WIDTH * (4 / 3));

  return (
    <section className="pb-20 overflow-hidden">
      {/* Заголовок */}
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <h2
          className="text-center mb-4"
          style={{ fontFamily: '"Actay Wide", system-ui, sans-serif', lineHeight: '48px' }}
        >
          <span style={{ color: 'var(--color-primary)' }}>Унікальний</span>{' '}
          <span style={{ color: 'var(--color-text)' }}>сертифікат та статус інвестора</span>
        </h2>
      </div>

      {/* Карусель */}
      <div className="relative mt-12" style={{ userSelect: 'none' }}>
        {/* Prev button */}
        <button
          onClick={handlePrev}
          className="absolute left-4 md:left-8 z-20 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300"
          style={{
            top: `${cardH / 2}px`,
            transform: 'translateY(-50%)',
            backgroundColor: 'var(--color-bg)',
            border: '1px solid rgba(118,103,237,0.3)',
            color: 'var(--color-primary)',
          }}
          onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = 'var(--color-primary)'; e.currentTarget.style.color = 'white'; }}
          onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'var(--color-bg)'; e.currentTarget.style.color = 'var(--color-primary)'; }}
          aria-label="Попередня карточка"
        >
          <ChevronLeft size={24} />
        </button>

        {/* Next button */}
        <button
          onClick={handleNext}
          className="absolute right-4 md:right-8 z-20 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300"
          style={{
            top: `${cardH / 2}px`,
            transform: 'translateY(-50%)',
            backgroundColor: 'var(--color-bg)',
            border: '1px solid rgba(118,103,237,0.3)',
            color: 'var(--color-primary)',
          }}
          onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = 'var(--color-primary)'; e.currentTarget.style.color = 'white'; }}
          onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'var(--color-bg)'; e.currentTarget.style.color = 'var(--color-primary)'; }}
          aria-label="Наступна карточка"
        >
          <ChevronRight size={24} />
        </button>

        {/* Track */}
        <div
          style={{ position: 'relative', height: `${cardH}px`, overflow: 'hidden' }}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {cards.map((card, index) => {
            const isActive = index === activeIndex;
            return (
              <div
                key={card.id}
                onClick={() => setActiveIndex(index)}
                style={getCardStyle(index)}
              >
                <div
                  className="relative rounded-2xl overflow-hidden cursor-pointer"
                  style={{
                    width: `${CARD_WIDTH}px`,
                    height: `${cardH}px`,
                    border: `2px solid ${isActive ? card.color : 'transparent'}`,
                    boxShadow: isActive ? `0 0 50px ${card.color}55` : 'none',
                    background: 'var(--color-bg)',
                    transition: 'border-color 0.5s ease, box-shadow 0.5s ease',
                  }}
                >
                  {isActive && (
                    <div
                      className="absolute inset-0 pointer-events-none z-10"
                      style={{
                        background: `radial-gradient(circle at 50% 0%, ${card.color}22 0%, transparent 60%)`
                      }}
                    />
                  )}
                  <img
                    src={card.src}
                    alt={card.title}
                    className="w-full h-full block"
                    style={{ objectFit: 'fill' }}
                    draggable={false}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Прогрес-бар — Figma: 420×10px, track #3E3E40, radius 1000px */}
      <div className="flex justify-center mt-10">
        <div
          className="relative rounded-full"
          style={{ width: '420px', height: '10px', backgroundColor: '#3E3E40' }}
        >
          <div
            className="absolute top-0 h-full rounded-full transition-all duration-500 ease-out"
            style={{
              width: '48px',
              left: `calc(${(activeIndex / (n - 1)) * 100}% - 24px)`,
              backgroundColor: 'var(--color-primary)',
              boxShadow: '0 0 8px rgba(118,103,237,0.6)',
            }}
          />
        </div>
      </div>

      {/* Описание активного слайда */}
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="mt-10 max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <h3
              className="text-2xl md:text-3xl font-bold mb-2"
              style={{ color: activeCard.color }}
            >
              {activeCard.title} {activeCard.price}
            </h3>
          </div>

          <div
            className="rounded-2xl p-6 md:p-8"
            style={{ backgroundColor: 'rgba(255,255,255,0.04)', border: '1px solid rgba(216,217,216,0.08)' }}
          >
            <ul className="space-y-4">
              {activeCard.description.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 leading-relaxed" style={{ color: 'rgba(216,217,216,0.9)' }}>
                  <span
                    className="flex-shrink-0 font-bold text-sm min-w-[1.5rem] pt-0.5"
                    style={{ color: 'var(--color-primary)' }}
                  >
                    {idx + 1}.
                  </span>
                  {typeof item === 'string' ? (
                    <span>{item}</span>
                  ) : (
                    <div>
                      <span className="font-medium">{item.title}</span>
                      {item.details && (
                        <div className="mt-1 space-y-0.5 text-sm opacity-75">
                          {item.details.map((d, i) => (
                            <p key={i}>{d}</p>
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                </li>
              ))}
            </ul>

            <p className="mt-6 text-sm italic" style={{ color: 'var(--color-primary)' }}>
              Розподіл часток відбувається після повного закриття інвестиційного збору та згідно суми вашої інвестиції.
            </p>
          </div>

          <div className="flex justify-center mt-8">
            <button
              onClick={openForm}
              className="px-8 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 active:scale-95"
              style={{
                backgroundColor: 'var(--color-primary)',
                color: 'var(--color-bg)',
                boxShadow: '0 4px 20px rgba(118,103,237,0.4)'
              }}
            >
              Стати партнером
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatusSwiper;

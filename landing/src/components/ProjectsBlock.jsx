import { useState, useEffect, useRef } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { useFormModal } from '../App';

/* ─── Вертикальная бесконечная карусель ─────────────────────── */
const VerticalCarousel = ({ images, speed = 0.6 }) => {
  const trackRef = useRef(null);
  const posRef = useRef(0);
  const rafRef = useRef(null);
  const [itemHeight, setItemHeight] = useState(0);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const firstImg = track.querySelector('img');
    if (firstImg) setItemHeight(firstImg.offsetHeight + 12); // 12 = gap
  }, [images]);

  useEffect(() => {
    const track = trackRef.current;
    if (!track || itemHeight === 0) return;
    const totalHeight = itemHeight * images.length;

    const animate = () => {
      posRef.current += speed;
      if (posRef.current >= totalHeight) posRef.current = 0;
      track.style.transform = `translateY(-${posRef.current}px)`;
      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafRef.current);
  }, [images, speed, itemHeight]);

  const doubled = [...images, ...images];

  return (
    <div className="overflow-hidden h-full w-full" style={{ maskImage: 'linear-gradient(to bottom, transparent 0%, black 8%, black 92%, transparent 100%)' }}>
      <div ref={trackRef} className="flex flex-col gap-3" style={{ willChange: 'transform', padding: '0 12px' }}>
        {doubled.map((src, i) => (
          <div key={i} className="w-full flex-shrink-0 overflow-hidden" style={{ height: '220px', borderRadius: '16px' }}>
            <img src={src} alt="" className="w-full h-full object-cover" draggable={false} />
          </div>
        ))}
      </div>
    </div>
  );
};


/* ─── Данные проектов ──────────────────────────────────────── */
const projects = [
  {
    id: 1,
    number: '№1',
    title: "Заклади народного харчування та сучасні кав'ярні",
    description: "Ми створюємо мережу народних закладів харчування з унікальною моделлю: смачна та здорова їжа за собівартістю.",
    collected: 89250,
    target: 350000,
    collectedUah: '15 050 000',
    investors: 149,
    chartData: [20, 35, 45, 60, 75, 100],
    color: '#7667ED',
    image: '/projects/Frame 3.webp',
    graph: '/graphs/graph (1).svg',
    carousel: [
      '/carousel pj1/IMG_7489 1.svg',
      '/carousel pj1/IMG_7490 1.svg',
      '/carousel pj1/IMG_7491 1.svg',
      '/carousel pj1/IMG_7492 1.svg',
    ],
    fullDescription: "У закладах запроваджується система абонементів (1, 3, 6 місяців обо рік), що надає доступ до їжі та напоїв за собівартістю. Військові, ветерани, пенсіонери, внутрішньо переміщені особи, люди з інвалідністю, сім'ї полеглих Героїв та інвестори можуть харчуватися за собівартістю без придбання абонементу.\n\nДля інших відвідувачів ціни залишаються нижчими за ринкові, з помірною націнкою, яка забезпечує стабільну операційну модель і прибутковість бізнесу. Підсумковий чек у будь-якому випадку буде нижчим, ніж у конкурентів. Завдяки цій концепції харчування в закладах стає вигіднішим, ніж приготування їжі вдома. Власники абонементів отримують найкращу ціну на ринку та одночасно підтримують доступне харчування для пільгових категорій.\n\nОкремим напрямком стане запуск мережі кав'ярень за аналогічною моделлю: пільгові категорії та власники абонементів отримують продукцію за собівартістю, інші відвідувачі — за конкурентною ринковою ціною.\n\nІнвестори стають співвласниками закладів і отримують частку прибутку бізнесу, а також можливість завжди харчуватися за собівартістю та користуватися спеціальними цінами в кав'ярнях. Інвестиція від 2 000 грн може окупитися менш ніж за місяць лише за рахунок власного харчування.\n\nКожен заклад функціонуватиме як соціальний хаб: можливість зарядити пристрої, зігрітися, попрацювати або безпечно провести час. Планується підбір приміщень із підвальними просторами для облаштування укриття.\n\nУ майбутньому передбачено масштабування мережі — декілька точок у кожному місті України. Наразі триває розробка сучасного дизайну закладів, пошук оптимальних локацій та створення меню разом із досвідченими кухарями й технологами.",
    details: [
      { label: 'Мінімальна інвестиція', value: '2 000 грн' },
      { label: 'Планова дохідність', value: '12–15% річних' },
      { label: 'Термін окупності', value: '3 роки' },
      { label: 'Статус збору', value: 'Завершено ✓' },
      { label: 'Локації', value: 'Київ, Харків, Одеса, Львів, Дніпро' },
      { label: 'Кількість точок', value: '15 закладів' },
    ],
    timeline: [
      { date: 'Q4 2024', event: 'Закриття інвестиційного раунду' },
      { date: 'Q1 2025', event: 'Підписання оренди та початок ремонтних робіт' },
      { date: 'Q2 2025', event: 'Відкриття перших 5 точок у Києві та Харкові' },
      { date: 'Q3 2025', event: 'Розширення мережі до 10 точок' },
      { date: 'Q4 2025', event: 'Вихід на повну потужність, 15 закладів' },
    ],
    team: [
      { name: 'Олексій Коваленко', role: 'CEO & Засновник' },
      { name: 'Марина Сидоренко', role: 'Операційний директор' },
      { name: 'Денис Михайлюк', role: 'Head of Marketing' },
    ],
  },
  {
    id: 2,
    number: '№2',
    title: 'Народна оборонна промисловість / оборонний кластер',
    description: "Оборонний кластер — це єдина виробничо-сервісна екосистема підприємств під одним брендом для посилення обороноздатності України та підтримки ЗСУ.",
    collected: 171650,
    target: 500000,
    collectedUah: '21 500 000',
    investors: 413,
    chartData: [10, 25, 40, 55, 70, 85],
    color: '#7667ED',
    image: '/projects/Frame 2.webp',
    graph: '/graphs/graph 2.svg',
    carousel: [
      '/carousel pj 2/IMG_7497 1.svg',
      '/carousel pj 2/IMG_7498 1.svg',
      '/carousel pj 2/IMG_7499 1.svg',
      '/carousel pj 2/IMG_7500 1.svg',
    ],
    fullDescription: "Мета кластера — об'єднати критично важливі напрями для оптимізації витрат, пришвидшення виконання замовлень і забезпечення стабільного постачання продукції та послуг оборонному сектору. Проєкт поєднує комерційну ефективність зі стратегічною місією — зміцнення оборони країни.\n\nЗапуск планується поетапно з можливістю масштабування залежно від потреб. Локації обиратимуться з урахуванням логістики, безпеки та кадрового потенціалу.\n\nУ перспективі кластер має отримати статус критично важливого підприємства, що дозволить бронювати співробітників, розширювати виробництво та формувати сталу національну оборонно-промислову мережу. Також передбачено навчання та працевлаштування ветеранів, ВПО, жінок і студентів до роботи на підприємствах.\n\nОсновні напрями діяльності та технологічні можливості:\n• ремонт і модернізація транспорту та спеціалізованої техніки;\n• бронювання, фарбування в мілітарі-кольори та доопрацювання транспорту для роботи в складних умовах;\n• переобладнання техніки для підвищення безпеки й комфорту екіпажів;\n• виробництво біонічних протезів;\n• пошиття спеціалізованого екіпірування;\n• розробка та виробництво дронів та літальних апаратів;\n• роботизовані рішення для оборонної сфери;\n• власний дата-центр і розвиток ШІ для обробки даних та аналітики.",
    details: [
      { label: 'Мінімальна інвестиція', value: '5 000 грн' },
      { label: 'Планова дохідність', value: '15–20% річних' },
      { label: 'Термін окупності', value: '4 роки' },
      { label: 'Статус збору', value: 'В процесі (50%)' },
      { label: 'Локації', value: 'Захід та Центр України' },
      { label: 'Підрядники', value: '12 виробничих партнерів' },
    ],
    timeline: [
      { date: 'Q1 2025', event: 'Завершення юридичного оформлення кластера' },
      { date: 'Q2 2025', event: 'Закупівля обладнання та запуск першої черги' },
      { date: 'Q3 2025', event: 'Підписання контрактів з Міноборони' },
      { date: 'Q4 2025', event: 'Вихід на виробничу потужність 60%' },
      { date: 'Q2 2026', event: 'Повна операційна готовність кластера' },
    ],
    team: [
      { name: 'Ігор Бондаренко', role: 'CEO & Засновник' },
      { name: 'Тетяна Польова', role: 'Директор з розвитку' },
      { name: 'Андрій Варченко', role: 'Технічний директор' },
    ],
  },
];

/* ─── Компонент ────────────────────────────────────────────── */
const ProjectsBlock = () => {
  const [expandedId, setExpandedId] = useState(null);
  const { openForm } = useFormModal();

  const formatCurrency = (v) => v.toLocaleString('en-US').replace(/,/g, ' ');

  const toggle = (id) => setExpandedId((prev) => (prev === id ? null : id));

  return (
    <section className="py-16 px-[10px] md:px-[40px]">
      <div
        className="max-w-[1360px] mx-auto px-6 md:px-8 py-8"
        style={{
          backgroundColor: '#D8D9D8',
          borderRadius: '64px',
        }}
      >
        {/* Заголовок */}
        <h2
          className="text-center mb-6"
          style={{
            color: '#29292B',
            fontFamily: '"Gill Sans", system-ui, sans-serif',
            fontWeight: 700,
            fontSize: '98px',
            lineHeight: '94px',
            letterSpacing: '-2px',
          }}
        >
          Проєкти <span style={{ color: '#7667ED' }}>IFW</span>
        </h2>

        <p
          className="text-center max-w-2xl mx-auto mb-3"
          style={{
            fontFamily: '"Actay", system-ui, sans-serif',
            fontWeight: 400,
            fontSize: '22px',
            lineHeight: '30px',
            color: 'rgba(41,41,43,0.75)',
          }}
        >
          Інвестуй від 2000 грн у важливі проєкти та вже зараз отримуй пасивний дохід з їхніх прибутків.
        </p>

        <p
          className="text-center mb-12"
          style={{
            fontFamily: '"Actay Wide", system-ui, sans-serif',
            fontWeight: 700,
            fontSize: '32px',
            lineHeight: '38px',
            color: '#29292B',
          }}
        >
          Актуальні проєкти, які знаходяться в процесі збору бюджету для старту реалізації:
        </p>

        {/* Карточки */}
        <div className="space-y-6">
          {projects.map((project) => {
            const isExpanded = expandedId === project.id;

            return (
              <div
                key={project.id}
                className="rounded-3xl overflow-hidden transition-shadow duration-300"
                style={{ backgroundColor: '#29292B', boxShadow: isExpanded ? '0 0 0 2px #7667ED40' : 'none' }}
              >
                <div className="p-8 md:p-[60px]">
                  <div className="flex flex-col lg:flex-row gap-6 items-start">

                    {/* ── Левая колонка ── */}
                    <div className="flex-1 min-w-0">
                      <h3
                        className="mb-4"
                        style={{
                          fontFamily: '"Actay Wide", system-ui, sans-serif',
                          fontWeight: 700,
                          fontSize: '22px',
                          lineHeight: '30px',
                          color: '#D8D9D8',
                        }}
                      >
                        <span style={{ color: '#7667ED' }}>Проєкт {project.number}</span>
                        {' '}— {project.title}.
                      </h3>

                      <p
                        className="mb-3"
                        style={{
                          fontFamily: '"Actay", system-ui, sans-serif',
                          fontWeight: 400,
                          fontSize: '14px',
                          lineHeight: '22px',
                          color: 'rgba(216,217,216,0.7)',
                        }}
                      >
                        {project.description}
                      </p>

                      {/* Расширенный текст — показывается при раскрытии */}
                      {isExpanded && (
                        <div className="mb-4">
                          {project.fullDescription.split('\n\n').map((paragraph, i) => (
                            <p
                              key={i}
                              style={{
                                fontFamily: '"Actay", system-ui, sans-serif',
                                fontWeight: 400,
                                fontSize: '14px',
                                lineHeight: '22px',
                                color: 'rgba(216,217,216,0.75)',
                                marginBottom: '12px',
                                whiteSpace: 'pre-line',
                              }}
                            >
                              {paragraph}
                            </p>
                          ))}
                          <p
                            style={{
                              fontFamily: '"Actay", system-ui, sans-serif',
                              fontWeight: 400,
                              fontSize: '12px',
                              fontStyle: 'italic',
                              color: 'rgba(216,217,216,0.35)',
                            }}
                          >
                            (Деталі - в інформаційних зображеннях)
                          </p>
                        </div>
                      )}

                      {!isExpanded && (
                        <p className="text-xs italic mb-5" style={{ color: 'rgba(216,217,216,0.4)' }}>
                          (Тисни <strong>Про проект</strong> щоб дізнатись більше)
                        </p>
                      )}

                      <div className="mb-5">
                        <p
                          className="mb-1"
                          style={{
                            fontFamily: '"Actay Wide", system-ui, sans-serif',
                            fontWeight: 700,
                            fontSize: '16px',
                            color: 'rgba(216,217,216,0.9)',
                          }}
                        >
                          Загальна <span style={{ color: '#7667ED' }}>сума збору:</span>
                        </p>
                        <p
                          style={{
                            fontFamily: '"Actay Wide", system-ui, sans-serif',
                            fontWeight: 700,
                            fontSize: 'clamp(1.75rem, 3vw, 2.25rem)',
                            color: 'white',
                            lineHeight: 1.1,
                          }}
                        >
                          {formatCurrency(project.target)} $
                        </p>
                        <p className="text-sm" style={{ color: 'rgba(216,217,216,0.5)' }}>
                          (≈ {project.collectedUah} грн)
                        </p>
                      </div>

                      <button
                        onClick={() => toggle(project.id)}
                        className="flex items-center gap-2 px-6 py-4 rounded-full text-sm font-medium transition-all duration-300"
                        style={{ backgroundColor: '#7667ED', color: 'white' }}
                        onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#8B7CF8')}
                        onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#7667ED')}
                      >
                        Про проєкт
                        {isExpanded ? <ChevronUp size={15} /> : <ChevronDown size={15} />}
                      </button>
                    </div>

                    {/* ── Правая колонка ── */}
                    <div className="flex-shrink-0 flex flex-col gap-3" style={{ width: '340px' }}>

                      {/* Картинка — только свёрнуто */}
                      {!isExpanded && (
                        <div className="w-full rounded-2xl overflow-hidden" style={{ aspectRatio: '4/3' }}>
                          <img src={project.image} alt={project.title} className="w-full h-full object-cover" draggable={false} />
                        </div>
                      )}

                      {/* Карусель — только раскрыто */}
                      {isExpanded && (
                        <div
                          className="overflow-hidden flex-shrink-0"
                          style={{ width: '340px', height: '700px', borderRadius: '32px', backgroundColor: '#7667ED' }}
                        >
                          <VerticalCarousel images={project.carousel} speed={0.5} />
                        </div>
                      )}

                      {/* Інфографік — всегда */}
                      <div className="flex gap-3 items-start">
                        {/* Левый текст */}
                        <div className="flex-1 flex flex-col gap-2 py-1">
                          <div>
                            <p style={{ fontSize: '13px', color: 'rgba(216,217,216,0.5)', marginBottom: '2px' }}>
                              Вже залучено у проєкті:
                            </p>
                            <p style={{
                              fontFamily: '"Actay Wide", system-ui, sans-serif',
                              fontWeight: 700,
                              fontSize: '15px',
                              lineHeight: '20px',
                              color: 'white',
                              marginBottom: '2px',
                            }}>
                              {formatCurrency(project.collected)} $ / {formatCurrency(project.target)} $
                            </p>
                          </div>
                          <div>
                            <p style={{ lineHeight: '26px' }}>
                              <span style={{
                                fontFamily: '"Actay Wide", system-ui, sans-serif',
                                fontWeight: 700,
                                fontSize: '22px',
                                color: 'white',
                              }}>
                                {project.investors}
                              </span>
                              {' '}
                              <span style={{
                                fontFamily: '"Actay", system-ui, sans-serif',
                                fontWeight: 400,
                                fontSize: '13px',
                                color: 'rgba(216,217,216,0.65)',
                              }}>
                                сертифікатів вже активовано
                              </span>
                            </p>
                            <p style={{ fontSize: '12px', color: 'rgba(216,217,216,0.35)', marginTop: '4px' }}>
                              Кількість сертифікатів обмежена.
                            </p>
                          </div>
                        </div>

                        {/* Чарт */}
                        <div
                          className="flex-shrink-0 overflow-hidden"
                          style={{ width: '160px', height: '130px', borderRadius: '16px' }}
                        >
                          <img src={project.graph} alt="chart" className="w-full h-full" style={{ objectFit: 'fill' }} draggable={false} />
                        </div>
                      </div>

                      {/* Кнопка — только раскрыто */}
                      {isExpanded && (
                        <button
                          onClick={openForm}
                          className="w-full py-3 rounded-full font-bold text-sm transition-all duration-300"
                          style={{ backgroundColor: '#7667ED', color: 'white' }}
                          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#8B7CF8')}
                          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#7667ED')}
                        >
                          Зв'язатись з менеджером
                        </button>
                      )}
                    </div>

                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Дополнительная информация */}
        <div
          className="mt-10 max-w-4xl"
          style={{
            fontFamily: '"Actay Wide", system-ui, sans-serif',
            fontWeight: 700,
            color: '#29292B',
          }}
        >
          <p style={{ fontSize: '18px', lineHeight: '24px', marginBottom: '16px' }}>
            90% доходів від чистого прибутку належать інвесторам (тобто Вам). Чим більше ви інвестуєте в проєкт, тим більший дохід отримуєте з його чистого прибутку. Усе логічно та справедливо.
          </p>
          <p style={{ fontSize: '18px', lineHeight: '24px', marginBottom: '16px' }}>
            10% доходів від чистого прибутку проєктів належать керуючій компанії проєкту — IFW, оскільки компанія також здійснює власні інвестиції в кожен проєкт, виступає його організатором і реалізатором, а також забезпечує управління, утримує професійну команду, здійснює контроль та розвиток кожного проєкту.
          </p>
          <p style={{ fontSize: '18px', lineHeight: '24px' }}>
            Після завершення збору інвестицій буде проведено повний перерахунок кількості інвесторів і сум їхніх інвестицій по всім проєктам для точного розрахунку часток кожного із співвласників діючого бізнесу.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProjectsBlock;

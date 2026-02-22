const InvestorBlock = () => {
  return (
    <section className="px-6" style={{ paddingTop: '120px', paddingBottom: '80px' }}>
      <div className="max-w-[1168px] mx-auto">

        {/* Заголовок: "Як це" белый + "ПРАЦЮЄ?" жирный фиолетовый */}
        <h2
          className="text-center"
          style={{ fontFamily: '"Gill Sans", system-ui, sans-serif', fontWeight: 700, marginBottom: '80px' }}
        >
          Як це{' '}
          <span style={{ color: '#7667ED', textTransform: 'uppercase' }}>ПРАЦЮЄ?</span>
        </h2>

        {/* Параграфы — Actay Regular 400, 28px/32px; выделения — Actay Wide Bold 700 */}
        <div
          className="space-y-6"
          style={{
            fontFamily: '"Actay", system-ui, sans-serif',
            fontWeight: 400,
            color: '#D8D9D8',
          }}
        >
          <p style={{ fontSize: '28px', lineHeight: '32px' }}>
            <span style={{ color: '#7667ED', fontFamily: '"Actay Wide", system-ui, sans-serif', fontWeight: 700 }}>Додатково</span>
            {' '}— діє унікальна реферальна система, що дозволяє{' '}
            <span style={{ color: '#7667ED', fontFamily: '"Actay Wide", system-ui, sans-serif', fontWeight: 700 }}>збільшувати прибуток</span>
            , або підвищувати власну інвестицію в наявних проектах відповідно до вашого статусу інвестора{' '}
            <span style={{ color: '#7667ED', fontFamily: '"Actay Wide", system-ui, sans-serif', fontWeight: 700 }}>IFW</span>.
          </p>

          <p style={{ fontSize: '28px', lineHeight: '32px' }}>
            Персоналізований{' '}
            <span style={{ color: '#7667ED', fontFamily: '"Actay Wide", system-ui, sans-serif', fontWeight: 700 }}>цифровий</span>
            {' '}та{' '}
            <span style={{ color: '#7667ED', fontFamily: '"Actay Wide", system-ui, sans-serif', fontWeight: 700 }}>фізичний сертифікат інвестора</span>
            <br />
            Іменний документ, що підтверджує ваш статус та участь у проектах{' '}
            <span style={{ color: '#7667ED', fontFamily: '"Actay Wide", system-ui, sans-serif', fontWeight: 700 }}>IFW</span>
            {' '}як співвласника{' '}
            <span style={{ color: '#7667ED', fontFamily: '"Actay Wide", system-ui, sans-serif', fontWeight: 700 }}>обраного проєкту</span>
            {' '}та ваш % у ньому.
          </p>

          <p style={{ fontSize: '28px', lineHeight: '32px' }}>
            Обирайте свій{' '}
            <span style={{ color: '#7667ED', fontFamily: '"Actay Wide", system-ui, sans-serif', fontWeight: 700 }}>інвест статус</span>
            {' '}та ставайте партнером{' '}
            <span style={{ color: '#7667ED', fontFamily: '"Actay Wide", system-ui, sans-serif', fontWeight: 700 }}>IFW</span>
            {' '}з обраних потенційних проєктів.
          </p>
        </div>

      </div>
    </section>
  );
};

export default InvestorBlock;

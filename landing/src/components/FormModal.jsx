import { useState, useEffect } from 'react';
import { X, User, Phone, Mail } from 'lucide-react';

const FormModal = ({ isOpen, onClose }) => {
  const [form, setForm] = useState({ name: '', phone: '', email: '' });
  const [agreed, setAgreed] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    if (isOpen) window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [isOpen, onClose]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!agreed) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setForm({ name: '', phone: '', email: '' });
      setAgreed(false);
      onClose();
    }, 2500);
  };

  if (!isOpen) return null;

  const fields = [
    { key: 'name', placeholder: "Ім'я", type: 'text', Icon: User },
    { key: 'phone', placeholder: 'Номер телефону', type: 'tel', Icon: Phone },
    { key: 'email', placeholder: 'E-mail', type: 'email', Icon: Mail },
  ];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ backgroundColor: 'rgba(0,0,0,0.55)', backdropFilter: 'blur(6px)' }}
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-[400px] rounded-3xl px-8 py-10"
        style={{ backgroundColor: '#E8E8EA', boxShadow: '0 32px 80px rgba(0,0,0,0.45)' }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-7 h-7 flex items-center justify-center rounded-full transition-colors"
          style={{ color: '#888', backgroundColor: 'rgba(0,0,0,0.07)' }}
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(118,103,237,0.15)'}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgba(0,0,0,0.07)'}
        >
          <X size={14} />
        </button>

        {submitted ? (
          <div className="text-center py-8">
            <div
              className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl"
              style={{ backgroundColor: 'rgba(118,103,237,0.15)', color: '#7667ED' }}
            >
              ✓
            </div>
            <h3
              className="text-xl font-bold mb-2"
              style={{ color: '#1A1A1A', fontFamily: '"Gill Sans", system-ui, sans-serif' }}
            >
              Дякуємо!
            </h3>
            <p className="text-sm" style={{ color: '#777' }}>
              Ми зв'яжемось з вами найближчим часом.
            </p>
          </div>
        ) : (
          <>
            {/* Heading */}
            <h2
              className="text-center font-bold mb-1"
              style={{
                fontFamily: '"Gill Sans", system-ui, sans-serif',
                color: '#1A1A1A',
                fontSize: 'clamp(1.375rem, 2vw, 1.625rem)',
              }}
            >
              Залиште заявку
            </h2>
            <p className="text-center text-sm mb-7" style={{ color: '#777', fontFamily: '"Actay", system-ui, sans-serif' }}>
              Ми зв'яжемось з вами у найближчий час
            </p>

            <form onSubmit={handleSubmit} className="space-y-3">
              {fields.map(({ key, placeholder, type, Icon }) => (
                <div
                  key={key}
                  className="flex items-center gap-3 rounded-2xl px-4 py-3.5"
                  style={{
                    backgroundColor: '#fff',
                    boxShadow: '0 1px 4px rgba(0,0,0,0.06)',
                  }}
                >
                  <Icon size={17} style={{ color: '#BBBBBB', flexShrink: 0 }} />
                  <input
                    type={type}
                    placeholder={placeholder}
                    required={key !== 'email'}
                    value={form[key]}
                    onChange={(e) => setForm((f) => ({ ...f, [key]: e.target.value }))}
                    className="flex-1 bg-transparent outline-none text-sm"
                    style={{
                      color: '#222',
                      fontFamily: '"Actay", system-ui, sans-serif',
                    }}
                  />
                </div>
              ))}

              {/* Submit */}
              <button
                type="submit"
                disabled={!agreed}
                className="w-full py-3.5 rounded-full font-bold text-sm transition-all duration-300 mt-1"
                style={{
                  backgroundColor: agreed ? '#7667ED' : '#B0A8F5',
                  color: '#fff',
                  fontFamily: '"Actay", system-ui, sans-serif',
                  cursor: agreed ? 'pointer' : 'not-allowed',
                  boxShadow: agreed ? '0 4px 20px rgba(118,103,237,0.35)' : 'none',
                  transition: 'background-color 0.2s, box-shadow 0.2s',
                }}
                onMouseEnter={(e) => { if (agreed) e.currentTarget.style.backgroundColor = '#8B7CF8'; }}
                onMouseLeave={(e) => { if (agreed) e.currentTarget.style.backgroundColor = '#7667ED'; }}
              >
                Залишити заявку
              </button>

              {/* Checkbox */}
              <label className="flex items-start gap-2 cursor-pointer pt-1">
                <div className="relative flex-shrink-0 mt-0.5">
                  <input
                    type="checkbox"
                    checked={agreed}
                    onChange={(e) => setAgreed(e.target.checked)}
                    className="sr-only"
                  />
                  <div
                    className="w-4 h-4 rounded flex items-center justify-center transition-colors"
                    style={{
                      backgroundColor: agreed ? '#7667ED' : 'transparent',
                      border: `1.5px solid ${agreed ? '#7667ED' : '#BBBBBB'}`,
                    }}
                  >
                    {agreed && (
                      <svg width="9" height="7" viewBox="0 0 9 7" fill="none">
                        <path d="M1 3.5L3.5 6L8 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    )}
                  </div>
                </div>
                <span className="text-xs leading-relaxed" style={{ color: '#888', fontFamily: '"Actay", system-ui, sans-serif' }}>
                  Погоджуюсь з{' '}
                  <a
                    href="#"
                    style={{ color: '#7667ED', textDecoration: 'underline' }}
                    onClick={(e) => e.preventDefault()}
                  >
                    умовами передачі даних
                  </a>
                </span>
              </label>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default FormModal;

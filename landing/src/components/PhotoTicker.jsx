import { useRef, useEffect } from 'react';

const IMAGES = [
  '/carousel pj1/IMG_7489 1.svg',
  '/carousel pj1/IMG_7490 1.svg',
  '/carousel pj1/IMG_7491 1.svg',
  '/carousel pj1/IMG_7492 1.svg',
  '/carousel pj 2/IMG_7497 1.svg',
  '/carousel pj 2/IMG_7498 1.svg',
  '/carousel pj 2/IMG_7499 1.svg',
  '/carousel pj 2/IMG_7500 1.svg',
];

const ITEM_WIDTH = 372;   // Figma: ~372px per image
const ITEM_HEIGHT = 585;  // Figma: ~585px image height in 660px container
const ITEM_GAP = 24;      // Figma: gap 24px
const SPEED = 0.6;        // px per frame

const PhotoTicker = () => {
  const trackRef = useRef(null);
  const posRef = useRef(0);
  const rafRef = useRef(null);

  const doubled = [...IMAGES, ...IMAGES];
  const totalWidth = IMAGES.length * (ITEM_WIDTH + ITEM_GAP);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const animate = () => {
      posRef.current += SPEED;
      if (posRef.current >= totalWidth) posRef.current = 0;
      track.style.transform = `translateX(-${posRef.current}px)`;
      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafRef.current);
  }, [totalWidth]);

  return (
    <section
      className="overflow-hidden"
      style={{
        backgroundColor: 'var(--color-bg)',
        height: '660px',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <div
        ref={trackRef}
        className="flex"
        style={{
          gap: `${ITEM_GAP}px`,
          willChange: 'transform',
          width: 'max-content',
          alignItems: 'center',
        }}
      >
        {doubled.map((src, i) => (
          <div
            key={i}
            className="flex-shrink-0 overflow-hidden"
            style={{
              width: `${ITEM_WIDTH}px`,
              height: `${ITEM_HEIGHT}px`,
              borderRadius: '20px',
            }}
          >
            <img
              src={src}
              alt=""
              className="w-full h-full object-cover"
              draggable={false}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default PhotoTicker;

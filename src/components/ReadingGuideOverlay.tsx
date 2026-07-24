import React, { useEffect, useState } from 'react';

interface Props {
  enabled: boolean;
}

export const ReadingGuideOverlay: React.FC<Props> = ({ enabled }) => {
  const [mouseY, setMouseY] = useState<number>(200);

  useEffect(() => {
    if (!enabled) return;

    const handleMouseMove = (e: MouseEvent) => {
      setMouseY(e.clientY);
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches && e.touches[0]) {
        setMouseY(e.touches[0].clientY);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleTouchMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <div 
      className="reading-guide"
      style={{ top: `${mouseY}px` }}
      aria-hidden="true"
    />
  );
};

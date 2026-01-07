'use client';

import { useEffect, useRef } from 'react';

interface TestVersionBannerProps {
  headerRef: React.RefObject<HTMLElement | null>;
}

/**
 * Компонент баннера с предупреждением о тестовой версии сайта
 * 
 * Функционал:
 * - Фиксированный баннер сверху страницы
 * - Динамическое вычисление высоты и позиционирование header под баннером
 * - Убирает зазор между баннером и header
 * - Ссылка на основной сайт csrenovation.com
 */
export default function TestVersionBanner({ headerRef }: TestVersionBannerProps) {
  const bannerRef = useRef<HTMLDivElement>(null);

  // ============================================
  // Динамическое позиционирование header
  // ============================================
  // Вычисляем реальную высоту баннера и устанавливаем header точно под ним
  // Это решает проблему белого зазора между баннером и header
  useEffect(() => {
    const updateHeaderPosition = () => {
      if (bannerRef.current && headerRef.current) {
        // Получаем реальную высоту баннера (может меняться в зависимости от контента и размера экрана)
        const bannerHeight = bannerRef.current.offsetHeight;
        
        // Устанавливаем header точно под баннером (без зазора)
        headerRef.current.style.top = `${bannerHeight}px`;
        
        // Сохраняем высоту в CSS переменную для использования в других местах
        // (например, для padding-top контента)
        document.documentElement.style.setProperty('--banner-height', `${bannerHeight}px`);
      }
    };

    // Вызываем сразу при загрузке страницы
    updateHeaderPosition();
    
    // Также вызываем при изменении размера окна (responsive)
    // Например, если баннер меняет высоту на мобильных устройствах
    window.addEventListener('resize', updateHeaderPosition);
    
    // Очистка: убираем слушатель при размонтировании компонента
    return () => window.removeEventListener('resize', updateHeaderPosition);
  }, [headerRef]);

  return (
    <div 
      ref={bannerRef}
      id="test-version" 
      className="fixed top-0 left-0 right-0 z-30 bg-gradient-to-r from-amber-500 via-orange-500 to-amber-500 text-white px-4 py-2 sm:py-3 text-center text-xs sm:text-sm font-semibold shadow-lg leading-tight"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-center gap-2 sm:gap-3">
        <span className="flex-1 text-center">
          <span className="font-bold">⚠️ Test Version</span> — Visit our main website: 
          <a 
            href="https://csrenovation.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="underline ml-1 font-bold hover:text-amber-100 transition-colors"
          >
            csrenovation.com
          </a>
        </span>
      </div>
    </div>
  );
}


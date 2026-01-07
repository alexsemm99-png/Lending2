'use client'

import React, { useState, forwardRef } from 'react'
import { FaPhone, FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa'
import BurgerMenu from './ui/BurgerMenu'

// ============================================
// ИЗМЕНЕНИЕ: Header теперь использует forwardRef
// ============================================
// forwardRef позволяет передать ref из родительского компонента (page.tsx)
// Это нужно для динамического позиционирования header под баннером
// Без forwardRef мы не смогли бы получить доступ к DOM элементу header из page.tsx
const Header = forwardRef<HTMLElement>((props, ref) => {
    // состояние для мобильного меню
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // функция для скролла наверх
    const scrollToTop = (e?: React.MouseEvent) => {
        if (e) {
            e.preventDefault();
            e.stopPropagation();
        }
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
        setIsMobileMenuOpen(false);
    };

    // ============================================
    // ИЗМЕНЕНИЕ: Header теперь позиционируется динамически
    // ============================================
    // ref={ref} - получаем ссылку на DOM элемент для изменения позиции через JS
    // style={{ top: 'var(--banner-height, 48px)' }} - используем CSS переменную
    // которая устанавливается в page.tsx через JavaScript
    //
    // Раньше было: top-[48px] sm:top-[56px] md:top-[64px] (фиксированные значения)
    // Теперь: динамическое значение через CSS переменную --banner-height
    //
    // Это решает проблему белого зазора между баннером и header
    // Значение по умолчанию: 48px (на случай, если JS не загрузился)

    return (
        <header ref={ref} className="fixed left-0 right-0 z-20 w-full px-3 sm:px-4 md:px-6 lg:px-8 py-2 sm:py-2 bg-[#063A55]/70 backdrop-blur-md shadow-lg text-gray-300 transition-all duration-300" style={{ top: 'var(--banner-height, 48px)' }}>
            {/* Desktop/Tablet Layout */}
            <div className='hidden md:flex justify-between items-center max-w-7xl mx-auto h-12 sm:h-14'>
                {/* Logo and Company Name */}
                <div className='flex items-center gap-2 sm:gap-3'>
                    <img src="/logo.svg" alt="Cornerstone Renovation" className="w-8 h-8 sm:w-10 sm:h-10 bg-white rounded-full shadow-lg" />
                    <button 
                        className="hidden sm:inline bg-gradient-to-r from-white via-gray-100 to-gray-200 bg-clip-text text-transparent font-bold text-sm sm:text-base lg:text-lg tracking-wide"
                    >
                        Cornerstone Renovation
                    </button>
                </div>
                
                {/* Desktop Navigation */}
                <div className='hidden lg:flex gap-6 xl:gap-8 items-center'>
                    <a 
                        href="tel:+19524658195" 
                        className="flex items-center px-3 py-2 rounded-md hover:bg-gray-800/50 transition-all duration-300"
                        aria-label="Call us"
                    >
                        <FaPhone size={18} className="text-orange-400" />
                    </a>
                    <a 
                        href="https://maps.app.goo.gl/qiPkPwXGwAcZgNhi6" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center px-3 py-2 rounded-md hover:bg-gray-800/50 transition-all duration-300"
                        aria-label="View location"
                    >
                        <FaMapMarkerAlt size={18} className="text-orange-400" />
                    </a>
                    <a 
                        href="https://mail.google.com/mail/?view=cm&fs=1&to=cornerstone_renovation@outlook.com&su=Home%20Renovation%20Inquiry&body=Hello%20Cornerstone%20Renovation%20LLC,%0A%0AI%20am%20interested%20in%20your%20renovation%20services.%20Please%20contact%20me%20to%20discuss%20my%20project.%0A%0AThank%20you!" 
                        className="flex items-center px-3 py-2 rounded-md hover:bg-gray-800/50 transition-all duration-300"
                        aria-label="Send email"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaEnvelope size={18} className="text-orange-400" />
                    </a>
                </div>
                
                {/* Tablet Navigation */}
                <div className='hidden md:flex lg:hidden gap-6 items-center'>
                    <a 
                        href="tel:+19524658195" 
                        className="flex items-center px-3 py-2 rounded-md hover:bg-gray-800/50 transition-all duration-300"
                        aria-label="Call us"
                    >
                        <FaPhone size={18} className="text-orange-400" />
                    </a>
                    <a 
                        href="https://maps.app.goo.gl/qiPkPwXGwAcZgNhi6" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center px-3 py-2 rounded-md hover:bg-gray-800/50 transition-all duration-300"
                        aria-label="View location"
                    >
                        <FaMapMarkerAlt size={18} className="text-orange-400" />
                    </a>
                    <a 
                        href="mailto:cornerstone_renovation@outlook.com" 
                        className="flex items-center px-3 py-2 rounded-md hover:bg-gray-800/50 transition-all duration-300"
                        aria-label="Send email"
                    >
                        <FaEnvelope size={18} className="text-orange-400" />
                    </a>
                </div>
            </div>

            {/* Mobile Layout */}
            <div className='md:hidden relative flex items-center justify-between max-w-7xl mx-auto h-12 sm:h-14'>
                {/* Burger Menu Button - Left */}
                <BurgerMenu 
                    isOpen={isMobileMenuOpen}
                    onToggle={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    onClose={() => setIsMobileMenuOpen(false)}
                />

                {/* Logo - Absolute Center */}
                <div className='absolute left-1/2 transform -translate-x-1/2 flex items-center'>
                    <img src="/logo.svg" alt="Cornerstone Renovation" className="w-8 h-8 bg-white rounded-full shadow-lg" />
                </div>

                {/* Icons - Right */}
                <div className='flex items-center gap-4'>
                    <a 
                        href="tel:+19524658195" 
                        className="flex items-center px-2 py-2 rounded-md hover:bg-gray-800/50 transition-all duration-300"
                        aria-label="Call us"
                    >
                        <FaPhone size={18} className="text-orange-400" />
                    </a>
                    <a 
                        href="https://maps.app.goo.gl/qiPkPwXGwAcZgNhi6" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center px-2 py-2 rounded-md hover:bg-gray-800/50 transition-all duration-300"
                        aria-label="View location"
                    >
                        <FaMapMarkerAlt size={18} className="text-orange-400" />
                    </a>
                    <a 
                        href="mailto:cornerstone_renovation@outlook.com"
                        className="flex items-center px-2 py-2 rounded-md hover:bg-gray-800/50 transition-all duration-300"
                        aria-label="Send email"
                    >
                        <FaEnvelope size={18} className="text-orange-400" />
                    </a>
                </div>
            </div>

        </header>
    )
});

Header.displayName = 'Header';

export default Header;
'use client';

import './globals.css';
import { useRef } from 'react';

import Header from "@/components/Header";
import Main from "@/components/Main";
import Footer from "@/components/Footer";
import ScrollToTopButton from "@/components/ui/ScrollToTopButton";
import TestVersionBanner from "@/components/TestVersionBanner";

export default function Home() {
  // Ref для header компонента (передается в TestVersionBanner для позиционирования)
  const headerRef = useRef<HTMLElement>(null);

  return (
    <div className='flex flex-col min-h-screen'>
      {/* Баннер с предупреждением о тестовой версии */}
      <TestVersionBanner headerRef={headerRef} />
      
      {/* Контент с padding-top для компенсации фиксированного header */}
      <div style={{ paddingTop: 'var(--banner-height, 48px)' }}>
        <Header ref={headerRef} />
        <Main className='flex-1'/>
        <Footer />
        <ScrollToTopButton />
      </div>
    </div>
  );
}

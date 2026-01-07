'use client'

import React, { useState, useEffect } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

interface FormData {
    name: string;
    email: string;
    phone: string;
    message: string;
}

export default function ContactForm() {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showMessage, setShowMessage] = useState(false);
    const [messageText, setMessageText] = useState('');

    // Функция для показа сообщения
    const showNotification = (text: string) => {
        setMessageText(text);
        setShowMessage(true);
        setTimeout(() => {
            setShowMessage(false);
        }, 4000);
    };

    // Функция для автоматического изменения высоты textarea
    const autoResizeTextarea = (textarea: HTMLTextAreaElement) => {
        textarea.style.height = 'auto';
        textarea.style.height = textarea.scrollHeight + 'px';
    };

    // Предотвращаем горизонтальный скролл на iOS при фокусе на поля
    useEffect(() => {
        const preventHorizontalScroll = () => {
            document.body.style.overflowX = 'hidden';
            document.documentElement.style.overflowX = 'hidden';
        };

        const restoreScroll = () => {
            document.body.style.overflowX = 'unset';
            document.documentElement.style.overflowX = 'unset';
        };

        // Применяем стили при монтировании
        preventHorizontalScroll();

        // Очищаем при размонтировании
        return () => {
            restoreScroll();
        };
    }, []);

    const formatPhoneNumber = (value: string) => {
        // Удаляем все нецифровые символы
        const phoneNumber = value.replace(/\D/g, '');
        
        // Если номер начинается с цифр, форматируем его
        if (phoneNumber.length >= 3) {
            const areaCode = phoneNumber.slice(0, 3);
            const remaining = phoneNumber.slice(3);
            
            if (remaining.length === 0) {
                return `(${areaCode})`;
            } else if (remaining.length <= 3) {
                return `(${areaCode}) ${remaining}`;
            } else {
                return `(${areaCode}) ${remaining.slice(0, 3)}-${remaining.slice(3, 7)}`;
            }
        }
        
        return phoneNumber;
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        
        if (name === 'phone') {
            const formattedPhone = formatPhoneNumber(value);
            setFormData(prev => ({
                ...prev,
                [name]: formattedPhone
            }));
        } else {
            setFormData(prev => ({
                ...prev,
                [name]: value
            }));
        }

        // Автоматически изменяем высоту textarea
        if (name === 'message' && e.target instanceof HTMLTextAreaElement) {
            autoResizeTextarea(e.target);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        
        try {
            const response = await fetch('https://formspree.io/f/mwpwpoeb', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    phone: formData.phone,
                    message: formData.message,
                    _subject: 'New Contact Form Submission - Cornerstone Renovation'
                })
            });

            if (response.ok) {
                // Reset form
                setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    message: ''
                });
                showNotification('Message sent! We\'ll contact you soon.');
            } else {
                throw new Error('Form submission failed');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            showNotification('Error sending message. Please try again.');
        }
        
        setIsSubmitting(false);
    };

    return (
        <section id="contact-form" className="pt-16 sm:pt-24 md:pt-28 lg:pt-32 pb-8 sm:pb-12 md:pb-16 lg:pb-20 xl:pb-24 bg-gray-50 overflow-x-hidden scroll-mt-16">
            <div className="container mx-auto px-2 xs:px-3 sm:px-6 md:px-8 lg:px-12 xl:px-16 max-w-7xl overflow-x-hidden">
                <div className="text-center mb-8 sm:mb-12 md:mb-16 lg:mb-20">
                    <h2 id="free-estimate-title" className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#063A55]/90 mb-3 sm:mb-4 md:mb-6 scroll-mt-16 md:scroll-mt-20">
                        Get Your Free Estimate
                    </h2>
                    <div className="w-16 sm:w-20 md:w-24 lg:w-28 h-1 bg-[#063A55]/70 mx-auto rounded-full mb-3 sm:mb-4"></div>
                    {/* <div className="w-16 sm:w-20 md:w-24 lg:w-28 h-1 bg-black mx-auto mb-3 sm:mb-4"></div> */}
                    <p className="text-[#063A55]/70 max-w-xs xs:max-w-sm sm:max-w-md md:max-w-2xl lg:max-w-3xl mx-auto text-sm sm:text-base md:text-lg lg:text-xl">
                        Ready to transform your home? Contact us today for a free consultation and estimate.
                    </p>
                </div>

                <div className="flex justify-center max-w-2xl mx-auto">

                    {/* Всплывающее сообщение */}
                    {showMessage && (
                        <div className="fixed top-16 sm:top-20 left-1/2 transform -translate-x-1/2 z-50 bg-green-500 text-white px-3 py-2 sm:px-6 sm:py-3 rounded-lg shadow-lg animate-pulse text-sm sm:text-base mx-2 inline-block max-w-[95vw] sm:max-w-md">
                            {messageText}
                        </div>
                    )}

                    {/* Contact Form */}
                    <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 md:p-8 w-full">
                        <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                                    Full Name *
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-md sm:focus:ring-2 sm:focus:ring-blue-500 sm:focus:border-transparent text-base"
                                    placeholder="Your full name"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                                    Email Address *
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-md sm:focus:ring-2 sm:focus:ring-blue-500 sm:focus:border-transparent text-base"
                                    placeholder="your.email@example.com"
                                />
                            </div>

                            <div>
                                <label htmlFor="phone" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                                    Phone Number
                                </label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-md sm:focus:ring-2 sm:focus:ring-blue-500 sm:focus:border-transparent text-base"
                                    placeholder="(555) 123-4567"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                                    Project Details
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows={4}
                                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-md sm:focus:ring-2 sm:focus:ring-blue-500 sm:focus:border-transparent text-base resize-none overflow-hidden"
                                    placeholder="Tell us about your renovation project..."
                                    style={{ minHeight: '100px' }}
                                />
                            </div>

                            <button
                                disabled={true}
                                type="submit"
                                // disabled={isSubmitting}
                                className="w-full bg-orange-400 text-white py-2.5 sm:py-3 px-4 sm:px-6 rounded-md hover:bg-orange-500 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed font-medium text-sm sm:text-base"
                            >
                                {isSubmitting ? 'Sending...' : 'Get Free Estimate'}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

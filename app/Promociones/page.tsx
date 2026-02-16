'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';

const slides = [
    {
        id: 1,
        model: 'Swift Booster Green',
        title: 'Nueva Era\nde Eficiencia',
        price: '$4,599',
        description: 'Tecnología híbrida avanzada con diseño deportivo. Experimenta la combinación perfecta de potencia y economía.',
        image: 'https://www.suzukiangelopolis.com.mx/Assets/img/Promociones/Globales/thumbs/1635.jpg',
    },
    {
        id: 2,
        model: 'Vitara All Grip',
        title: 'Aventura\nSin Límites',
        price: '$5,299',
        description: 'SUV compacta con tracción 4x4 inteligente. Diseñada para conquistar cualquier terreno con estilo.',
        image: 'https://www.suzukiangelopolis.com.mx/Assets/img/Promociones/Globales/thumbs/1635.jpg',
    },
    {
        id: 3,
        model: 'Jimny 4x4',
        title: 'Leyenda\nOff-Road',
        price: '$6,799',
        description: 'El icono todoterreno reimaginado. Capacidad extrema en un formato compacto y ágil.',
        image: 'https://www.suzukiangelopolis.com.mx/Assets/img/Promociones/Globales/thumbs/1635.jpg',
    },
    {
        id: 4,
        model: 'S-Cross Turbo',
        title: 'Crossover\nPremium',
        price: '$5,899',
        description: 'Elegancia y tecnología en perfecta armonía. Tu compañero ideal para la vida urbana y más allá.',
        image: 'https://www.suzukiangelopolis.com.mx/Assets/img/Promociones/Globales/thumbs/1635.jpg'
    },
];

// export default function AutoCarousel() {
//     const [currentSlide, setCurrentSlide] = useState(0);
//     const [isAnimating, setIsAnimating] = useState(false);

//     const nextSlide = useCallback(() => {
//         if (!isAnimating) {
//             setIsAnimating(true);
//             setCurrentSlide((prev) => (prev + 1) % slides.length);
//             setTimeout(() => setIsAnimating(false), 800);
//         }
//     }, [isAnimating]);

//     const prevSlide = useCallback(() => {
//         if (!isAnimating) {
//             setIsAnimating(true);
//             setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
//             setTimeout(() => setIsAnimating(false), 800);
//         }
//     }, [isAnimating]);

//     const goToSlide = (index) => {
//         if (!isAnimating && index !== currentSlide) {
//             setIsAnimating(true);
//             setCurrentSlide(index);
//             setTimeout(() => setIsAnimating(false), 800);
//         }
//     };

//     // Auto-play
//     useEffect(() => {
//         const interval = setInterval(nextSlide, 5000);
//         return () => clearInterval(interval);
//     }, [nextSlide]);

//     // Keyboard navigation
//     useEffect(() => {
//         const handleKeyDown = (e) => {
//             if (e.key === 'ArrowLeft') prevSlide();
//             if (e.key === 'ArrowRight') nextSlide();
//         };
//         window.addEventListener('keydown', handleKeyDown);
//         return () => window.removeEventListener('keydown', handleKeyDown);
//     }, [nextSlide, prevSlide]);

//     // Touch support
//     useEffect(() => {
//         let startX = 0;
//         let endX = 0;

//         const handleTouchStart = (e) => {
//             startX = e.touches[0].clientX;
//         };

//         const handleTouchEnd = (e) => {
//             endX = e.changedTouches[0].clientX;
//             if (startX - endX > 50) nextSlide();
//             if (endX - startX > 50) prevSlide();
//         };

//         const carousel = document.getElementById('carousel-container');
//         carousel?.addEventListener('touchstart', handleTouchStart);
//         carousel?.addEventListener('touchend', handleTouchEnd);

//         return () => {
//             carousel?.removeEventListener('touchstart', handleTouchStart);
//             carousel?.removeEventListener('touchend', handleTouchEnd);
//         };
//     }, [nextSlide, prevSlide]);

//     return (
//         <div
//             id="carousel-container"
//             className="relative w-full h-screen overflow-hidden bg-linear-to-br from-zinc-800 to-zinc-900"
//         >
//             {/* Slides Container */}
//             <div className="relative w-full h-full">
//                 {slides.map((slide, index) => (
//                     <div
//                         key={slide.id}
//                         className={`absolute inset-0 transition-all duration-800 ease-in-out ${index === currentSlide
//                             ? 'opacity-100 translate-x-0'
//                             : index < currentSlide
//                                 ? 'opacity-0 -translate-x-full'
//                                 : 'opacity-0 translate-x-full'
//                             }`}
//                     >
//                         {/* Background Pattern */}
//                         <div
//                             className="absolute inset-0 opacity-[0.03] pointer-events-none"
//                             style={{
//                                 backgroundImage:
//                                     'repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.05) 35px, rgba(255,255,255,.05) 70px)',
//                             }}
//                         />

//                         {/* Accent Light */}
//                         <div className="absolute top-1/2 left-0 w-75 h-75 -translate-y-1/2 bg-red-600/20 blur-[80px] pointer-events-none" />

//                         {/* Content Grid */}
//                         <div className="relative h-full max-w-350 mx-auto px-8 md:px-16 flex items-center">
//                             <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 w-full items-center">
//                                 {/* Image */}
//                                 <div
//                                     className={`relative z-10 transition-all duration-1000 ${index === currentSlide
//                                         ? 'opacity-100 translate-x-0'
//                                         : 'opacity-0 -translate-x-24'
//                                         }`}
//                                     style={{ transitionDelay: index === currentSlide ? '200ms' : '0ms' }}
//                                 >
//                                     <div className="relative w-full h-75 md:h-100 lg:h-125">
//                                         <img
//                                             src={slide.image}
//                                             alt={slide.model}
//                                             className="object-contain drop-shadow-[0_30px_60px_rgba(0,0,0,0.5)]"
//                                         />
//                                     </div>
//                                 </div>

//                                 {/* Info */}
//                                 <div
//                                     className={`text-white text-center lg:text-left transition-all duration-1000 ${index === currentSlide
//                                         ? 'opacity-100 translate-x-0'
//                                         : 'opacity-0 translate-x-24'
//                                         }`}
//                                     style={{ transitionDelay: index === currentSlide ? '400ms' : '0ms' }}
//                                 >
//                                     <div className="font-bebas text-2xl md:text-3xl tracking-[3px] mb-5 text-zinc-300 uppercase">
//                                         {slide.model}
//                                     </div>

//                                     <h1 className="font-bebas text-5xl md:text-7xl lg:text-8xl leading-[0.9] mb-8 tracking-wider whitespace-pre-line">
//                                         {slide.title}
//                                     </h1>

//                                     <div className="text-lg md:text-xl font-semibold mb-4 uppercase tracking-[2px]">
//                                         Mensualidades desde
//                                     </div>

//                                     <div className="font-bebas text-6xl md:text-8xl lg:text-9xl text-red-600 leading-none mb-8 drop-shadow-[0_4px_20px_rgba(228,27,35,0.3)]">
//                                         {slide.price}
//                                     </div>

//                                     <p className="text-sm md:text-base leading-relaxed opacity-80 mb-10 max-w-125 mx-auto lg:mx-0">
//                                         {slide.description}
//                                     </p>

//                                     <a
//                                         href="#"
//                                         className="inline-block px-12 py-5 bg-red-600 text-white font-extrabold text-lg uppercase tracking-[2px] rounded-full transition-all duration-300 hover:bg-red-700 hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(228,27,35,0.5)] shadow-[0_10px_30px_rgba(228,27,35,0.3)]"
//                                     >
//                                         ¡Me interesa!
//                                     </a>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 ))}
//             </div>

//             {/* Navigation Controls */}
//             <div className="absolute bottom-16 left-1/2 -translate-x-1/2 flex gap-8 z-50">
//                 <button
//                     onClick={prevSlide}
//                     disabled={isAnimating}
//                     className="w-14 h-14 border-2 border-white/30 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center transition-all duration-300 hover:bg-red-600 hover:border-red-600 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed"
//                     aria-label="Previous slide"
//                 >
//                     <svg className="w-6 h-6 fill-white" viewBox="0 0 24 24">
//                         <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
//                     </svg>
//                 </button>

//                 <button
//                     onClick={nextSlide}
//                     disabled={isAnimating}
//                     className="w-14 h-14 border-2 border-white/30 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center transition-all duration-300 hover:bg-red-600 hover:border-red-600 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed"
//                     aria-label="Next slide"
//                 >
//                     <svg className="w-6 h-6 fill-white" viewBox="0 0 24 24">
//                         <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
//                     </svg>
//                 </button>
//             </div>

//             {/* Dots Indicator */}
//             <div className="absolute bottom-40 left-1/2 -translate-x-1/2 flex gap-4 z-50">
//                 {slides.map((_, index) => (
//                     <button
//                         key={index}
//                         onClick={() => goToSlide(index)}
//                         className={`h-3 rounded-full transition-all duration-300 ${index === currentSlide
//                             ? 'w-10 bg-red-600'
//                             : 'w-3 bg-white/30 hover:bg-white/50'
//                             }`}
//                         aria-label={`Go to slide ${index + 1}`}
//                     />
//                 ))}
//             </div>
//         </div>
//     );
// }

export default function AutoCarousel() {
    return (
        <h1>Hola</h1>
    )
}
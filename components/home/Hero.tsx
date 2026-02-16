// Componente de agencia actualizado con soporte de tema
'use client'

import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight, Calendar, MapPin, Calculator } from 'lucide-react'

export default function AutoDealershipHome() {
    const [currentSlide, setCurrentSlide] = useState(0)

    const vehicles = [
        {
            name: 'Modelo Deportivo GT-R',
            tagline: 'Potencia y elegancia en cada curva',
            image: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?w=1920&q=80',
            specs: '450 HP | 0-100 en 3.8s',
        },
        {
            name: 'SUV Premium Luxe',
            tagline: 'Confort y tecnología sin límites',
            image: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=1920&q=80',
            specs: '7 Pasajeros | 4x4 Inteligente',
        },
        {
            name: 'Sedán Executive',
            tagline: 'Sofisticación redefinida',
            image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=1920&q=80',
            specs: 'Híbrido | Conducción Autónoma',
        },
    ]

    const benefits = [
        {
            title: 'Ingeniería de Precisión',
            description: 'Cada vehículo es sometido a rigurosas pruebas de calidad y rendimiento',
        },
        {
            title: 'Tecnología Avanzada',
            description: 'Sistemas de última generación para una experiencia de conducción superior',
        },
        {
            title: 'Garantía Extendida',
            description: '5 años de cobertura total en todos nuestros modelos',
        },
        {
            title: 'Servicio Premium',
            description: 'Atención personalizada y mantenimiento exclusivo de por vida',
        },
    ]

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % vehicles.length)
        }, 5000)
        return () => clearInterval(timer)
    }, [])

    const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % vehicles.length)
    const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + vehicles.length) % vehicles.length)

    return (
        <div className="h-dvh bg-linear-to-b from-zinc-50 via-white to-zinc-50 dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-950 text-gray-900 dark:text-white transition-colors duration-300">
            {/* Hero Carousel Section */}
            <section className="relative h-screen overflow-hidden">
                {/* Background Images */}
                {vehicles.map((vehicle, index) => (
                    <div
                        key={index}
                        className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'
                            }`}
                    >
                        <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/50 to-transparent dark:from-black/90 dark:via-black/70 dark:to-transparent z-10" />
                        <img
                            src={vehicle.image}
                            alt={vehicle.name}
                            className="w-full h-full object-cover"
                        />
                    </div>
                ))}

                {/* Content Overlay */}
                <div className="relative z-20 h-full flex items-center">
                    <div className="max-w-7xl mx-auto px-8 w-full">
                        <div className="max-w-2xl">
                            {vehicles.map((vehicle, index) => (
                                <div
                                    key={index}
                                    className={`transition-all duration-700 ${index === currentSlide
                                        ? 'opacity-100 translate-x-0'
                                        : 'opacity-0 -translate-x-12 absolute'
                                        }`}
                                >
                                    <div className="inline-block px-4 py-1 bg-white/10 dark:bg-white/5 backdrop-blur-sm border border-white/20 rounded-full text-sm mb-6">
                                        NUEVA COLECCIÓN 2026
                                    </div>
                                    <h1 className="text-7xl font-light mb-4 tracking-tight text-white">
                                        {vehicle.name}
                                    </h1>
                                    <p className="text-2xl text-zinc-200 dark:text-zinc-300 mb-6 font-light">
                                        {vehicle.tagline}
                                    </p>
                                    <p className="text-lg text-zinc-300 dark:text-zinc-400 mb-8">{vehicle.specs}</p>
                                    <button className="group px-8 py-4 bg-white text-black hover:bg-zinc-100 dark:bg-zinc-100 dark:hover:bg-white transition-all duration-300 flex items-center gap-3 font-medium">
                                        DESCUBRIR MÁS
                                        <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Navigation Arrows */}
                <button
                    onClick={prevSlide}
                    className="absolute left-8 top-1/2 -translate-y-1/2 z-30 p-3 bg-white/10 dark:bg-white/5 backdrop-blur-sm border border-white/20 hover:bg-white/20 dark:hover:bg-white/10 transition-all"
                >
                    <ChevronLeft className="w-6 h-6 text-white" />
                </button>
                <button
                    onClick={nextSlide}
                    className="absolute right-8 top-1/2 -translate-y-1/2 z-30 p-3 bg-white/10 dark:bg-white/5 backdrop-blur-sm border border-white/20 hover:bg-white/20 dark:hover:bg-white/10 transition-all"
                >
                    <ChevronRight className="w-6 h-6 text-white" />
                </button>

                {/* Slide Indicators */}
                <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-30 flex gap-3">
                    {vehicles.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentSlide(index)}
                            className={`h-1 transition-all duration-300 ${index === currentSlide ? 'w-12 bg-white' : 'w-8 bg-white/40'
                                }`}
                        />
                    ))}
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="py-24 px-8 bg-white dark:bg-zinc-900 transition-colors duration-300">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-5xl font-light mb-4 tracking-tight">
                            Por Qué Elegirnos
                        </h2>
                        <p className="text-xl text-gray-600 dark:text-zinc-400 max-w-2xl mx-auto font-light">
                            Excelencia automotriz que trasciende expectativas
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {benefits.map((benefit, index) => (
                            <div
                                key={index}
                                className="group p-8 bg-linear-to-b from-gray-50 to-white dark:from-zinc-800/50 dark:to-zinc-900/50 border border-gray-200 dark:border-zinc-800 hover:border-gray-300 dark:hover:border-zinc-700 transition-all duration-300"
                            >
                                <div className="w-12 h-1 bg-blue-600 dark:bg-blue-500 mb-6 group-hover:w-20 transition-all duration-300" />
                                <h3 className="text-xl font-medium mb-4">{benefit.title}</h3>
                                <p className="text-gray-600 dark:text-zinc-400 leading-relaxed">{benefit.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 px-8 bg-linear-to-b from-white to-zinc-50 dark:from-zinc-900 dark:to-zinc-950 transition-colors duration-300">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-light mb-4 tracking-tight">
                            Comienza Tu Experiencia
                        </h2>
                        <p className="text-gray-600 dark:text-zinc-400 text-lg">
                            Da el siguiente paso hacia tu vehículo ideal
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        {/* Cotizar */}
                        <div className="group relative overflow-hidden bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 hover:border-gray-300 dark:hover:border-white transition-all duration-500">
                            <div className="absolute inset-0 bg-linear-to-br from-blue-50/50 to-transparent dark:from-white/5 dark:to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            <div className="relative p-12 flex flex-col items-center text-center">
                                <div className="w-16 h-16 bg-blue-50 dark:bg-white/10 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                    <Calculator className="w-8 h-8 text-blue-600 dark:text-white" />
                                </div>
                                <h3 className="text-2xl font-medium mb-3">Cotizar</h3>
                                <p className="text-gray-600 dark:text-zinc-400 mb-8 leading-relaxed">
                                    Obtén una cotización personalizada y descubre opciones de financiamiento
                                </p>
                                <button className="px-6 py-3 border border-gray-300 dark:border-white/20 hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-300 group/btn">
                                    <span className="flex items-center gap-2">
                                        SOLICITAR COTIZACIÓN
                                        <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                                    </span>
                                </button>
                            </div>
                        </div>

                        {/* Prueba de Manejo */}
                        <div className="group relative overflow-hidden bg-linear-to-br from-blue-600 to-purple-600 text-white border border-blue-600">
                            <div className="absolute inset-0 bg-linear-to-br from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            <div className="relative p-12 flex flex-col items-center text-center">
                                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                    <Calendar className="w-8 h-8" />
                                </div>
                                <h3 className="text-2xl font-medium mb-3">Prueba de Manejo</h3>
                                <p className="text-blue-50 mb-8 leading-relaxed">
                                    Experimenta la excelencia. Agenda tu test drive sin compromiso
                                </p>
                                <button className="px-6 py-3 bg-white text-blue-600 hover:bg-blue-50 transition-all duration-300 group/btn font-medium">
                                    <span className="flex items-center gap-2">
                                        AGENDAR CITA
                                        <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                                    </span>
                                </button>
                            </div>
                        </div>

                        {/* Ubicación */}
                        <div className="group relative overflow-hidden bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 hover:border-gray-300 dark:hover:border-white transition-all duration-500">
                            <div className="absolute inset-0 bg-linear-to-br from-blue-50/50 to-transparent dark:from-white/5 dark:to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            <div className="relative p-12 flex flex-col items-center text-center">
                                <div className="w-16 h-16 bg-blue-50 dark:bg-white/10 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                    <MapPin className="w-8 h-8 text-blue-600 dark:text-white" />
                                </div>
                                <h3 className="text-2xl font-medium mb-3">Ubicación</h3>
                                <p className="text-gray-600 dark:text-zinc-400 mb-8 leading-relaxed">
                                    Visítanos en nuestro showroom y conoce toda nuestra colección
                                </p>
                                <button className="px-6 py-3 border border-gray-300 dark:border-white/20 hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-300 group/btn">
                                    <span className="flex items-center gap-2">
                                        VER SHOWROOM
                                        <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
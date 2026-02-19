"use client"

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronRight } from 'lucide-react';
import { menuItems } from '@/src/data/navigation';
import susukiLogo from '@/public/susuki.png'
import Image from 'next/image';
import Link from 'next/link';
import { ModeToggle } from './ModeToggle';
import { Button } from "@/components/ui/button"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"

// ─── Datos de modelos de ejemplo ───────────────────────────────────────────────
const modelos = [
    {
        id: 1,
        nombre: 'DZIRE BOOSTERGREEN 2026',
        descripcion: '¡Impresiona desde el primer vistazo!',
        precio: '$299,990',
        imagen: 'https://www.suzukiangelopolis.com.mx/assets/img/dzire.png',
        href: '/Modelo/dzire',
    },
    {
        id: 2,
        nombre: 'BALENO 2026',
        descripcion: 'BALENO desafía la tecnología',
        precio: '$299,990',
        imagen: 'https://www.suzukiangelopolis.com.mx/assets/img/baleno.png',
        href: '/modelos/baleno',
    },
    {
        id: 3,
        nombre: 'SWIFT BOOSTERGREEN 2026',
        descripcion: 'Por un mundo mejor',
        precio: '$339,990',
        imagen: 'https://www.suzukiangelopolis.com.mx/assets/img/swift.png',
        href: '/modelos/swift',
    },
    {
        id: 4,
        nombre: 'ERTIGA BOOSTERGREEN 2026',
        descripcion: 'Un diseño más atractivo',
        precio: '$390,990',
        imagen: 'https://www.suzukiangelopolis.com.mx/assets/img/ertiga.png',
        href: '/modelos/ertiga',
    },
    {
        id: 5,
        nombre: 'SWIFT SPORT 2025',
        descripcion: 'La leyenda llegó a México',
        precio: '$397,990',
        imagen: 'https://www.suzukiangelopolis.com.mx/assets/img/swift-sport.png',
        href: '/modelos/swift-sport',
    },
    {
        id: 6,
        nombre: 'SWIFT SPORT FINAL EDITION 2025',
        descripcion: 'Historia con potencia',
        precio: '$429,990',
        imagen: 'https://www.suzukiangelopolis.com.mx/assets/img/swift-sport-fe.png',
        href: '/modelos/swift-sport-fe',
    },
    {
        id: 7,
        nombre: 'FRONX BOOSTERGREEN 2026',
        descripcion: 'Diversidad sin límites',
        precio: '$454,990',
        imagen: 'https://www.suzukiangelopolis.com.mx/assets/img/fronx.png',
        href: '/modelos/fronx',
    },
    {
        id: 8,
        nombre: 'JIMNY 2025',
        descripcion: 'La leyenda llegó a México',
        precio: '$465,990',
        imagen: 'https://www.suzukiangelopolis.com.mx/assets/img/jimny.png',
        href: '/modelos/jimny',
    },
    {
        id: 9,
        nombre: 'ERTIGA XL7 BOOSTERGREEN',
        descripcion: 'Espacio sin compromisos',
        precio: '$489,990',
        imagen: 'https://www.suzukiangelopolis.com.mx/assets/img/xl7.png',
        href: '/modelos/xl7',
    },
    {
        id: 10,
        nombre: 'JIMNY 5 DOOR 2026',
        descripcion: 'Más aventura, más espacio',
        precio: '$519,990',
        imagen: 'https://www.suzukiangelopolis.com.mx/assets/img/jimny5.png',
        href: '/modelos/jimny-5-door',
    },
];

// ─── Modal de Modelos ───────────────────────────────────────────────────────────
function ModelosModal({ open, onClose }: { open: boolean; onClose: () => void }) {
    useEffect(() => {
        const handleKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
        if (open) window.addEventListener('keydown', handleKey);
        return () => window.removeEventListener('keydown', handleKey);
    }, [open, onClose]);

    useEffect(() => {
        document.body.style.overflow = open ? 'hidden' : '';
        return () => { document.body.style.overflow = ''; };
    }, [open]);

    return (
        <AnimatePresence>
            {open && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        key="backdrop"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/40 backdrop-blur-sm z-60"
                    />

                    {/* Panel centrado */}
                    <motion.div
                        key="modal"
                        initial={{ opacity: 0, scale: 0.97, y: 10 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.97, y: 10 }}
                        transition={{ type: 'spring', damping: 30, stiffness: 300 }}
                        className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-70
                                   w-[95vw] max-w-5xl max-h-[85vh]
                                   bg-white dark:bg-zinc-900
                                   rounded-2xl shadow-2xl
                                   flex flex-col overflow-hidden
                                   border border-gray-100 dark:border-zinc-800"
                    >
                        {/* Header */}
                        <div className="flex items-start justify-between px-8 pt-7 pb-5 border-b border-gray-100 dark:border-zinc-800 shrink-0">
                            <div>
                                <h2 className="text-2xl font-bold text-gray-900 dark:text-white tracking-tight">
                                    Modelos
                                </h2>
                                <p className="text-sm text-gray-400 dark:text-gray-500 mt-0.5">
                                    Elige tu modelo
                                </p>
                            </div>
                            <button
                                onClick={onClose}
                                className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-zinc-800 transition-colors text-gray-500 dark:text-gray-400"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        {/* Grid scrollable */}
                        <div className="overflow-y-auto px-8 py-6">
                            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-8">
                                {modelos.map((modelo, i) => (
                                    <motion.div
                                        key={modelo.id}
                                        initial={{ opacity: 0, y: 14 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: i * 0.04, duration: 0.25 }}
                                    >
                                        <Link
                                            href={modelo.href}
                                            onClick={onClose}
                                            className="group flex flex-col items-center text-center gap-2"
                                        >
                                            {/* Imagen */}
                                            <div className="w-full aspect-4/3 flex items-center justify-center
                                                            rounded-xl overflow-hidden
                                                            bg-gray-50 dark:bg-zinc-800
                                                            group-hover:bg-blue-50 dark:group-hover:bg-blue-950/30
                                                            transition-colors duration-200">
                                                <img
                                                    src={modelo.imagen}
                                                    alt={modelo.nombre}
                                                    className="w-4/5 h-4/5 object-contain
                                                               group-hover:scale-105 transition-transform duration-300"
                                                    onError={(e) => {
                                                        (e.target as HTMLImageElement).src =
                                                            `https://placehold.co/320x240/f1f5f9/94a3b8?text=${encodeURIComponent(modelo.nombre.split(' ')[0])}`;
                                                    }}
                                                />
                                            </div>

                                            {/* Info */}
                                            <div className="w-full">
                                                <p className="text-xs font-bold text-gray-800 dark:text-gray-100 leading-snug tracking-wide uppercase group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                                    {modelo.nombre}
                                                </p>
                                                <p className="text-xs text-gray-400 dark:text-gray-500 mt-0.5 leading-tight">
                                                    {modelo.descripcion}
                                                </p>
                                                <div className="mt-2">
                                                    <span className="text-[10px] text-gray-400 dark:text-gray-500 uppercase tracking-wider">Desde</span>
                                                    <p className="text-sm font-bold text-gray-900 dark:text-white">
                                                        {modelo.precio}
                                                    </p>
                                                </div>
                                            </div>
                                        </Link>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* Footer */}
                        <div className="shrink-0 px-8 py-4 border-t border-gray-100 dark:border-zinc-800 flex items-center justify-between bg-gray-50/60 dark:bg-zinc-900/60">
                            <p className="text-xs text-gray-400 dark:text-gray-500">
                                {modelos.length} modelos disponibles
                            </p>
                            <Link
                                href="/modelos"
                                onClick={onClose}
                                className="flex items-center gap-1 text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                            >
                                Ver todos los modelos
                                <ChevronRight className="w-4 h-4" />
                            </Link>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}

// ─── Header Principal ──────────────────────────────────────────────────────────
export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [modelosOpen, setModelosOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <motion.header
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
                    ? 'bg-white/95 dark:bg-zinc-900/95 backdrop-blur-md shadow-lg'
                    : 'bg-white dark:bg-zinc-900'
                    }`}
            >
                {/* Top Bar */}
                <div className='bg-linear-to-r from-blue-600 to-blue-700 dark:from-blue-700 dark:to-blue-900 text-white'>
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex items-center justify-between h-10 text-sm">
                            <p className="flex items-center gap-2">
                                <span className="hidden sm:inline">📧</span>
                                <span>contacto@mimarca.com</span>
                            </p>
                            <p className="hidden sm:block">📞 +52 123 456 7890</p>
                        </div>
                    </div>
                </div>

                {/* Main Navigation */}
                <nav className="w-11/12 mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16 md:h-20">

                        {/* Logo */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 }}
                            className="shrink-0"
                        >
                            <Link href="/" className="flex items-center space-x-2">
                                <Image src={susukiLogo} alt="Susuki Logo" className='w-36 h-auto' />
                            </Link>
                        </motion.div>

                        {/* Desktop Menu */}
                        <div className="hidden md:flex items-center space-x-6">
                            {menuItems.map((item, index) => {
                                if (item.name === 'Modelo') {
                                    return (
                                        <motion.div
                                            key={item.name}
                                            initial={{ opacity: 0, y: -20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.1 * index }}
                                        >
                                            <button
                                                onClick={() => setModelosOpen(true)}
                                                className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium"
                                            >
                                                Modelos
                                            </button>
                                        </motion.div>
                                    );
                                }
                                return (
                                    <motion.div
                                        key={item.name}
                                        initial={{ opacity: 0, y: -20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.1 * index }}
                                        className="relative group"
                                    >
                                        <Link
                                            href={item.href}
                                            className="flex items-center space-x-1 text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium"
                                        >
                                            <span>{item.name}</span>
                                        </Link>
                                    </motion.div>
                                );
                            })}

                            {/* Popover "Más" */}
                            <Popover>
                                <PopoverTrigger asChild>
                                    <Button
                                        variant="ghost"
                                        className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium px-0"
                                    >
                                        Más
                                    </Button>
                                </PopoverTrigger>
                                <PopoverContent
                                    align="end"
                                    sideOffset={12}
                                    className="w-175 p-0 overflow-hidden rounded-xl shadow-2xl border border-gray-200 dark:border-zinc-700"
                                >
                                    <div className='flex h-105'>
                                        <div className="w-48 shrink-0 p-6 bg-white dark:bg-zinc-900 border-r border-gray-100 dark:border-zinc-700 overflow-y-auto">
                                            <nav className='space-y-4'>
                                                <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500">Post Venta</p>
                                                <div className='flex flex-col gap-2'>
                                                    <Link href="/" className="text-sm text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Campañas de servicio</Link>
                                                    <Link href="/" className="text-sm text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Costos de mantenimiento</Link>
                                                    <Link href="/" className="text-sm text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Garantías</Link>
                                                    <Link href="/" className="text-sm text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Protección SUSUKI</Link>
                                                    <Link href="/" className="text-sm text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Catálogo de accesorios</Link>
                                                </div>
                                                <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500 pt-2">Otros</p>
                                                <div className='flex flex-col gap-2'>
                                                    <Link href="/" className="text-sm text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Tecnología</Link>
                                                </div>
                                            </nav>
                                        </div>
                                        <div className="flex flex-1">
                                            <div className="flex flex-col flex-1">
                                                <div className="relative flex-1 overflow-hidden group">
                                                    <img src="https://www.suzukiangelopolis.com.mx/assets/img/atencion.png" alt="Atención a cliente" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                                                    <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />
                                                    <p className="absolute bottom-2 left-3 text-white text-sm font-semibold">Atención a cliente</p>
                                                </div>
                                                <div className="relative flex-1 overflow-hidden group">
                                                    <img src="https://www.suzukiangelopolis.com.mx/assets/img/services.jpg" alt="Agenda tu servicio" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                                                    <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />
                                                    <p className="absolute bottom-2 left-3 text-white text-sm font-semibold">Agenda tu servicio</p>
                                                </div>
                                                <div className="relative flex-1 overflow-hidden group">
                                                    <img src="https://www.suzukiangelopolis.com.mx/assets/img/comentarios.png" alt="Comentarios y otros" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                                                    <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />
                                                    <p className="absolute bottom-2 left-3 text-white text-sm font-semibold">Comentarios y otros</p>
                                                </div>
                                            </div>
                                            <div className="relative flex-1 overflow-hidden group">
                                                <img src="https://www.suzukiangelopolis.com.mx/assets/img/cotiza.bc454696.jpg" alt="Cotiza tu SUZUKI" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                                                <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />
                                                <p className="absolute bottom-2 left-3 text-white text-sm font-semibold">Cotiza tu SUZUKI®</p>
                                            </div>
                                        </div>
                                    </div>
                                </PopoverContent>
                            </Popover>
                        </div>

                        {/* CTA + Theme */}
                        <div className='hidden md:flex items-center gap-4'>
                            <ModeToggle />
                            <motion.button
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.5 }}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-6 py-2 bg-blue-600 text-white rounded-full font-medium shadow-lg hover:shadow-xl transition-shadow"
                            >
                                Manéjalo
                            </motion.button>
                            <motion.button
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.5 }}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-6 py-2 bg-blue-600 text-white rounded-full font-medium shadow-lg hover:shadow-xl transition-shadow"
                            >
                                Comenzar
                            </motion.button>
                        </div>

                        {/* Mobile hamburger */}
                        <motion.button
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            onClick={() => setIsOpen(!isOpen)}
                            className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-zinc-800 transition-colors text-gray-700 dark:text-gray-200"
                        >
                            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </motion.button>
                    </div>
                </nav>
            </motion.header>

            {/* Modal de Modelos (se renderiza fuera del header para no quedar cortado) */}
            <ModelosModal open={modelosOpen} onClose={() => setModelosOpen(false)} />

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            onClick={() => setIsOpen(false)}
                            className="fixed inset-0 bg-black/50 backdrop-blur-sm md:hidden z-40"
                            style={{ top: '6.5rem' }}
                        />

                        <motion.div
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                            className="fixed right-0 bottom-0 w-80 bg-white dark:bg-zinc-900 shadow-2xl md:hidden overflow-y-auto z-50"
                            style={{ top: '6.5rem' }}
                        >
                            <div className="p-6 space-y-1">
                                <div className="flex justify-end mb-4">
                                    <ModeToggle />
                                </div>

                                {menuItems.map((item) => {
                                    if (item.name === 'Modelos') {
                                        return (
                                            <button
                                                key={item.name}
                                                onClick={() => { setIsOpen(false); setModelosOpen(true); }}
                                                className="w-full flex items-center px-4 py-4 text-gray-700 dark:text-gray-200 hover:bg-blue-50 dark:hover:bg-blue-900/30 hover:text-blue-600 dark:hover:text-blue-400 rounded-xl transition-all font-medium text-lg border-b border-gray-100 dark:border-zinc-800"
                                            >
                                                Modelos
                                            </button>
                                        );
                                    }
                                    return (
                                        <Link
                                            key={item.name}
                                            href={item.href}
                                            onClick={() => setIsOpen(false)}
                                            className="flex items-center px-4 py-4 text-gray-700 dark:text-gray-200 hover:bg-linear-to-r hover:from-blue-50 hover:to-purple-50 dark:hover:from-blue-900/30 dark:hover:to-purple-900/30 hover:text-blue-600 dark:hover:text-blue-400 rounded-xl transition-all font-medium text-lg border-b border-gray-100 dark:border-zinc-800"
                                        >
                                            {item.name}
                                        </Link>
                                    );
                                })}

                                <div className="pt-4">
                                    <p className="px-4 text-xs font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-2">Post Venta</p>
                                    {['Campañas de servicio', 'Costos de mantenimiento', 'Garantías', 'Protección SUSUKI', 'Catálogo de accesorios'].map((item) => (
                                        <Link key={item} href="/" onClick={() => setIsOpen(false)} className="flex items-center px-6 py-3 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 rounded-xl transition-all text-base border-b border-gray-100 dark:border-zinc-800">
                                            {item}
                                        </Link>
                                    ))}
                                    <p className="px-4 text-xs font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500 mt-3 mb-2">Otros</p>
                                    <Link href="/" onClick={() => setIsOpen(false)} className="flex items-center px-6 py-3 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 rounded-xl transition-all text-base border-b border-gray-100 dark:border-zinc-800">
                                        Tecnología
                                    </Link>
                                </div>

                                <div className="pt-4 grid grid-cols-2 gap-2">
                                    {[
                                        { src: 'https://www.suzukiangelopolis.com.mx/assets/img/atencion.png', label: 'Atención a cliente' },
                                        { src: 'https://www.suzukiangelopolis.com.mx/assets/img/services.jpg', label: 'Agenda tu servicio' },
                                        { src: 'https://www.suzukiangelopolis.com.mx/assets/img/comentarios.png', label: 'Comentarios' },
                                        { src: 'https://www.suzukiangelopolis.com.mx/assets/img/cotiza.bc454696.jpg', label: 'Cotiza tu SUZUKI®' },
                                    ].map(({ src, label }) => (
                                        <div key={label} className="relative h-24 overflow-hidden rounded-lg">
                                            <img src={src} alt={label} className="w-full h-full object-cover" />
                                            <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />
                                            <p className="absolute bottom-1 left-2 text-white text-xs font-semibold">{label}</p>
                                        </div>
                                    ))}
                                </div>

                                <motion.button whileTap={{ scale: 0.95 }} className="w-full mt-6 px-6 py-4 bg-blue-600 text-white rounded-xl font-semibold shadow-lg text-lg">
                                    Manéjalo
                                </motion.button>
                                <motion.button whileTap={{ scale: 0.95 }} className="w-full mt-3 px-6 py-4 bg-blue-600 text-white rounded-xl font-semibold shadow-lg text-lg">
                                    Comenzar
                                </motion.button>

                                <div className="pt-6 mt-6 border-t border-gray-200 dark:border-zinc-800">
                                    <p className="text-sm text-gray-500 dark:text-gray-400 text-center">© 2026 MiMarca</p>
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>

            <div className="h-30" />
        </>
    );
}
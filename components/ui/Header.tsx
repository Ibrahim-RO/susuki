// Header actualizado con toggle de tema
"use client"

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Sun, Moon } from 'lucide-react';
import { menuItems } from '@/src/data/navigation';
import susukiLogo from '@/public/susuki.png'
import Image from 'next/image';
import Link from 'next/link';
import { ModeToggle } from './ModeToggle';

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
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
                                <Image
                                    src={susukiLogo}
                                    alt="Susuki Logo"
                                    className='w-36 h-auto'
                                />
                            </Link>
                        </motion.div>

                        {/* Desktop Menu */}
                        <div className="hidden md:flex items-center space-x-6">
                            {menuItems.map((item, index) => (
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
                                        {/* {item.hasDropdown && <ChevronDown className="w-4 h-4" />} */}
                                    </Link>
                                    {/* {
                                        item.hasDropdown && (
                                            <div className="absolute top-full left-0 mt-2 w-48 bg-white dark:bg-zinc-800 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                                                <div className="py-2">
                                                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-blue-50 dark:hover:bg-zinc-700 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                                                        Desarrollo Web
                                                    </a>
                                                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-blue-50 dark:hover:bg-zinc-700 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                                                        Diseño UX/UI
                                                    </a>
                                                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-blue-50 dark:hover:bg-zinc-700 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                                                        Consultoría
                                                    </a>
                                                </div>
                                            </div>
                                        )
                                    } */}
                                </motion.div>
                            ))}
                            <a href='#' className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium">Más</a>
                        </div>

                        <div className='hidden md:flex items-center gap-4'>
                            {/* Theme Toggle Button */}
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

                        {/* Mobile Menu Button */}
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
            </motion.header >

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {
                    isOpen && (
                        <>
                            {/* Backdrop */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                onClick={() => setIsOpen(false)}
                                className="fixed inset-0 bg-black/50 backdrop-blur-sm md:hidden z-40"
                                style={{ top: '6.5rem' }}
                            />

                            {/* Sliding Menu Panel */}
                            <motion.div
                                initial={{ x: '100%' }}
                                animate={{ x: 0 }}
                                exit={{ x: '100%' }}
                                transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                                className="fixed right-0 bottom-0 w-80 bg-white dark:bg-zinc-900 shadow-2xl md:hidden overflow-y-auto z-50"
                                style={{ top: '6.5rem' }}
                            >
                                <div className="p-6 space-y-1">
                                    {/* Theme Toggle en móvil */}
                                    <motion.button
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.1 }}
                                        whileTap={{ scale: 0.95 }}
                                        // onClick={toggleTheme}
                                        className="w-full flex items-center justify-between px-4 py-4 bg-gray-100 dark:bg-zinc-800 text-gray-700 dark:text-gray-200 rounded-xl transition-colors font-medium text-lg mb-4"
                                    >
                                        {/* <span>Tema {theme === 'light' ? 'Claro' : 'Oscuro'}</span>
                            {theme === 'light' ? (
                                <Moon className="w-5 h-5" />
                            ) : (
                                <Sun className="w-5 h-5" />
                            )} */}
                                    </motion.button>

                                    {menuItems.map((item, index) => (
                                        <Link
                                            key={item.name}
                                            href={item.href}
                                            onClick={() => setIsOpen(false)}
                                            className="flex items-center px-4 py-4 text-gray-700 dark:text-gray-200 hover:bg-linear-to-r hover:from-blue-50 hover:to-purple-50 dark:hover:from-blue-900/30 dark:hover:to-purple-900/30 hover:text-blue-600 dark:hover:text-blue-400 rounded-xl transition-all font-medium text-lg border-b border-gray-100 dark:border-zinc-800"
                                        >
                                            {item.name}
                                        </Link>
                                    ))}

                                    <motion.button
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: 20 }}
                                        transition={{ delay: 0.3, duration: 0.3 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="w-full mt-6 px-6 py-4 bg-blue-600 text-white rounded-xl font-semibold shadow-lg text-lg"
                                    >
                                        Manéjalo
                                    </motion.button>

                                    <motion.button
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: 20 }}
                                        transition={{ delay: 0.35, duration: 0.3 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="w-full mt-3 px-6 py-4 bg-blue-600 text-white rounded-xl font-semibold shadow-lg text-lg"
                                    >
                                        Comenzar
                                    </motion.button>

                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: 0.4 }}
                                        className="pt-6 mt-6 border-t border-gray-200 dark:border-zinc-800"
                                    >
                                        <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                                            © 2026 MiMarca
                                        </p>
                                    </motion.div>
                                </div>
                            </motion.div>
                        </>
                    )
                }
            </AnimatePresence >

            {/* Spacer para evitar que el contenido quede debajo del header */}
            < div className="h-30" />
        </>
    );
}
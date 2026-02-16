"use client"

import autos from '@/src/data/cotizacion'
import React, { useState } from 'react'
import { X, Car, Mail, Phone, User, MessageSquare } from 'lucide-react'
import { Input } from "@/components/ui/input"
import { Field, FieldLabel } from "@/components/ui/field"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Auto } from '@/src/types'

export default function Cotizacion() {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false)
    const [selectedAuto, setSelectedAuto] = useState<Auto | null>()

    const handleAutoClick = (auto: Auto) => {
        setSelectedAuto(auto)
        setIsDrawerOpen(true)
    }

    const closeDrawer = () => {
        setIsDrawerOpen(false)
        setTimeout(() => setSelectedAuto(null), 300)
    }

    return (
        <div className='max-w-7xl mx-auto px-4 md:px-6 py-12 space-y-8'>
            <div className='space-y-3'>
                <h3 className='text-3xl md:text-4xl font-bold tracking-tight'>
                    Bienvenidos a nuestro sistema de cotización
                </h3>
                <p className='text-neutral-600 dark:text-neutral-400 text-lg'>
                    Elige un auto y solicita tu cotización personalizada
                </p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
                {autos.map((auto, index) => (
                    <div
                        key={index}
                        onClick={() => handleAutoClick(auto)}
                        className='group border border-neutral-300 dark:border-neutral-700 p-5 text-center space-y-3 rounded-2xl hover:border-blue-500 hover:shadow-xl hover:shadow-blue-500/10 transition-all cursor-pointer duration-300 bg-white dark:bg-neutral-900'
                    >
                        <div className='overflow-hidden rounded-lg'>
                            <img
                                src={auto.imagenPrincipal}
                                alt={auto.modelo}
                                className='w-full h-auto group-hover:scale-110 transition-transform duration-300'
                            />
                        </div>
                        <p className='font-semibold text-lg group-hover:text-red-500 transition-colors'>
                            {auto.modelo}
                        </p>
                    </div>
                ))}
            </div>

            {/* Overlay */}
            {isDrawerOpen && (
                <div
                    className='fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity duration-300'
                    onClick={closeDrawer}
                />
            )}

            {/* Drawer */}
            <div className={`fixed top-0 right-0 h-full w-full md:w-125 lg:w-150 bg-white dark:bg-neutral-900 shadow-2xl z-50 transform transition-transform duration-300 ease-in-out ${isDrawerOpen ? 'translate-x-0' : 'translate-x-full'
                }`}>
                <div className='h-full flex flex-col'>
                    {/* Header */}
                    <div className='p-6 border-b border-neutral-200 dark:border-neutral-800 flex items-center justify-between'>
                        <div className='flex items-center gap-3'>
                            <div className='p-2 bg-blue-100 dark:bg-red-950/30 rounded-xl'>
                                <Car className='text-blue-500 size-6' />
                            </div>
                            <div>
                                <h2 className='text-2xl font-bold'>Solicitar cotización</h2>
                                {selectedAuto && (
                                    <p className='text-sm text-neutral-600 dark:text-neutral-400'>
                                        {selectedAuto.modelo}
                                    </p>
                                )}
                            </div>
                        </div>
                        <button
                            onClick={closeDrawer}
                            className='p-2 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-xl transition-colors'
                        >
                            <X className='size-6' />
                        </button>
                    </div>

                    {/* Content */}
                    <div className='flex-1 overflow-y-auto p-6'>
                        {selectedAuto && (
                            <div className='space-y-6'>
                                {/* Auto seleccionado */}
                                <div className='bg-neutral-50 dark:bg-neutral-800/50 rounded-2xl p-4 border border-neutral-200 dark:border-neutral-700'>
                                    <img
                                        src={selectedAuto.imagenPrincipal}
                                        alt={selectedAuto.modelo}
                                        className='w-full h-auto rounded-lg mb-3'
                                    />
                                    <h3 className='font-bold text-xl text-center'>
                                        {selectedAuto.modelo}
                                    </h3>
                                </div>

                                {/* Formulario */}
                                <form className='space-y-5'>
                                    <Field>
                                        <FieldLabel className='flex items-center gap-2'>
                                            Versión
                                        </FieldLabel>
                                        <Select>
                                            <SelectTrigger className="w-full h-12">
                                                <SelectValue placeholder="Selecciona una opción" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                {selectedAuto.versiones.map(item => (
                                                    <SelectItem value={item.nombre}>{item.nombre}</SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                    </Field>

                                    <Field>
                                        <FieldLabel className='flex items-center gap-2'>
                                            Tipo de Cotización
                                        </FieldLabel>
                                        <Select>
                                            <SelectTrigger className="w-full h-12">
                                                <SelectValue placeholder="Selecciona un tipo de cotización" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="contado">Contado</SelectItem>
                                                <SelectItem value="credito">Crédito</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </Field>

                                    <Field>
                                        <FieldLabel className='flex items-center gap-2'>
                                            <User className='size-4 text-blue-500' />
                                            Email *
                                        </FieldLabel>
                                        <Input
                                            type="email"
                                            placeholder="Juan Pérez García"
                                            required
                                            className="h-12"
                                        />
                                    </Field>

                                    <Field>
                                        <FieldLabel className='flex items-center gap-2'>
                                            <Mail className='size-4 text-blue-500' />
                                            Nombre(s) *
                                        </FieldLabel>
                                        <Input
                                            type="text"
                                            placeholder="Nombre(s)"
                                            required
                                            className="h-12"
                                        />
                                    </Field>

                                    <Field>
                                        <FieldLabel className='flex items-center gap-2'>
                                            <Phone className='size-4 text-blue-500' />
                                            Apellidos *
                                        </FieldLabel>
                                        <Input
                                            type="text"
                                            placeholder="Apellidos"
                                            required
                                            className="h-12"
                                        />
                                    </Field>

                                    <Field>
                                        <FieldLabel className='flex items-center gap-2'>
                                            <Phone className='size-4 text-blue-500' />
                                            Teléfono *
                                        </FieldLabel>
                                        <Input
                                            type="text"
                                            placeholder="Teléfono"
                                            required
                                            className="h-12"
                                        />
                                    </Field>

                                    <Field>
                                        <FieldLabel className='flex items-center gap-2'>
                                            <MessageSquare className='size-4 text-blue-500' />
                                            Comentarios adicionales
                                        </FieldLabel>
                                        <Textarea
                                            placeholder="¿Alguna pregunta o solicitud especial?"
                                            className="min-h-25 resize-none"
                                        />
                                    </Field>

                                    <div className='pt-4 border-t border-neutral-200 dark:border-neutral-800 space-y-3'>
                                        <label className="flex items-center gap-3 cursor-pointer group">
                                            <input
                                                type="checkbox"
                                                required
                                                className="size-5 text-blue-600 rounded mt-0.5 cursor-pointer"
                                            />
                                            <span className="text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
                                                He leído y acepto el{' '}
                                                <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline font-medium">
                                                    Aviso de Privacidad
                                                </a>
                                                {' '}*
                                            </span>
                                        </label>

                                        <label className="flex items-center gap-3 cursor-pointer group">
                                            <input
                                                type="checkbox"
                                                required
                                                className="size-5 text-blue-600 rounded mt-0.5 cursor-pointer"
                                            />
                                            <span className="text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
                                                No deseo recibir promociones
                                            </span>
                                        </label>
                                    </div>
                                </form>
                            </div>
                        )}
                    </div>

                    {/* Footer */}
                    <div className='p-6 border-t border-neutral-200 dark:border-neutral-800 space-y-3'>
                        <Button
                            type="submit"
                            className="w-full h-12 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl shadow-lg shadow-blue-600/20 hover:shadow-xl hover:shadow-blue-600/30 transition-all duration-300"
                        >
                            Enviar solicitud
                        </Button>
                        <Button
                            type="button"
                            variant="outline"
                            onClick={closeDrawer}
                            className="w-full h-12 rounded-xl"
                        >
                            Cancelar
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}
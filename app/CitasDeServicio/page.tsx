"use client"

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, Mail, Phone, User, FileText, Car, Settings } from 'lucide-react';

export default function ServiceAppointmentForm() {
    const [formData, setFormData] = useState({
        email: '',
        nombre: '',
        apellidos: '',
        telefono: '',
        tipoTelefono: 'fijo',
        fecha: '',
        horario: '',
        servicios: [] as string[],
        mantenimiento: false,
        descripcion: '',
        aceptaPrivacidad: false,
        noPromociones: false
    });

    const servicios = [
        { id: 'mecanica', label: 'Reparación Mecánica', icon: Settings },
        { id: 'electrica', label: 'Reparación Eléctrica', icon: Settings },
        { id: 'hojalateria', label: 'Hojalatería y Pintura', icon: Settings },
        { id: 'mantenimiento', label: 'Servicios de Mantenimiento', icon: Settings }
    ];

    const handleServiceToggle = (serviceId: string) => {
        setFormData(prev => ({
            ...prev,
            servicios: prev.servicios.includes(serviceId)
                ? prev.servicios.filter(s => s !== serviceId)
                : [...prev.servicios, serviceId]
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Form data:', formData);
        // Aquí iría la lógica de envío
    };

    return (
        <div className="min-h-screen bg-linear-to-br from-blue-50 via-white to-purple-50 dark:from-zinc-900 dark:via-zinc-900 dark:to-zinc-800 py-12 px-4 sm:px-6 lg:px-8">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="max-w-5xl mx-auto"
            >
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-3">
                        Sistema de Cita de Servicio
                    </h1>
                    <p className="text-lg text-gray-600 dark:text-gray-400">
                        BIENVENIDOS A NUESTRO SISTEMA DE CITA DE SERVICIO
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-8">
                    {/* Datos Personales */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="bg-white dark:bg-zinc-800 rounded-2xl shadow-xl p-8 border border-gray-100 dark:border-zinc-700"
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
                                <User className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                            </div>
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                                Información Personal
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Email */}
                            <div className="md:col-span-2">
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                    Correo Electrónico *
                                </label>
                                <div className="relative">
                                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                    <input
                                        type="email"
                                        required
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        className="w-full pl-12 pr-4 py-3 bg-gray-50 dark:bg-zinc-900 border border-gray-200 dark:border-zinc-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-gray-900 dark:text-white"
                                        placeholder="tu@email.com"
                                    />
                                </div>
                            </div>

                            {/* Nombre */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                    Nombre(s) *
                                </label>
                                <input
                                    type="text"
                                    required
                                    value={formData.nombre}
                                    onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                                    className="w-full px-4 py-3 bg-gray-50 dark:bg-zinc-900 border border-gray-200 dark:border-zinc-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-gray-900 dark:text-white"
                                    placeholder="Juan"
                                />
                            </div>

                            {/* Apellidos */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                    Apellidos *
                                </label>
                                <input
                                    type="text"
                                    required
                                    value={formData.apellidos}
                                    onChange={(e) => setFormData({ ...formData, apellidos: e.target.value })}
                                    className="w-full px-4 py-3 bg-gray-50 dark:bg-zinc-900 border border-gray-200 dark:border-zinc-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-gray-900 dark:text-white"
                                    placeholder="Pérez García"
                                />
                            </div>

                            {/* Teléfono */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                    Teléfono *
                                </label>
                                <div className="relative">
                                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                    <input
                                        type="tel"
                                        required
                                        value={formData.telefono}
                                        onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
                                        className="w-full pl-12 pr-4 py-3 bg-gray-50 dark:bg-zinc-900 border border-gray-200 dark:border-zinc-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-gray-900 dark:text-white"
                                        placeholder="+52 123 456 7890"
                                    />
                                </div>
                            </div>

                            {/* Tipo de Teléfono */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                    Tipo de Teléfono
                                </label>
                                <div className="flex gap-4 pt-2">
                                    <label className="flex items-center gap-2 cursor-pointer">
                                        <input
                                            type="radio"
                                            name="tipoTelefono"
                                            value="fijo"
                                            checked={formData.tipoTelefono === 'fijo'}
                                            onChange={(e) => setFormData({ ...formData, tipoTelefono: e.target.value })}
                                            className="w-4 h-4 text-blue-600 focus:ring-blue-500"
                                        />
                                        <span className="text-gray-700 dark:text-gray-300">Fijo</span>
                                    </label>
                                    <label className="flex items-center gap-2 cursor-pointer">
                                        <input
                                            type="radio"
                                            name="tipoTelefono"
                                            value="celular"
                                            checked={formData.tipoTelefono === 'celular'}
                                            onChange={(e) => setFormData({ ...formData, tipoTelefono: e.target.value })}
                                            className="w-4 h-4 text-blue-600 focus:ring-blue-500"
                                        />
                                        <span className="text-gray-700 dark:text-gray-300">Celular</span>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Servicios */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="bg-white dark:bg-zinc-800 rounded-2xl shadow-xl p-8 border border-gray-100 dark:border-zinc-700"
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center">
                                <Settings className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                            </div>
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                                Servicios Requeridos
                            </h2>
                        </div>

                        <p className="text-gray-600 dark:text-gray-400 mb-6">
                            ¿Qué tipo de servicio necesitas?
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {servicios.map((servicio) => (
                                <label
                                    key={servicio.id}
                                    className={`relative flex items-center gap-4 p-4 rounded-xl border-2 cursor-pointer transition-all ${formData.servicios.includes(servicio.id)
                                        ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20'
                                        : 'border-gray-200 dark:border-zinc-700 hover:border-gray-300 dark:hover:border-zinc-600'
                                        }`}
                                >
                                    <input
                                        type="checkbox"
                                        checked={formData.servicios.includes(servicio.id)}
                                        onChange={() => handleServiceToggle(servicio.id)}
                                        className="w-5 h-5 text-blue-600 rounded focus:ring-blue-500"
                                    />
                                    <div className="flex-1">
                                        <span className="text-gray-900 dark:text-white font-medium">
                                            {servicio.label}
                                        </span>
                                    </div>
                                </label>
                            ))}
                        </div>

                        {/* Mantenimiento */}
                        <div className="mt-6 p-4 bg-gray-50 dark:bg-zinc-900 rounded-xl">
                            <label className="flex items-center gap-3 cursor-pointer">
                                <input
                                    type="checkbox"
                                    checked={formData.mantenimiento}
                                    onChange={(e) => setFormData({ ...formData, mantenimiento: e.target.checked })}
                                    className="w-5 h-5 text-blue-600 rounded focus:ring-blue-500"
                                />
                                <span className="text-gray-700 dark:text-gray-300 font-medium">
                                    Mantenimiento
                                </span>
                            </label>
                        </div>

                        {/* Descripción */}
                        <div className="mt-6">
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                Describe tu requerimiento
                            </label>
                            <div className="relative">
                                <FileText className="absolute left-4 top-4 w-5 h-5 text-gray-400" />
                                <textarea
                                    value={formData.descripcion}
                                    onChange={(e) => setFormData({ ...formData, descripcion: e.target.value })}
                                    rows={4}
                                    className="w-full pl-12 pr-4 py-3 bg-gray-50 dark:bg-zinc-900 border border-gray-200 dark:border-zinc-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none text-gray-900 dark:text-white"
                                    placeholder="Cuéntanos qué necesitas..."
                                />
                            </div>
                            <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
                                * Por favor, contempla el tiempo necesario para tu cita.
                            </p>
                        </div>
                    </motion.div>

                    {/* Fecha y Hora */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="bg-white dark:bg-zinc-800 rounded-2xl shadow-xl p-8 border border-gray-100 dark:border-zinc-700"
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center">
                                <Calendar className="w-5 h-5 text-green-600 dark:text-green-400" />
                            </div>
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                                Fecha y Hora
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Fecha */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                    Elige el día de tu cita
                                </label>
                                <div className="relative">
                                    <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                    <input
                                        type="date"
                                        required
                                        value={formData.fecha}
                                        onChange={(e) => setFormData({ ...formData, fecha: e.target.value })}
                                        className="w-full pl-12 pr-4 py-3 bg-gray-50 dark:bg-zinc-900 border border-gray-200 dark:border-zinc-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-gray-900 dark:text-white"
                                    />
                                </div>
                            </div>

                            {/* Horario */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                    Selecciona un horario
                                </label>
                                <div className="relative">
                                    <Clock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                    <select
                                        required
                                        value={formData.horario}
                                        onChange={(e) => setFormData({ ...formData, horario: e.target.value })}
                                        className="w-full pl-12 pr-4 py-3 bg-gray-50 dark:bg-zinc-900 border border-gray-200 dark:border-zinc-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all appearance-none text-gray-900 dark:text-white"
                                    >
                                        <option value="">Selecciona un horario</option>
                                        <option value="09:00">09:00 AM</option>
                                        <option value="10:00">10:00 AM</option>
                                        <option value="11:00">11:00 AM</option>
                                        <option value="12:00">12:00 PM</option>
                                        <option value="14:00">02:00 PM</option>
                                        <option value="15:00">03:00 PM</option>
                                        <option value="16:00">04:00 PM</option>
                                        <option value="17:00">05:00 PM</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        <p className="text-sm text-amber-600 dark:text-amber-400 mt-4 flex items-start gap-2">
                            <span className="text-lg">⚠️</span>
                            <span>* Fecha sujeta a disponibilidad. Espere nuestra confirmación.</span>
                        </p>
                    </motion.div>

                    {/* Privacidad y Envío */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="bg-white dark:bg-zinc-800 rounded-2xl shadow-xl p-8 border border-gray-100 dark:border-zinc-700"
                    >
                        <div className="space-y-4">
                            <label className="flex items-start gap-3 cursor-pointer group">
                                <input
                                    type="checkbox"
                                    required
                                    checked={formData.aceptaPrivacidad}
                                    onChange={(e) => setFormData({ ...formData, aceptaPrivacidad: e.target.checked })}
                                    className="w-5 h-5 text-blue-600 rounded focus:ring-blue-500 mt-0.5"
                                />
                                <span className="text-gray-700 dark:text-gray-300">
                                    He leído y acepto el{' '}
                                    <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline font-medium">
                                        Aviso de Privacidad
                                    </a>
                                </span>
                            </label>

                            <label className="flex items-start gap-3 cursor-pointer group">
                                <input
                                    type="checkbox"
                                    checked={formData.noPromociones}
                                    onChange={(e) => setFormData({ ...formData, noPromociones: e.target.checked })}
                                    className="w-5 h-5 text-blue-600 rounded focus:ring-blue-500 mt-0.5"
                                />
                                <span className="text-gray-700 dark:text-gray-300">
                                    No deseo recibir promociones
                                </span>
                            </label>
                        </div>

                        <motion.button
                            type="submit"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="w-full mt-8 px-8 py-4 bg-blue-600 text-white rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all cursor-pointer"
                        >
                            Enviar Solicitud
                        </motion.button>
                    </motion.div>
                </form>
            </motion.div>
        </div>
    );
}
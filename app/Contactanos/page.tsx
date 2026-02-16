import { Mail, MapPin, Clock, Send } from "lucide-react";
import { Textarea } from "@/components/ui/textarea"
import { Field, FieldDescription, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Button } from "@/components/ui/button";

export default function Contactanos() {
    return (
        <div className="min-h-screen bg-linear-to-b from-neutral-50 to-white dark:from-neutral-950 dark:to-neutral-900">
            {/* Hero Map Section */}
            <section className="relative h-[40vh] md:h-[50vh] w-full overflow-hidden">
                <iframe
                    className="absolute inset-0 w-full h-full"
                    src="https://www.google.com/maps?q=Suzuki+Angelopolis&output=embed"
                    loading="lazy"
                />
            </section>

            {/* Main Content */}
            <section className="max-w-7xl mx-auto px-4 md:px-6">

                <div className="my-10 text-center space-y-3">
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tightmb-3">
                        Contáctanos
                    </h1>
                    <p className="text-lg md:text-xl">
                        Visítanos en nuestra sucursal y vive la experiencia Suzuki
                    </p>
                </div>

                {/* Location Card */}
                <div className="bg-white dark:bg-neutral-900 rounded-3xl shadow-2xl shadow-black/5 border border-neutral-200 dark:border-neutral-800 overflow-hidden mb-8 hover:shadow-3xl hover:border-blue-500/30 transition-all duration-300">
                    <div className="p-6 md:p-10">
                        <div className="flex items-start gap-4 mb-6">
                            <div className="p-3 bg-blue-500 rounded-2xl">
                                <MapPin className="text-white size-6" />
                            </div>
                            <div className="flex-1">
                                <h2 className="text-2xl md:text-3xl font-bold mb-2">Suzuki Angelópolis</h2>
                                <p className="text-neutral-600 dark:text-neutral-400 text-lg leading-relaxed">
                                    Vía Atlixcáyotl 5314-A, Fracc. Puerta Paraíso<br />
                                    72830, Puebla, PUEBLA
                                </p>
                            </div>
                        </div>

                        <div className="flex items-center gap-4 pt-6 border-t border-neutral-200 dark:border-neutral-800">
                            <Mail className="text-blue-500 size-5" />                            
                            <a href="mailto:suzukiangelopolis@suzukiangelopolis.com.mx"
                                className="text-neutral-600 dark:text-neutral-400 hover:text-blue-500 transition-colors">
                                Email: suzukiangelopolis@suzukiangelopolis.com.mx
                            </a>
                        </div>
                    </div>
                </div>

                {/* Hours Section */}
                <div className="bg-white dark:bg-neutral-900 rounded-3xl shadow-xl shadow-black/5 border border-neutral-200 dark:border-neutral-800 overflow-hidden mb-8">
                    <div className="p-6 md:p-10">
                        <h2 className="text-2xl md:text-3xl font-bold mb-8">Horario de atención</h2>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {[
                                {
                                    title: "Ventas",
                                    schedule: [
                                        "Lun - Vie: 9:00 AM – 7:30 PM",
                                        "Sábado: 9:00 AM – 6:00 PM",
                                        "Domingo: 11:00 AM – 6:00 PM"
                                    ]
                                },
                                {
                                    title: "Servicios",
                                    schedule: [
                                        "Lun - Vie: 8:00 AM – 7:00 PM",
                                        "Sábado: 8:00 AM – 2:00 PM",
                                        "Domingo: Cerrado"
                                    ]
                                },
                                {
                                    title: "Refacciones",
                                    schedule: [
                                        "Lun - Vie: 9:00 AM – 7:30 PM",
                                        "Sábado: 9:00 AM – 2:00 PM",
                                        "Domingo: Cerrado"
                                    ]
                                }
                            ].map((dept, idx) => (
                                <div key={idx} className="group p-6 rounded-2xl border border-neutral-200 dark:border-neutral-800 hover:border-blue-500/50 hover:bg-blue-50/50 dark:hover:bg-red-950/10 transition-all duration-300">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="p-2 bg-blue-100 dark:bg-blue-950/30 rounded-xl group-hover:bg-blue-500 transition-colors">
                                            <Clock className="text-blue-500 group-hover:text-white size-5 transition-colors" />
                                        </div>
                                        <h3 className="text-xl font-semibold">{dept.title}</h3>
                                    </div>
                                    <div className="space-y-2">
                                        {dept.schedule.map((time, i) => (
                                            <p key={i} className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                                                {time}
                                            </p>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Contact Form */}
                <div className="bg-white dark:bg-neutral-900 rounded-3xl shadow-xl shadow-black/5 border border-neutral-200 dark:border-neutral-800 overflow-hidden mb-16">
                    <div className="p-6 md:p-10">
                        <div className="mb-8">
                            <h2 className="text-2xl md:text-3xl font-bold mb-2">
                                Nos importa tu opinión
                            </h2>
                            <p className="text-neutral-600 dark:text-neutral-400 text-lg">
                                Déjanos tu mensaje y nos pondremos en contacto contigo
                            </p>
                        </div>

                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <Field>
                                    <FieldLabel>Email *</FieldLabel>
                                    <Input
                                        type="email"
                                        placeholder="tu@email.com"
                                        required
                                        className="h-12"
                                    />
                                </Field>

                                <Field>
                                    <FieldLabel>Nombre(s) *</FieldLabel>
                                    <Input
                                        type="text"
                                        placeholder="Juan"
                                        required
                                        className="h-12"
                                    />
                                </Field>

                                <Field>
                                    <FieldLabel>Apellidos *</FieldLabel>
                                    <Input
                                        type="text"
                                        placeholder="Pérez García"
                                        required
                                        className="h-12"
                                    />
                                </Field>

                                <Field>
                                    <FieldLabel>Teléfono *</FieldLabel>
                                    <Input
                                        type="tel"
                                        placeholder="222 123 4567"
                                        required
                                        className="h-12"
                                    />
                                </Field>

                                <Field>
                                    <FieldLabel>Tipo de comentario *</FieldLabel>
                                    <Select>
                                        <SelectTrigger className="h-12">
                                            <SelectValue placeholder="Selecciona una opción" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectGroup>
                                                <SelectItem value="comentario">Comentario</SelectItem>
                                                <SelectItem value="sugerencia">Sugerencia</SelectItem>
                                                <SelectItem value="queja">Queja</SelectItem>
                                            </SelectGroup>
                                        </SelectContent>
                                    </Select>
                                </Field>

                                <Field>
                                    <FieldLabel>Dirigido a *</FieldLabel>
                                    <Select>
                                        <SelectTrigger className="h-12">
                                            <SelectValue placeholder="Selecciona un departamento" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectGroup>
                                                <SelectItem value="ventas">Ventas</SelectItem>
                                                <SelectItem value="refacciones">Refacciones</SelectItem>
                                                <SelectItem value="servicio">Servicio</SelectItem>
                                                <SelectItem value="gerencia">Gerencia General</SelectItem>
                                            </SelectGroup>
                                        </SelectContent>
                                    </Select>
                                </Field>
                            </div>

                            <Field>
                                <FieldLabel>Comentarios *</FieldLabel>
                                <Textarea
                                    placeholder="Cuéntanos más sobre tu experiencia o consulta..."
                                    required
                                    className="min-h-30 resize-none"
                                />
                            </Field>

                            <div className="space-y-4 pt-4 border-t border-neutral-200 dark:border-neutral-800">
                                <label className="flex items-start gap-3 cursor-pointer group">
                                    <input
                                        type="checkbox"
                                        required
                                        className="size-5 text-blue-600 rounded mt-0.5 cursor-pointer"
                                    />
                                    <span className="text-neutral-700 dark:text-neutral-300 leading-relaxed">
                                        He leído y acepto el{' '}
                                        <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline font-medium">
                                            Aviso de Privacidad
                                        </a>
                                        {' '}*
                                    </span>
                                </label>

                                <label className="flex items-start gap-3 cursor-pointer group">
                                    <input
                                        type="checkbox"
                                        className="size-5 text-blue-600 rounded mt-0.5 cursor-pointer"
                                    />
                                    <span className="text-neutral-700 dark:text-neutral-300 leading-relaxed">
                                        No deseo recibir promociones
                                    </span>
                                </label>
                            </div>

                            <Button
                                type="submit"
                                className="w-full md:w-auto px-8 h-12 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl shadow-lg shadow-blue-600/20 hover:shadow-xl hover:shadow-blue-600/30 transition-all duration-300"
                            >
                                <Send className="mr-2 size-5" />
                                Enviar mensaje
                            </Button>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
}
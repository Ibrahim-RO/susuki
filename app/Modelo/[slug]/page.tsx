
import { modelos } from "@/src/data/details"
import Image from "next/image"
import { notFound } from "next/navigation"

interface Props {
    params: {
        slug: Promise<{ slug: string }>
    }
}

export default async function ModelDetail({ params }: Props) {
    const { slug } = await params
    const modelo = modelos.find(m => m.slug === slug.toString())

    if (!modelo) return notFound()

    return (
        <div className="min-h-screen bg-gray-50">

            {/* HERO */}
            <section className="relative w-full h-[500px]">
                <img
                    src={modelo.portada}
                    alt={modelo.nombre}                    
                    className="object-cover"                    
                />
                <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-white text-center px-4">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">
                        {modelo.nombre}
                    </h1>
                    <p className="text-lg md:text-xl max-w-2xl">
                        {modelo.descripcion}
                    </p>
                    <p className="mt-6 text-2xl font-semibold">
                        Desde {modelo.precio_formateado}
                    </p>
                </div>
            </section>

            {/* GALERÍA */}
            <section className="max-w-6xl mx-auto py-16 px-4">
                <h2 className="text-3xl font-bold mb-8 text-center">
                    Galería
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {modelo.galeria.map((img, index) => (
                        <div key={index} className="relative h-60 rounded-xl overflow-hidden shadow-md">
                            <img
                                src={img}
                                alt={`${modelo.nombre}-${index}`}                                
                                className="object-cover hover:scale-105 transition duration-500"
                            />
                        </div>
                    ))}
                </div>
            </section>

            {/* ESPECIFICACIONES */}
            <section className="bg-white py-16">
                <div className="max-w-6xl mx-auto px-4">

                    <h2 className="text-3xl font-bold mb-10 text-center">
                        Especificaciones Técnicas
                    </h2>

                    <div className="grid md:grid-cols-2 gap-8">

                        <SpecItem label="Motor" value={modelo.especificaciones.motor} />
                        <SpecItem label="Potencia" value={`${modelo.especificaciones.potencia_hp} HP`} />
                        <SpecItem label="Torque" value={`${modelo.especificaciones.torque_nm} Nm`} />
                        <SpecItem label="Transmisión" value={modelo.especificaciones.transmision.join(", ")} />
                        <SpecItem label="Consumo" value={modelo.especificaciones.consumo_combustible} />
                        <SpecItem label="Tracción" value={modelo.especificaciones.traccion} />
                        <SpecItem label="Tanque" value={`${modelo.especificaciones.tanque_litros} L`} />
                        <SpecItem label="Cajuela" value={`${modelo.dimensiones.cajuela_litros} L`} />

                    </div>
                </div>
            </section>

            {/* SEGURIDAD */}
            <section className="bg-gray-100 py-16">
                <div className="max-w-6xl mx-auto px-4 text-center">

                    <h2 className="text-3xl font-bold mb-10">
                        Seguridad
                    </h2>

                    <div className="grid md:grid-cols-3 gap-6">

                        <Feature text={`${modelo.seguridad.bolsas_aire} Bolsas de Aire`} />
                        <Feature text={modelo.seguridad.frenos} />
                        {modelo.seguridad.control_estabilidad && <Feature text="Control de Estabilidad" />}
                        {modelo.seguridad.control_traccion && <Feature text="Control de Tracción" />}
                        {modelo.seguridad.camara_reversa && <Feature text="Cámara de Reversa" />}
                        {modelo.seguridad.asistente_pendiente && <Feature text="Asistente en Pendientes" />}

                    </div>
                </div>
            </section>

            {/* VERSIONES */}
            <section className="bg-white py-16">
                <div className="max-w-6xl mx-auto px-4">

                    <h2 className="text-3xl font-bold mb-10 text-center">
                        Versiones Disponibles
                    </h2>

                    <div className="grid md:grid-cols-3 gap-8">
                        {modelo.versiones.map((version, index) => (
                            <div key={index} className="bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-lg transition">
                                <h3 className="text-xl font-semibold mb-4">
                                    {version.nombre}
                                </h3>
                                <p className="mb-2">Transmisión: {version.transmision}</p>
                                <p className="text-lg font-bold text-blue-600">
                                    ${version.precio.toLocaleString("es-MX")}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* COLORES */}
            <section className="bg-gray-100 py-16">
                <div className="max-w-6xl mx-auto px-4 text-center">

                    <h2 className="text-3xl font-bold mb-10">
                        Colores Disponibles
                    </h2>

                    <div className="flex flex-wrap justify-center gap-6">
                        {modelo.colores.map((color, index) => (
                            <div key={index} className="flex flex-col items-center">
                                <div
                                    className="w-16 h-16 rounded-full border shadow-md"
                                    style={{ backgroundColor: color.codigo_hex }}
                                />
                                <p className="mt-2">{color.nombre}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

        </div>
    )
}

/* COMPONENTES AUXILIARES */

function SpecItem({ label, value }: { label: string, value: string }) {
    return (
        <div className="bg-gray-50 p-6 rounded-xl shadow-sm">
            <h4 className="font-semibold mb-2">{label}</h4>
            <p>{value}</p>
        </div>
    )
}

function Feature({ text }: { text: string }) {
    return (
        <div className="bg-white p-6 rounded-xl shadow-md">
            {text}
        </div>
    )
}
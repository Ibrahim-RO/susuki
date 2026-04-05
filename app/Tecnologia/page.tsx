import React from "react";

export default function Page() {
    return (
        <div className="bg-white text-neutral-900">

            {/* ENCABEZADO */}
            <section className="max-w-7xl mx-auto px-6 py-16 space-y-6">
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
                    Tecnología SUZUKI
                </h2>
                <p className="text-lg text-neutral-600 leading-relaxed">
                    Todos los autos SUZUKI cuentan con la mejor tecnología y diversos sistemas de seguridad que protegen tanto a los ocupantes como a los peatones. Siéntete seguro manejando tu SUZUKI.
                </p>
            </section>

            {/* SECCIÓN 1 */}
            <section className="py-20 border-t">
                <div className="max-w-7xl mx-auto px-6 space-y-12">

                    <div className="space-y-3">
                        <h3 className="text-2xl md:text-3xl font-bold">
                            Motor Boosterjet
                        </h3>
                        <div className="w-24 h-1 bg-blue-600 rounded-full"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

                        <div className="rounded-3xl overflow-hidden shadow-xl">
                            <video
                                src="https://www.suzukiangelopolis.com.mx/Assets/video/technology-01.mp4"
                                autoPlay
                                loop
                                muted
                                className="w-full h-full object-cover"
                            />
                        </div>

                        <div>
                            <p className="text-neutral-600 leading-relaxed text-lg">
                                El sistema de inyección directa del motor Boosterjet logra una excelente eficiencia entre el consumo de combustible y menores emisiones contaminantes. Prioriza la eficiencia de combustible o el desempeño dinámico de acuerdo con la situación. Su diseño es ligero y compacto. Aumenta la potencia del motor. Mantiene el torque estable en todo momento. Mejora la eficiencia del combustible.
                            </p>
                        </div>

                    </div>
                </div>
            </section>

            {/* SECCIÓN 2 */}
            <section className="py-20 bg-neutral-50 border-t">
                <div className="max-w-7xl mx-auto px-6 space-y-12">

                    <div className="space-y-3">
                        <h3 className="text-2xl md:text-3xl font-bold">
                            Plataforma Heartect
                        </h3>
                        <div className="w-24 h-1 bg-blue-600 rounded-full"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

                        <div className="order-2 md:order-1">
                            <p className="text-neutral-600 leading-relaxed text-lg">
                                La nueva plataforma SUZUKI te brinda un curveo rápido y estable, mayor rapidez y facilidad de frenado, mejor eficiencia en el consumo de combustible, agilidad al manejo y una aceleración más enérgica.
                            </p>
                        </div>

                        <div className="rounded-3xl overflow-hidden shadow-xl order-1 md:order-2">
                            <video
                                src="https://www.suzukiangelopolis.com.mx/Assets/video/technology-02.mp4"
                                autoPlay
                                loop
                                muted
                                className="w-full h-full object-cover"
                            />
                        </div>

                    </div>
                </div>
            </section>

            {/* SECCIÓN 3 */}
            <section className="py-20 border-t">
                <div className="max-w-7xl mx-auto px-6 space-y-12">

                    <div className="space-y-3">
                        <h3 className="text-2xl md:text-3xl font-bold">
                            Motor Boosterjet
                        </h3>
                        <div className="w-24 h-1 bg-blue-600 rounded-full"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

                        <div className="rounded-3xl overflow-hidden shadow-xl">
                            <img
                                src="https://www.suzukiangelopolis.com.mx/Assets/img/tecnologia/technology-03.jpg"
                                alt="Imagen Plataforma Heartect"
                                className="w-full h-full object-cover"
                            />
                        </div>

                        <div>
                            <p className="text-neutral-600 leading-relaxed text-lg">
                                Volante y columna de dirección colapsables Pedal de freno colapsable Soportes de motor colapsables Cinturones de seguridad de 3 puntos Cabeceras con ajuste de altura Bolsas de aire y pretensores Zonas de deformación controlada adelante y atrás Zonas de distribución de impacto en la parte lateral Barras de protección en puertas
                            </p>
                        </div>

                    </div>
                </div>
            </section>

            {/* SECCIÓN 4 */}
            <section className="py-20 bg-neutral-50 border-t">
                <div className="max-w-7xl mx-auto px-6 space-y-12">

                    <div className="space-y-3">
                        <h3 className="text-2xl md:text-3xl font-bold">
                            Plataforma Heartect
                        </h3>
                        <div className="w-24 h-1 bg-blue-600 rounded-full"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

                        <div className="order-2 md:order-1">
                            <p className="text-neutral-600 leading-relaxed text-lg">
                                Mayor rigidez: Vehículo con menos ruido y vibraciones, más maniobrable y ágil en curvas. Mayor resistencia: Máxima protección para los pasajeros en caso de un imprevisto. Más ligera: Vehículo con mejor respuesta a la aceleración y aprovechamiento de combustible.
                            </p>
                        </div>

                        <div className="rounded-3xl overflow-hidden shadow-xl order-1 md:order-2">
                            <img
                                src="https://www.suzukiangelopolis.com.mx/Assets/img/tecnologia/technology-04.jpg"
                                alt="Imagen Plataforma Heartect"
                                className="w-full h-full object-cover"
                            />
                        </div>

                    </div>
                </div>
            </section>

        </div>
    );
}

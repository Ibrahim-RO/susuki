"use client";

import OrdinarioSection from "@/features/garantia/components/OrdinarioSection";
import { warrantyData } from "@/features/garantia/data/extendida";
import { useState } from "react";
import { CheckCircle } from "lucide-react";

export default function Page() {
    const [selectedTab, setSelectedTab] = useState<"ordinaria" | "extendida">(
        "ordinaria"
    );

    return (
        <div className="max-w-7xl mx-auto px-5 py-10 space-y-10">

            {/* HEADER */}
            <div className="space-y-4">
                <h1 className="text-3xl md:text-5xl font-bold text-gray-900">
                    Garantía <span className="text-blue-800">SUZUKI</span>
                </h1>

                <p className="text-gray-600 text-lg">
                    La mejor manera de conservar tu vehículo en perfecto estado.
                </p>

                <p className="leading-relaxed">
                    ¡Felicidades! Has adquirido un auto nuevo y sabemos que has invertido
                    tiempo, esfuerzo y dinero. En SUZUKI queremos darte tranquilidad con
                    nuestras garantías diseñadas para proteger tu vehículo.
                </p>
            </div>

            {/* TABS */}
            <div className="flex gap-2 bg-gray-100 p-1 rounded-xl w-fit">
                <button
                    onClick={() => setSelectedTab("ordinaria")}
                    className={`px-5 py-2 rounded-lg text-sm font-medium transition ${selectedTab === "ordinaria"
                            ? "bg-white shadow text-gray-900"
                            : "text-gray-500 hover:text-gray-700"
                        }`}
                >
                    Garantía ordinaria
                </button>

                <button
                    onClick={() => setSelectedTab("extendida")}
                    className={`px-5 py-2 rounded-lg text-sm font-medium transition ${selectedTab === "extendida"
                            ? "bg-white shadow text-gray-900"
                            : "text-gray-500 hover:text-gray-700"
                        }`}
                >
                    Garantía extendida
                </button>
            </div>

            {/* CONTENT */}
            <div className="bg-white border rounded-2xl p-6 md:p-8 shadow-sm space-y-6">

                {selectedTab === "ordinaria" && (
                    <div className="space-y-4">
                        <p className="text-gray-700 text-lg font-medium">
                            Cobertura de hasta{" "}
                            <span className="text-blue-600 font-semibold">
                                3 años o 60,000 km
                            </span>
                        </p>

                        <p className="text-gray-500">
                            Esta garantía protege tu vehículo bajo condiciones normales de uso,
                            asegurando respaldo y calidad en cada servicio.
                        </p>
                    </div>
                )}

                {selectedTab === "extendida" && (
                    <div className="space-y-6">

                        {/* Intro */}
                        <div>
                            <p className="text-gray-700 text-lg font-medium">
                                Extiende tu cobertura hasta{" "}
                                <span className="text-blue-600 font-semibold">
                                    6 años o 125,000 km
                                </span>
                            </p>

                            <p className="text-gray-500 mt-2">
                                Programa que amplía la garantía original, sujeto al cumplimiento
                                de los servicios de mantenimiento.
                            </p>
                        </div>

                        {/* Beneficios */}
                        <div>
                            <h3 className="font-semibold text-gray-800 mb-4">
                                Beneficios incluidos
                            </h3>

                            <ul className="grid md:grid-cols-2 gap-4">
                                {warrantyData.map((item, index) => (
                                    <li
                                        key={index}
                                        className="flex items-start gap-3 bg-gray-50 p-4 rounded-xl border"
                                    >
                                        <CheckCircle className="text-blue-600 w-5 h-5 mt-1" />
                                        <span className="text-gray-600 text-sm leading-relaxed">
                                            {item.text}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                )}
            </div>

            {/* EXTRA SECTION */}
            <OrdinarioSection />
        </div>
    );
}
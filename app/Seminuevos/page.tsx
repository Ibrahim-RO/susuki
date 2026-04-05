"use client";

import { useState, useMemo } from "react";

const FILTERS = [
    "DISTRIBUIDORA",
    "MARCA",
    "MODELO",
    "PRECIO",
    "AÑO",
    "CARROCERÍA",
    "TRANSMISIÓN",
    "TIPO",
];

type FilterKey =
    | "DISTRIBUIDORA" | "MARCA" | "MODELO" | "PRECIO"
    | "AÑO" | "CARROCERÍA" | "TRANSMISIÓN" | "TIPO";

type ViewMode = "large" | "small" | "list";

type SortKey = "" | "price_asc" | "price_desc" | "year" | "km";

type TagType = "NUEVO" | "OFERTA" | "PREMIUM";

interface Car {
    id: number;
    year: number;
    brand: string;
    model: string;
    price: number;
    oldPrice: number | null;
    km: number;
    transmission: string;
    dealer: string;
    city: string;
    image: string;
    tag: TagType | null;
}

const cars = [
    { id: 1, year: 2025, brand: "Suzuki", model: "Fronx Boostergreen", price: 390000, oldPrice: 399000, km: 18000, transmission: "Automática", dealer: "Suzuki Angelopolis", city: "PUEBLA", image: "https://images.unsplash.com/photo-1609521263047-f8f205293f24?w=600&q=80", tag: "NUEVO" },
    { id: 2, year: 2022, brand: "Suzuki", model: "Ertiga XI7", price: 325000, oldPrice: null, km: 69000, transmission: "Automática", dealer: "Suzuki Angelopolis", city: "PUEBLA", image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=600&q=80", tag: null },
    { id: 3, year: 2022, brand: "Suzuki", model: "Swift", price: 269000, oldPrice: null, km: 81000, transmission: "Manual", dealer: "Suzuki Angelopolis", city: "PUEBLA", image: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=600&q=80", tag: "OFERTA" },
    { id: 4, year: 2021, brand: "Suzuki", model: "Swift", price: 249000, oldPrice: null, km: 111000, transmission: "Manual", dealer: "Suzuki Angelopolis", city: "PUEBLA", image: "https://images.unsplash.com/photo-1502877338535-766e1452684a?w=600&q=80", tag: null },
    { id: 5, year: 2022, brand: "BMW", model: "Serie 3", price: 615000, oldPrice: 630000, km: 66000, transmission: "Automática", dealer: "Suzuki Angelopolis", city: "PUEBLA", image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=600&q=80", tag: "PREMIUM" },
    { id: 6, year: 2023, brand: "Chevrolet", model: "Silverado", price: 720000, oldPrice: null, km: 22000, transmission: "Automática", dealer: "Suzuki Angelopolis", city: "PUEBLA", image: "https://images.unsplash.com/photo-1590362891991-f776e747a588?w=600&q=80", tag: "NUEVO" },
    { id: 7, year: 2021, brand: "Renault", model: "Duster", price: 285000, oldPrice: 310000, km: 45000, transmission: "Manual", dealer: "Suzuki Angelopolis", city: "PUEBLA", image: "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=600&q=80", tag: "OFERTA" },
    { id: 8, year: 2022, brand: "Toyota", model: "Prius", price: 430000, oldPrice: null, km: 38000, transmission: "Automática", dealer: "Suzuki Angelopolis", city: "PUEBLA", image: "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=600&q=80", tag: null },
];

const TAG_COLORS = {
    NUEVO: "bg-emerald-500 text-white",
    OFERTA: "bg-rose-500 text-white",
    PREMIUM: "bg-amber-500 text-white",
};

function formatPrice(price: number) {
    return `$${price.toLocaleString("es-MX")}`;
}

function CarCardGrid({ car }: { car: Car }) {
    const discount = car.oldPrice
        ? Math.round((1 - car.price / car.oldPrice) * 100)
        : null;

    return (
        <div className="group bg-white rounded-2xl overflow-hidden cursor-pointer border border-gray-100 hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
            <div className="relative overflow-hidden aspect-video bg-gray-100">
                <img
                    src={car.image}
                    alt={`${car.brand} ${car.model}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {car.tag && (
                    <span className={`absolute top-3 left-3 text-[10px] font-bold tracking-widest px-2.5 py-1 rounded-full ${TAG_COLORS[car.tag]}`}>
                        {car.tag}
                    </span>
                )}
                {discount && (
                    <span className="absolute top-3 right-3 text-[10px] font-bold bg-white/90 text-rose-500 px-2 py-1 rounded-full border border-rose-100">
                        -{discount}%
                    </span>
                )}
            </div>
            <div className="p-4">
                <p className="font-extrabold text-gray-900 text-sm leading-tight">{car.year} {car.brand}</p>
                <p className="text-xs text-gray-400 mt-0.5">{car.model}</p>
                <div className="mt-3 flex items-end gap-2">
                    <span className="text-lg font-extrabold text-gray-900">{formatPrice(car.price)}</span>
                    {car.oldPrice && (
                        <span className="text-xs text-rose-400 line-through mb-0.5">{formatPrice(car.oldPrice)}</span>
                    )}
                </div>
                <div className="mt-2 flex flex-wrap gap-1.5">
                    {[car.year, `${(car.km / 1000).toFixed(0)}k km`, car.transmission].map((tag) => (
                        <span key={tag} className="text-[10px] font-medium text-gray-500 bg-gray-100 px-2 py-0.5 rounded-full">
                            {tag}
                        </span>
                    ))}
                </div>
                <div className="mt-3 pt-3 border-t border-gray-100 flex items-center justify-between">
                    <div>
                        <p className="text-[11px] font-semibold text-gray-700">{car.dealer}</p>
                        <p className="text-[10px] text-gray-400 tracking-widest">{car.city}</p>
                    </div>
                    <button className="w-8 h-8 rounded-full bg-blue-50 hover:bg-blue-600 text-blue-600 hover:text-white transition-all flex items-center justify-center">
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                            <path d="M3 7h8M7 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
}

function CarCardList({ car }: { car: Car }) {
    return (
        <div className="group bg-white rounded-2xl overflow-hidden cursor-pointer border border-gray-100 flex hover:-translate-y-0.5 hover:shadow-xl transition-all duration-300">
            <div className="relative w-40 sm:w-52 shrink-0 overflow-hidden">
                <img
                    src={car.image}
                    alt={`${car.brand} ${car.model}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {car.tag && (
                    <span className={`absolute top-3 left-3 text-[10px] font-bold tracking-widest px-2.5 py-1 rounded-full ${TAG_COLORS[car.tag]}`}>
                        {car.tag}
                    </span>
                )}
            </div>
            <div className="p-4 sm:p-5 flex-1 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 min-w-0">
                <div className="min-w-0">
                    <p className="font-extrabold text-gray-900 text-base sm:text-lg truncate">
                        {car.year} {car.brand}{" "}
                        <span className="text-gray-400 font-semibold">{car.model}</span>
                    </p>
                    <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-2">
                        {[car.year, `${(car.km / 1000).toFixed(0)}k km`, car.transmission].map((tag) => (
                            <span key={tag} className="text-xs font-medium text-gray-500 bg-gray-100 px-2 sm:px-3 py-0.5 sm:py-1 rounded-full">
                                {tag}
                            </span>
                        ))}
                    </div>
                    <div className="mt-2 text-xs sm:text-sm text-gray-400">{car.dealer} · {car.city}</div>
                </div>
                <div className="text-left sm:text-right shrink-0">
                    <div className="text-xl sm:text-2xl font-extrabold text-gray-900">{formatPrice(car.price)}</div>
                    {car.oldPrice && (
                        <div className="text-sm text-rose-400 line-through">{formatPrice(car.oldPrice)}</div>
                    )}
                    <button className="mt-2 sm:mt-3 px-4 sm:px-5 py-1.5 sm:py-2 rounded-xl bg-blue-600 text-white text-xs sm:text-sm font-semibold hover:bg-blue-700 transition-colors">
                        Ver detalle →
                    </button>
                </div>
            </div>
        </div>
    );
}

type GridMode = "large" | "small" | "list";
type SortOption = "" | "price_asc" | "price_desc" | "year" | "km"

export default function VehicleListingPage() {
    // ✅ Tipado correcto: Partial<Record<FilterKey, boolean>>
    const [openFilters, setOpenFilters] = useState<Partial<Record<FilterKey, boolean>>>({});
    const [gridMode, setGridMode] = useState<GridMode>("large");
    const [sortBy, setSortBy] = useState<SortOption>("");
    const [sidebarOpen, setSidebarOpen] = useState(true);

    // ✅ f ahora tiene tipo FilterKey (inferido del array as const)
    const toggleFilter = (f: FilterKey) =>
        setOpenFilters((prev) => ({ ...prev, [f]: !prev[f] }));

    const sortedCars = useMemo(() => {
        const sorted = [...cars];
        if (sortBy === "price_asc") sorted.sort((a, b) => a.price - b.price);
        else if (sortBy === "price_desc") sorted.sort((a, b) => b.price - a.price);
        else if (sortBy === "year") sorted.sort((a, b) => b.year - a.year);
        else if (sortBy === "km") sorted.sort((a, b) => a.km - b.km);
        return sorted;
    }, [sortBy]);

    return (
        <div className="min-h-screen bg-gray-50">
            <div className="flex">
                {/* Sidebar */}
                <aside className={`${sidebarOpen ? "w-64" : "w-0 overflow-hidden"} shrink-0 transition-all duration-300 bg-white border-r border-gray-100 min-h-screen`}>
                    <div className="p-6 border-b border-gray-100">
                        <p className="text-xs font-semibold tracking-widest text-gray-400 uppercase">Filtros</p>
                    </div>
                    <div className="divide-y divide-gray-100">
                        {FILTERS.map((f) => (
                            <div key={f} className="px-6 py-4">
                                <button
                                    onClick={() => toggleFilter(f as FilterKey)}
                                    className="w-full flex items-center justify-between group"
                                >
                                    <span className="text-xs font-bold tracking-widest text-gray-800 group-hover:text-blue-600 transition-colors">
                                        {f}
                                    </span>
                                    <span className={`text-gray-400 group-hover:text-blue-600 transition-all duration-300 ${openFilters[f as FilterKey] ? "rotate-45" : ""}`}>
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                            <path d="M8 3v10M3 8h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                        </svg>
                                    </span>
                                </button>
                                {openFilters[f as FilterKey] && (
                                    <div className="mt-3 space-y-2">
                                        {["Opción 1", "Opción 2", "Opción 3"].map((opt) => (
                                            <label key={opt} className="flex items-center gap-2 cursor-pointer group">
                                                <div className="w-4 h-4 rounded border border-gray-300 group-hover:border-blue-500 transition-colors flex items-center justify-center">
                                                    <div className="w-2 h-2 rounded-sm bg-transparent group-hover:bg-blue-500 transition-colors" />
                                                </div>
                                                <span className="text-sm text-gray-500 group-hover:text-gray-800 transition-colors">{opt}</span>
                                            </label>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </aside>

                {/* Main */}
                <main className="flex-1 px-4 sm:px-6 lg:px-8 py-6 min-w-0">
                    {/* Top bar */}
                    <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
                        <div className="flex items-center gap-3 flex-wrap">
                            <button
                                onClick={() => setSidebarOpen((v) => !v)}
                                className="p-2 rounded-xl bg-white border border-gray-200 text-gray-500 hover:text-blue-600 hover:border-blue-300 transition-all shrink-0"
                            >
                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                                    <path d="M2 5h14M2 9h14M2 13h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                </svg>
                            </button>
                            <div>
                                <span className="text-2xl font-extrabold text-gray-900">{sortedCars.length}</span>
                                <span className="text-gray-400 text-sm ml-2">vehículos encontrados</span>
                            </div>
                            {/* Grid toggles */}
                            <div className="flex items-center gap-1 bg-white border border-gray-200 rounded-xl p-1">
                                {(
                                    [
                                        {
                                            mode: "large" as GridMode,
                                            icon: (
                                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                                    <rect x="1" y="1" width="6" height="6" rx="1" fill="currentColor" />
                                                    <rect x="9" y="1" width="6" height="6" rx="1" fill="currentColor" />
                                                    <rect x="1" y="9" width="6" height="6" rx="1" fill="currentColor" />
                                                    <rect x="9" y="9" width="6" height="6" rx="1" fill="currentColor" />
                                                </svg>
                                            ),
                                        },
                                        {
                                            mode: "small" as GridMode,
                                            icon: (
                                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                                    {[0, 5, 10].map((x) =>
                                                        [0, 5, 10].map((y) => (
                                                            <rect key={`${x}-${y}`} x={x + 1} y={y + 1} width="3" height="3" rx="0.5" fill="currentColor" />
                                                        ))
                                                    )}
                                                </svg>
                                            ),
                                        },
                                        {
                                            mode: "list" as GridMode,
                                            icon: (
                                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                                    <path d="M1 4h14M1 8h14M1 12h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                                </svg>
                                            ),
                                        },
                                    ] satisfies { mode: GridMode; icon: React.ReactNode }[]
                                ).map(({ mode, icon }) => (
                                    <button
                                        key={mode}
                                        onClick={() => setGridMode(mode)}
                                        className={`p-2 rounded-lg transition-all ${gridMode === mode ? "bg-blue-600 text-white shadow-sm" : "text-gray-400 hover:text-gray-700"}`}
                                    >
                                        {icon}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Sort */}
                        <div className="flex items-center gap-2 shrink-0">
                            <span className="text-sm text-gray-400 hidden sm:inline">Ordenar por</span>
                            <select
                                value={sortBy}
                                onChange={(e) => setSortBy(e.target.value as SortOption)}
                                className="text-sm font-medium text-gray-800 bg-white border border-gray-200 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none cursor-pointer"
                            >
                                <option value="">Relevancia</option>
                                <option value="price_asc">Precio: menor a mayor</option>
                                <option value="price_desc">Precio: mayor a menor</option>
                                <option value="year">Año más reciente</option>
                                <option value="km">Menor kilometraje</option>
                            </select>
                        </div>
                    </div>

                    {/* Grid / List */}
                    {gridMode !== "list" ? (
                        <div
                            className={`grid gap-4 sm:gap-5 ${gridMode === "large"
                                ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
                                : "grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"
                                }`}
                        >
                            {sortedCars.map((car) => (
                                <CarCardGrid key={car.id} car={car as Car} />
                            ))}
                        </div>
                    ) : (
                        <div className="flex flex-col gap-4">
                            {sortedCars.map((car) => (
                                <CarCardList key={car.id} car={car as Car } />
                            ))}
                        </div>
                    )}
                </main>
            </div>
        </div>
    );
}
"use client";

import { useState, useEffect } from "react";

const filters = [
    "DISTRIBUIDORA",
    "MARCA",
    "MODELO",
    "PRECIO",
    "AÑO",
    "CARROCERÍA",
    "TRANSMISIÓN",
    "TIPO",
];

const cars = [
    {
        id: 1,
        year: 2025,
        brand: "Suzuki",
        model: "Fronx Boostergreen",
        price: 390000,
        oldPrice: 399000,
        km: 18000,
        transmission: "Automática",
        dealer: "Suzuki Angelopolis",
        city: "PUEBLA",
        image: "https://images.unsplash.com/photo-1609521263047-f8f205293f24?w=600&q=80",
        tag: "NUEVO",
    },
    {
        id: 2,
        year: 2022,
        brand: "Suzuki",
        model: "Ertiga XI7",
        price: 325000,
        oldPrice: null,
        km: 69000,
        transmission: "Automática",
        dealer: "Suzuki Angelopolis",
        city: "PUEBLA",
        image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=600&q=80",
        tag: null,
    },
    {
        id: 3,
        year: 2022,
        brand: "Suzuki",
        model: "Swift",
        price: 269000,
        oldPrice: null,
        km: 81000,
        transmission: "Manual",
        dealer: "Suzuki Angelopolis",
        city: "PUEBLA",
        image: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=600&q=80",
        tag: "OFERTA",
    },
    {
        id: 4,
        year: 2021,
        brand: "Suzuki",
        model: "Swift",
        price: 249000,
        oldPrice: null,
        km: 111000,
        transmission: "Manual",
        dealer: "Suzuki Angelopolis",
        city: "PUEBLA",
        image: "https://images.unsplash.com/photo-1502877338535-766e1452684a?w=600&q=80",
        tag: null,
    },
    {
        id: 5,
        year: 2022,
        brand: "BMW",
        model: "Serie 3",
        price: 615000,
        oldPrice: 630000,
        km: 66000,
        transmission: "Automática",
        dealer: "Suzuki Angelopolis",
        city: "PUEBLA",
        image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=600&q=80",
        tag: "PREMIUM",
    },
    {
        id: 6,
        year: 2023,
        brand: "Chevrolet",
        model: "Silverado",
        price: 720000,
        oldPrice: null,
        km: 22000,
        transmission: "Automática",
        dealer: "Suzuki Angelopolis",
        city: "PUEBLA",
        image: "https://images.unsplash.com/photo-1590362891991-f776e747a588?w=600&q=80",
        tag: "NUEVO",
    },
    {
        id: 7,
        year: 2021,
        brand: "Renault",
        model: "Duster",
        price: 285000,
        oldPrice: 310000,
        km: 45000,
        transmission: "Manual",
        dealer: "Suzuki Angelopolis",
        city: "PUEBLA",
        image: "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=600&q=80",
        tag: "OFERTA",
    },
    {
        id: 8,
        year: 2022,
        brand: "Toyota",
        model: "Prius",
        price: 430000,
        oldPrice: null,
        km: 38000,
        transmission: "Automática",
        dealer: "Suzuki Angelopolis",
        city: "PUEBLA",
        image: "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=600&q=80",
        tag: null,
    },
];

const tagColors = {
    NUEVO: "bg-emerald-500 text-white",
    OFERTA: "bg-rose-500 text-white",
    PREMIUM: "bg-amber-500 text-white",
};

const formatPrice = (p) => `$${p.toLocaleString("es-MX")}`;

// ── Icons ──
const IconMenu = () => (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <path d="M2 5h14M2 9h14M2 13h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
);
const IconClose = () => (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <path d="M4 4l10 10M14 4L4 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
);
const IconPlus = ({ rotated }) => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
        style={{ transition: "transform 0.3s", transform: rotated ? "rotate(45deg)" : "rotate(0deg)" }}>
        <path d="M8 3v10M3 8h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
);
const IconArrow = () => (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
        <path d="M3 7h8M7 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);
const IconFilter = () => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M2 4h12M4 8h8M6 12h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
);
const GridLargeIcon = () => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <rect x="1" y="1" width="6" height="6" rx="1" fill="currentColor" />
        <rect x="9" y="1" width="6" height="6" rx="1" fill="currentColor" />
        <rect x="1" y="9" width="6" height="6" rx="1" fill="currentColor" />
        <rect x="9" y="9" width="6" height="6" rx="1" fill="currentColor" />
    </svg>
);
const GridSmallIcon = () => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        {[0, 5, 10].map((x) =>
            [0, 5, 10].map((y) => (
                <rect key={`${x}-${y}`} x={x + 1} y={y + 1} width="3" height="3" rx="0.5" fill="currentColor" />
            ))
        )}
    </svg>
);
const ListIcon = () => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M1 4h14M1 8h14M1 12h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
);

// ── Sidebar filters (reused in desktop + mobile drawer) ──
function SidebarContent({ openFilters, toggleFilter }) {
    return (
        <div className="divide-y divide-gray-100">
            {filters.map((f) => (
                <div key={f} className="px-6 py-4">
                    <button
                        onClick={() => toggleFilter(f)}
                        className="w-full flex items-center justify-between group"
                    >
                        <span className="syne text-xs font-bold tracking-widest text-gray-800 group-hover:text-blue-600 transition-colors">
                            {f}
                        </span>
                        <span className="text-gray-400 group-hover:text-blue-600 transition-colors">
                            <IconPlus rotated={openFilters[f]} />
                        </span>
                    </button>
                    {openFilters[f] && (
                        <div className="mt-3 space-y-2">
                            {["Opción 1", "Opción 2", "Opción 3"].map((opt) => (
                                <label key={opt} className="flex items-center gap-2 cursor-pointer group">
                                    <div className="w-4 h-4 rounded border border-gray-300 group-hover:border-blue-500 transition-colors flex items-center justify-center">
                                        <div className="w-2 h-2 rounded-sm bg-transparent group-hover:bg-blue-500 transition-colors" />
                                    </div>
                                    <span className="text-sm text-gray-500 group-hover:text-gray-800 transition-colors">
                                        {opt}
                                    </span>
                                </label>
                            ))}
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}

// ── Car Card (grid) ──
function CarCard({ car, compact }) {
    return (
        <div className="card-hover bg-white rounded-2xl overflow-hidden cursor-pointer border border-gray-100 flex flex-col">
            <div className="relative overflow-hidden img-zoom aspect-video bg-gray-100">
                <img src={car.image} alt={`${car.brand} ${car.model}`} className="w-full h-full object-cover" />
                {car.tag && (
                    <span className={`absolute top-2 left-2 text-[10px] font-bold tracking-widest px-2 py-0.5 rounded-full ${tagColors[car.tag]}`}>
                        {car.tag}
                    </span>
                )}
                {car.oldPrice && (
                    <span className="absolute top-2 right-2 text-[10px] font-bold bg-white/90 text-rose-500 px-2 py-0.5 rounded-full border border-rose-100">
                        -{Math.round((1 - car.price / car.oldPrice) * 100)}%
                    </span>
                )}
            </div>
            <div className={`${compact ? "p-3" : "p-4"} flex flex-col flex-1`}>
                <p className={`syne font-extrabold text-gray-900 ${compact ? "text-xs" : "text-sm"} leading-tight`}>
                    {car.year} {car.brand}
                </p>
                <p className={`${compact ? "text-[10px]" : "text-xs"} text-gray-400 mt-0.5`}>{car.model}</p>
                <div className="mt-2 flex items-end gap-2">
                    <span className={`syne font-extrabold text-gray-900 ${compact ? "text-sm" : "text-lg"}`}>
                        {formatPrice(car.price)}
                    </span>
                    {car.oldPrice && (
                        <span className="text-xs text-rose-400 line-through mb-0.5">{formatPrice(car.oldPrice)}</span>
                    )}
                </div>
                {!compact && (
                    <div className="mt-2 flex flex-wrap gap-1.5">
                        {[car.year, `${(car.km / 1000).toFixed(0)}k km`, car.transmission].map((t) => (
                            <span key={t} className="text-[10px] font-medium text-gray-500 bg-gray-100 px-2 py-0.5 rounded-full">
                                {t}
                            </span>
                        ))}
                    </div>
                )}
                <div className="mt-auto pt-3 border-t border-gray-100 flex items-center justify-between">
                    <div className="min-w-0 mr-2">
                        <p className="text-[10px] font-semibold text-gray-700 truncate">{car.dealer}</p>
                        <p className="text-[9px] text-gray-400 tracking-widest">{car.city}</p>
                    </div>
                    <button className="w-7 h-7 rounded-full bg-blue-50 hover:bg-blue-600 text-blue-600 hover:text-white transition-all flex items-center justify-center flex-shrink-0">
                        <IconArrow />
                    </button>
                </div>
            </div>
        </div>
    );
}

// ── Car Row (list mode) ──
function CarRow({ car }) {
    return (
        <div className="card-hover bg-white rounded-2xl overflow-hidden cursor-pointer border border-gray-100 flex">
            <div className="relative flex-shrink-0 overflow-hidden img-zoom w-28 sm:w-44 md:w-52">
                <img src={car.image} alt={`${car.brand} ${car.model}`} className="w-full h-full object-cover" />
                {car.tag && (
                    <span className={`absolute top-2 left-2 text-[9px] font-bold tracking-widest px-2 py-0.5 rounded-full ${tagColors[car.tag]}`}>
                        {car.tag}
                    </span>
                )}
            </div>
            <div className="p-3 sm:p-4 md:p-5 flex-1 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 min-w-0">
                <div className="flex-1 min-w-0">
                    <p className="syne font-extrabold text-gray-900 text-sm sm:text-base md:text-lg truncate">
                        {car.year} {car.brand}{" "}
                        <span className="text-gray-400 font-semibold">{car.model}</span>
                    </p>
                    <div className="flex flex-wrap gap-1.5 mt-1">
                        {[`${(car.km / 1000).toFixed(0)}k km`, car.transmission].map((t) => (
                            <span key={t} className="text-[10px] font-medium text-gray-500 bg-gray-100 px-2 py-0.5 rounded-full">
                                {t}
                            </span>
                        ))}
                    </div>
                    <p className="text-xs text-gray-400 mt-1 truncate">{car.dealer} · {car.city}</p>
                </div>
                <div className="flex sm:flex-col items-center sm:items-end gap-2 sm:gap-1 flex-shrink-0">
                    <div className="sm:text-right">
                        <div className="syne text-base sm:text-xl md:text-2xl font-extrabold text-gray-900">
                            {formatPrice(car.price)}
                        </div>
                        {car.oldPrice && (
                            <div className="text-xs text-rose-400 line-through">{formatPrice(car.oldPrice)}</div>
                        )}
                    </div>
                    <button className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl bg-blue-600 text-white text-xs sm:text-sm font-semibold hover:bg-blue-700 transition-colors whitespace-nowrap">
                        Ver →
                    </button>
                </div>
            </div>
        </div>
    );
}

// ── Main Page ──
export default function VehicleListingPage() {
    const [openFilters, setOpenFilters] = useState({});
    const [gridMode, setGridMode] = useState("large");
    const [sortBy, setSortBy] = useState("");
    const [desktopSidebar, setDesktopSidebar] = useState(true);
    const [mobileDrawer, setMobileDrawer] = useState(false);

    const toggleFilter = (f) =>
        setOpenFilters((prev) => ({ ...prev, [f]: !prev[f] }));

    // Lock body scroll when drawer is open
    useEffect(() => {
        document.body.style.overflow = mobileDrawer ? "hidden" : "";
        return () => { document.body.style.overflow = ""; };
    }, [mobileDrawer]);

    // Close drawer when resizing to desktop
    useEffect(() => {
        const handle = () => { if (window.innerWidth >= 1024) setMobileDrawer(false); };
        window.addEventListener("resize", handle);
        return () => window.removeEventListener("resize", handle);
    }, []);

    return (
        <div className="min-h-screen bg-[#F7F7F9]" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=Syne:wght@600;700;800&display=swap');
        .syne { font-family: 'Syne', sans-serif; }
        .card-hover { transition: transform 0.25s ease, box-shadow 0.25s ease; }
        .card-hover:hover { transform: translateY(-4px); box-shadow: 0 20px 40px rgba(0,0,0,0.10); }
        .img-zoom img { transition: transform 0.4s ease; }
        .img-zoom:hover img { transform: scale(1.05); }
        .drawer { transition: transform 0.3s cubic-bezier(0.4,0,0.2,1); }
      `}</style>

            {/* Mobile drawer backdrop */}
            {mobileDrawer && (
                <div
                    className="fixed inset-0 bg-black/40 z-40 lg:hidden"
                    onClick={() => setMobileDrawer(false)}
                />
            )}

            {/* Mobile drawer */}
            <div
                className={`fixed top-0 left-0 h-full w-72 bg-white z-50 shadow-2xl drawer lg:hidden overflow-y-auto flex flex-col ${mobileDrawer ? "translate-x-0" : "-translate-x-full"
                    }`}
            >
                <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100 sticky top-0 bg-white z-10">
                    <p className="syne text-sm font-bold tracking-widest text-gray-800">FILTROS</p>
                    <button
                        onClick={() => setMobileDrawer(false)}
                        className="p-1.5 rounded-lg hover:bg-gray-100 text-gray-500 transition-colors"
                    >
                        <IconClose />
                    </button>
                </div>
                <div className="flex-1 overflow-y-auto">
                    <SidebarContent openFilters={openFilters} toggleFilter={toggleFilter} />
                </div>
                <div className="p-4 border-t border-gray-100 sticky bottom-0 bg-white">
                    <button
                        onClick={() => setMobileDrawer(false)}
                        className="w-full py-3 rounded-xl bg-blue-600 text-white font-semibold text-sm hover:bg-blue-700 transition-colors"
                    >
                        Aplicar filtros
                    </button>
                </div>
            </div>

            <div className="flex">
                {/* Desktop sidebar */}
                <aside
                    className={`hidden lg:block flex-shrink-0 transition-all duration-300 bg-white border-r border-gray-100 min-h-screen overflow-hidden ${desktopSidebar ? "w-64" : "w-0"
                        }`}
                >
                    <div className="w-64">
                        <div className="p-6 border-b border-gray-100">
                            <p className="text-xs font-semibold tracking-widest text-gray-400 uppercase">Filtros</p>
                        </div>
                        <SidebarContent openFilters={openFilters} toggleFilter={toggleFilter} />
                    </div>
                </aside>

                {/* Content */}
                <main className="flex-1 min-w-0 px-4 sm:px-6 lg:px-8 py-4 sm:py-6">

                    {/* Toolbar */}
                    <div className="flex flex-col xs:flex-row xs:items-center xs:justify-between gap-3 mb-6">
                        <div className="flex items-center gap-2 flex-wrap">
                            {/* Desktop sidebar toggle */}
                            <button
                                onClick={() => setDesktopSidebar((v) => !v)}
                                className="hidden lg:flex items-center justify-center p-2 rounded-xl bg-white border border-gray-200 text-gray-500 hover:text-blue-600 hover:border-blue-300 transition-all"
                                title="Toggle filtros"
                            >
                                <IconMenu />
                            </button>

                            {/* Mobile filter button */}
                            <button
                                onClick={() => setMobileDrawer(true)}
                                className="lg:hidden flex items-center gap-1.5 px-3 py-2 rounded-xl bg-white border border-gray-200 text-gray-700 text-sm font-medium hover:border-blue-300 transition-all"
                            >
                                <IconFilter />
                                Filtros
                            </button>

                            {/* Count */}
                            <div>
                                <span className="syne text-xl sm:text-2xl font-extrabold text-gray-900">{cars.length}</span>
                                <span className="text-gray-400 text-sm ml-1.5">vehículos</span>
                            </div>

                            {/* View mode toggles */}
                            <div className="flex items-center gap-0.5 bg-white border border-gray-200 rounded-xl p-1">
                                {[
                                    { mode: "large", Icon: GridLargeIcon },
                                    { mode: "small", Icon: GridSmallIcon },
                                    { mode: "list", Icon: ListIcon },
                                ].map(({ mode, Icon }) => (
                                    <button
                                        key={mode}
                                        onClick={() => setGridMode(mode)}
                                        className={`p-1.5 sm:p-2 rounded-lg transition-all ${gridMode === mode ? "bg-blue-600 text-white shadow-sm" : "text-gray-400 hover:text-gray-700"
                                            }`}
                                    >
                                        <Icon />
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Sort */}
                        <select
                            value={sortBy}
                            onChange={(e) => setSortBy(e.target.value)}
                            className="text-sm font-medium text-gray-800 bg-white border border-gray-200 rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none cursor-pointer w-full xs:w-auto"
                        >
                            <option value="">Ordenar: Relevancia</option>
                            <option value="price_asc">Precio: menor a mayor</option>
                            <option value="price_desc">Precio: mayor a menor</option>
                            <option value="year">Año más reciente</option>
                            <option value="km">Menor kilometraje</option>
                        </select>
                    </div>

                    {/* Cards */}
                    {gridMode !== "list" ? (
                        <div
                            className={`grid gap-3 sm:gap-4 md:gap-5 ${gridMode === "large"
                                    ? "grid-cols-1 min-[480px]:grid-cols-2 md:grid-cols-3 xl:grid-cols-4"
                                    : "grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5"
                                }`}
                        >
                            {cars.map((car) => (
                                <CarCard key={car.id} car={car} compact={gridMode === "small"} />
                            ))}
                        </div>
                    ) : (
                        <div className="flex flex-col gap-3 sm:gap-4">
                            {cars.map((car) => (
                                <CarRow key={car.id} car={car} />
                            ))}
                        </div>
                    )}
                </main>
            </div>
        </div>
    );
}
import autos from '@/src/data/cotizacion'
import { Download } from "lucide-react";

export default function page() {
    return (
        <div className='max-w-7xl mx-auto px-5 py-10 space-y-10'>
            <div className='space-y-3'>
                <h3 className='text-3xl md:text-4xl font-bold tracking-tight uppercase'>
                    Catálogo de accesorios
                </h3>
                <p className='text-neutral-600 dark:text-neutral-400 text-lg'>
                    Descubre todos los accesorios que tenemos para tu SUZUKI.
                </p>
                <p>Las imágenes de este catálogo son de carácter ilustrativo.</p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
                {autos.map((auto) => (
                    <div
                        key={auto.id}
                        className="group flex flex-col items-center text-center gap-2 pb-5 bg-gray-50 dark:bg-zinc-800 "
                    >
                        <div className="w-full aspect-4/3 flex items-center justify-center rounded-xl overflow-hidden">
                            <img
                                src={auto.imagenPrincipal}
                                alt={auto.modelo}
                                className="w-4/5 h-4/5 object-contain group-hover:scale-105 transition-transform duration-300"
                            />
                        </div>
                        <p className="text-sm font-bold text-gray-800 dark:text-gray-100 leading-snug tracking-wide uppercase group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                            {auto.modelo}
                        </p>
                        <a
                            href={"#"}
                            download
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-blue-300 text-blue-600 text-sm font-medium hover:border-blue-500 hover:text-blue-600 transition-all duration-200"
                        >
                            <Download className="w-4 h-4" />
                            Descargar catálogo
                        </a>
                    </div>
                ))}
            </div>
        </div>
    )
}

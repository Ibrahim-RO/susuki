import Link from "next/link"

export default function Footer() {
    const models = [
        { name: "DZIRE BOOSTERGREEN 2026", link: "#" },
        { name: "BALENO 2026", link: "#" },
        { name: "SWIFT BOOSTERGREEN 2026", link: "#" },
        { name: "ERTIGA BOOSTERGREEN 2026", link: "#" },
        { name: "SWIFT SPORT 2025", link: "#" },
        { name: "SWIFT SPORT FINAL EDITON 2025", link: "#" },
        { name: "FRONX BOOSTERGREEN 2026", link: "#" },
        { name: "JIMNY 2025", link: "#" },
        { name: "ERTIGA XL7 BOOSTERGREEN 2026", link: "#" },
        { name: "JIMNY 5 DOOR 2026", link: "#" },
    ]

    return (
        <footer className="bg-black text-white py-10">
            <div className="max-w-7xl mx-auto px-5 space-y-5">
                <p className="text-center text-lg font-bold">Suzuki Angelopolis - Distribuidor Autorizado Suzuki</p>
                <hr className="border border-gray-600" />
                <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <article className="space-y-2">
                        <h3 className="text-lg font-bold">Modelos</h3>
                        <nav className="flex flex-col gap-2">
                            {models.map(item => (
                                <Link
                                    key={item.name}
                                    href={item.link}
                                    className="text-sm hover:underline"
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </nav>
                    </article>
                    <article className="space-y-2">
                        <h3 className="text-lg font-bold">Horario de Venta</h3>
                        <div className="text-sm space-y-2">
                            <p>Lunes a Viernes: 9:00 AM - 7:30 PM</p>
                            <p>Sábado 09:00 AM - 06:00 PM</p>
                            <p>Domingo 11:00 AM - 06:00 PM</p>
                        </div>
                    </article>
                    <article className="space-y-2">
                        <h3 className="text-lg font-bold">Horario de Refacciones</h3>
                        <div className="text-sm space-y-2">
                            <p>Lunes a Viernes: 9:00 AM - 7:30 PM</p>
                            <p>Sábado 09:00 AM - 02:00 PM</p>
                        </div>
                    </article>
                    <article className="space-y-2">
                        <h3 className="text-lg font-bold">Horario de Servicio</h3>
                        <div className="text-sm space-y-2">
                            <p>Lunes a Viernes: 8:00 AM - 7:00 PM</p>
                            <p>Sábado 08:00 AM - 02:00 PM</p>
                        </div>
                    </article>
                </section>
                <hr className="border border-gray-600"/>
                <div className="flex justify-between items-center">
                    <img src="https://www.suzukiangelopolis.com.mx/" alt="Purbea" />
                    <a href="#">Aviso de privacidad</a>
                </div>
            </div>
        </footer>
    )
}

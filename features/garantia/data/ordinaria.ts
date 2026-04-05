export interface Service {
    title: string;
    description: string;
    category: "auto" | "hogar" | "medica";
}

export const services: Service[] = [
    {
        title: "Arrastre de grúa",
        category: "auto",
        description:
            "En caso de avería, gestionamos los servicios de remolque desde el lugar del incidente y hasta el Concesionario Autorizado SUZUKI más cercano. El beneficiario debe acompañar el vehículo durante todo el arrastre. Limitado a 3 eventos por año.",
    },
    {
        title: "Cambio de llanta",
        category: "auto",
        description:
            "En caso de ponchadura, coordinamos un técnico para el cambio de llanta exclusivamente por la refacción. Si el beneficiario no cuenta con ella, trasladamos la llanta dañada a la vulcanizadora o Concesionario Autorizado SUZUKI más cercano. Limitado a 3 eventos por año.",
    },
    {
        title: "Suministro de gasolina",
        category: "auto",
        description:
            "Proporcionamos 10 litros de gasolina, con costo para el beneficiario. Limitado a 3 eventos por año.",
    },
    {
        title: "Paso de corriente",
        category: "auto",
        description:
            "Enviamos un técnico para pasar corriente a la batería. Limitado a 3 eventos por año.",
    },
    {
        title: "Cerrajería",
        category: "hogar",
        description:
            "Si las llaves del beneficiario se quedaron dentro del vehículo, nos coordinamos con un cerrajero para que abra la unidad, una vez que el beneficiario compruebe la propiedad del vehículo. En caso de llaves extraviadas, coordinamos el servicio de grúa únicamente al Concesionario Autorizado SUZUKI más cercano. Si es necesario abrir la unidad para liberar la transmisión y realizar el arrastre, ambos servicios de cerrajero y grúa son sin costo para el beneficiario.",
    },
    {
        title: "Consultoría médica telefónica o a domicilio",
        category: "medica",
        description:
            "En caso de lesión o enfermedad del conductor, enviamos un médico o lo canalizamos a un centro hospitalario, siempre y cuando el conductor se encuentre en territorio nacional. La totalidad de los gastos generados por este concepto corren por cuenta y riesgo del beneficiario, sin embargo, con costo preferencial.",
    },
];
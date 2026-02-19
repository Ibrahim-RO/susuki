export const modelos = [
    {
        id: 1,
        slug: "dzire",
        nombre: "DZIRE BOOSTERGREEN 2026",
        marca: "Suzuki",
        categoria: "Sedán",
        descripcion: "¡Impresiona desde el primer vistazo! Diseño elegante, eficiencia híbrida ligera y tecnología avanzada para el día a día.",
        precio_desde: 299990,
        precio_formateado: "$299,990 MXN",

        portada: "https://www.suzukiangelopolis.com.mx/assets/img/dzire.png",

        galeria: [
            "https://www.suzukiangelopolis.com.mx/assets/img/dzire.png",
            "https://images.unsplash.com/photo-1619767886558-efdc259cde1a",
            "https://images.unsplash.com/photo-1552519507-da3b142c6e3d",
            "https://images.unsplash.com/photo-1502877338535-766e1452684a"
        ],

        especificaciones: {
            motor: "1.2L DualJet + BoosterGreen (Mild Hybrid)",
            potencia_hp: 82,
            torque_nm: 113,
            transmision: ["Manual 5 velocidades", "CVT"],
            traccion: "Delantera (FWD)",
            consumo_combustible: "22 - 25 km/l combinado",
            tanque_litros: 37,
            direccion: "Asistida eléctricamente",
            suspension_delantera: "McPherson",
            suspension_trasera: "Eje torsional",
        },

        dimensiones: {
            largo_mm: 3995,
            ancho_mm: 1735,
            alto_mm: 1515,
            distancia_ejes_mm: 2450,
            cajuela_litros: 378,
            peso_kg: 915,
        },

        seguridad: {
            bolsas_aire: 6,
            frenos: "ABS + EBD + BA",
            control_estabilidad: true,
            control_traccion: true,
            asistente_pendiente: true,
            camara_reversa: true,
            sensores_estacionamiento: true,
            anclajes_isofix: true,
        },

        tecnologia: {
            pantalla: "Pantalla táctil 9 pulgadas",
            apple_carplay: true,
            android_auto: true,
            bluetooth: true,
            cargador_usb: true,
            aire_acondicionado: "Automático",
            llave_inteligente: true,
            encendido_boton: true,
            volante_multifuncion: true,
            cluster_digital: true,
        },

        exterior: {
            faros: "LED",
            rines: "15 pulgadas aluminio",
            espejos_electricos: true,
            espejos_abatibles: true,
            luces_dia_led: true,
            techo_bicolor: false,
        },

        interior: {
            vestiduras: "Tela premium",
            ajuste_volante: "Altura",
            ajuste_asiento_conductor: "Manual 6 posiciones",
            descansabrazos: true,
            asientos_traseros_abatibles: "60/40",
        },

        colores: [
            {
                nombre: "Blanco Perlado",
                codigo_hex: "#F5F5F5",
            },
            {
                nombre: "Gris Metálico",
                codigo_hex: "#7D7D7D",
            },
            {
                nombre: "Rojo Intenso",
                codigo_hex: "#A11217",
            },
            {
                nombre: "Azul Profundo",
                codigo_hex: "#1B3C73",
            },
        ],

        versiones: [
            {
                nombre: "GL TM",
                precio: 299990,
                transmision: "Manual",
            },
            {
                nombre: "GL CVT",
                precio: 319990,
                transmision: "CVT",
            },
            {
                nombre: "GLX CVT",
                precio: 339990,
                transmision: "CVT",
            },
        ],

        garantia: {
            defensa_defensa: "3 años o 60,000 km",
            tren_motriz: "5 años o 100,000 km",
        },

        disponible: true,
        destacado: true,
    }
]
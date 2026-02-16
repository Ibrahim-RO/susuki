export type Auto = {
    id: string;
    marca: string;
    modelo: string;
    imagenPrincipal: string;
    versiones: {
        nombre: string;
    }[]
}
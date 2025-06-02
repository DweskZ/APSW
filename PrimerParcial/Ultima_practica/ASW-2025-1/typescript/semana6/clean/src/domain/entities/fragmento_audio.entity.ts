


export class FragmentoAudio {
    constructor(
    public id: number,
    public grabacion_id: number, // ID de la grabación a la que pertenece el fragmento
    public slide_id: number, // ID del slide al que pertenece el fragmento
    public inicio_segundo: number, // Inicio del fragmento en segundos
    public fin_segundo: number, // Fin del fragmento en segundos
    public archivo_fragmento: string // Nombre del archivo de audio del fragmento
) {}
}
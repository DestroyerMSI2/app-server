import z from 'zod';

const Validador = z.object({
    peticion: z.string({
        required_error: 'Este campo es requerido',
        invalid_type_error: 'Error de tipado'
    })
});

export function ValidarPeticion(object) {
    return Validador.safeParse(object)
}

import type { NextApiRequest, NextApiResponse } from 'next';
import executeQuery from '../../lib/database/mariadb';

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<{ message: string } | { error: string }>
) {
    if (req.method === 'POST') {
        const { nombre, email, selectedOption, fecha, hora, mensaje } = req.body;
        try {
            const respuesta = await executeQuery(
                'INSERT INTO asentamiento (nombre, email, servicio, fecha, hora, mensaje) VALUES (?, ?, ?, ?, ?, ?)',
                [nombre, email, selectedOption, fecha, hora, mensaje]
            );

            res.status(200).json({ message: 'Datos insertados con éxito' });
        } catch (error: any) {
            console.error('Error:', error);
            res.status(500).json({ error: 'Error al insertar los datos en la base de datos' });
        }
    } else {
        res.status(405).json({ error: 'Método no permitido' });
    }
}
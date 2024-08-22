/* import type { NextApiRequest, NextApiResponse } from 'next'
import manejadorConsultaDB  from '../../lib/database/mariadb'
type ResponseData = {
    message: string
} */

/* export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<ResponseData>
  ) {
    try {
      const datos = await manejadorConsultaDB(req, res);

      
      res.status(200).json( datos );
    } catch (error) {
      res.status(500).json(  );
    }
  }
 */

// export default async function handlerDB(
// req: NextApiRequest,
// res: NextApiResponse<ResponseData>
// ){
//   try {
//     const result = await executeQuery('SELECT * FROM users', []);
//     res.status(200).json(result);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// }

import type { NextApiRequest, NextApiResponse } from 'next';
import executeQuery from '../../lib/database/mariadb';

type ResponseData = {
    id: number;
    nombre: string;
}[];

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<ResponseData | { error: string }>
) {
    try {
        const result = await executeQuery('SELECT * FROM tabla_prueba', []);
        res.status(200).json(result);
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
}

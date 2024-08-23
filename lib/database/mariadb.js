// import mariadb from 'mariadb';

// const pool = mariadb.createPool({
// host: 'localhost',
// user: 'test',
// password: 'test',
// database: 'prueba',
//     connectionLimit: 5
// });

// export default pool;


/* import mariadb from 'mariadb';

const pool = mariadb.createPool({
    host: 'localhost',
    user: 'test',
    password: 'test',
    database: 'prueba',
    //   host: process.env.MARIADB_HOST,
    //   user: process.env.MARIADB_USER,
    //   password: process.env.MARIADB_PASSWORD,
    //   database: process.env.MARIADB_DATABASE,
    connectionLimit: 5
});

async function executeQuery(query, values) {
    let conn;
    try {
        conn = await pool.getConnection();
        const res = await conn.query(query, values);
        return res;
    } catch (err) {
        throw err;
    } finally {
        if (conn) conn.release();
    }
}

export default async function manejadorConsultaDB(req, res) {
    try {
      const result = await executeQuery('SELECT * FROM tabla_prueba', []);
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
 */

import mariadb from 'mariadb';

const pool = mariadb.createPool({
    host: '127.0.0.1',
    user: 'root',
    password: 'ul109000',
    database: 'prueba',
    connectionLimit: 5,
    port: 3307

});

async function executeQuery(query, values) {
    let conn;
    try {
        conn = await pool.getConnection();
        const res = await conn.query(query, values);
        return res;
    } catch (err) {
        console.log(err);
        throw err;
    } finally {
        if (conn) conn.release();
    }
}

async function testConnection() {
    let conn;
    try {
        conn = await pool.getConnection();
        console.log("Conexión exitosa");
    } catch (err) {
        console.error("Error al conectar:", err);
    } finally {
        if (conn) conn.end();
    }
}

testConnection();

export default executeQuery;

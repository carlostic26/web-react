// import mariadb from 'mariadb';

// const pool = mariadb.createPool({
// host: 'localhost',
// user: 'test',
// password: 'test',
// database: 'prueba',
//     connectionLimit: 5
// });

// export default pool;


import mariadb from 'mariadb';

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

export async function executeQuery(query, values) {
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

import mysql from 'mysql2/promise';

const config = {
    host: 'b9ejxpdtn4ylh7bhqquh-mysql.services.clever-cloud.com',
    port: '3306',
    user: 'uhj0vcjedombkpme',
    password: 'e76gXn8QUhHlubnBkE28',
    database: 'b9ejxpdtn4ylh7bhqquh'
};

const pool = mysql.createPool(config);

export class ModalMYSQL {
    static async ApiRes() {
        try {
            const [empleados] = await pool.query('SELECT * FROM empleados'); 
            return empleados; 
        } catch (error) {
            console.error('Error en la consulta a la base de datos: ', error);
           return 'Ha ocurrido un error en base de datos'
        }
    }
}

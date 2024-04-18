const db = require('../db/db')



const newTask = async ( taskNumber, taskParent, taskChild, taskLink, taskDesc ) => {
    try {
        const { rows } = await db.query(
            'INSERT INTO daily_work (ticket_number, parent_ticket, child_ticket, ticket_link, description) VALUES ($1, $2, $3, $4, $5) RETURNING *',
            [taskNumber, taskParent, taskChild, taskLink, taskDesc]
        );

        console.log('Datos insertados correctamente')
        return rows[0];
    } catch (error) {
        throw error;
    }

}

module.exports = { newTask }
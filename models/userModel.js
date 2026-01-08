const db = require('../config/db');

const User = {
    create: async (name, email) => {
        const [result] = await db.execute(
            'INSERT INTO users (name, email) VALUES (?, ?)',
            [name, email]
        );
        return result;
    },
    getAll: async () => {
        const [rows] = await db.execute('SELECT * FROM users ORDER BY id DESC');
        return rows;
    }
};

module.exports = User;

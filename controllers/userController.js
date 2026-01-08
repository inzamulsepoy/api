const User = require('../models/userModel');

const createUser = async (req, res) => {
    try {
        const { name, email } = req.body;
        if (!name || !email) {
            return res.status(400).json({ status: 'error', message: 'All fields required' });
        }

        const result = await User.create(name, email);
        res.json({ status: 'success', message: 'User added', id: result.insertId });
    } catch (err) {
        console.error(err);
        res.status(500).json({ status: 'error', message: 'Server error' });
    }
};

const getUsers = async (req, res) => {
    try {
        const users = await User.getAll();
        res.json(users);
    } catch (err) {
        console.error(err);
        res.status(500).json({ status: 'error', message: 'Server error' });
    }
};

module.exports = { createUser, getUsers };

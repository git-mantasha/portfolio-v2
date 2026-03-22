require('dotenv').config();
const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// ─── Middleware ───────────────────────────────────────────────────────────────
app.use(cors({
    origin: '*', // Allow all origins for local development
    methods: ['GET', 'POST'],
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ─── MySQL Connection ─────────────────────────────────────────────────────────
const db = mysql.createConnection({
    host:     process.env.DB_HOST,
    port:     process.env.DB_PORT || 3306,
    user:     process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
});

db.connect((err) => {
    if (err) {
        console.error('❌ Database connection failed:', err.message);
        console.error('   Make sure XAMPP MySQL is running and .env is configured correctly.');
        process.exit(1);
    }
    console.log('✅ Connected to MySQL database:', process.env.DB_NAME);
});

// ─── Contact Form Route ───────────────────────────────────────────────────────
app.post('/contact', (req, res) => {
    const { name, email, message } = req.body;

    // Server-side validation (double check even though frontend validates)
    if (!name || !email || !message) {
        return res.status(400).json({
            success: false,
            error: 'All fields are required.'
        });
    }

    // Basic email format check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return res.status(400).json({
            success: false,
            error: 'Invalid email address.'
        });
    }

    // Insert into database
    const sql = 'INSERT INTO contacts (name, email, message) VALUES (?, ?, ?)';
    db.query(sql, [name.trim(), email.trim(), message.trim()], (err, result) => {
        if (err) {
            console.error('❌ Failed to save message:', err.message);
            return res.status(500).json({
                success: false,
                error: 'Failed to save your message. Please try again.'
            });
        }

        console.log(`📩 New message saved! ID: ${result.insertId} | From: ${name} <${email}>`);
        return res.status(200).json({
            success: true,
            message: 'Message received successfully!'
        });
    });
});

// ─── Health Check Route ───────────────────────────────────────────────────────
app.get('/', (req, res) => {
    res.send('✅ Mantasha Portfolio Backend is running.');
});

// ─── Start Server ─────────────────────────────────────────────────────────────
app.listen(PORT, () => {
    console.log(`🚀 Server running at http://localhost:${PORT}`);
});

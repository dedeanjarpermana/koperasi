



// Buat koneksi
const mysql = require('mysql');

// Buat connection pool
const pool = mysql.createPool({
  connectionLimit: 10, // adjust as needed
  host: 'localhost',
  user: 'root',  // Ganti dengan nama pengguna MySQL Anda
  password: '',  // Ganti dengan kata sandi MySQL Anda
  database: 'koperasi'  // Ganti dengan nama database Anda
});

module.exports = pool;


// Membuat tabel jika belum ada
// const createTableQuery = `
//   CREATE TABLE IF NOT EXISTS kontak_pesan (
//     id INT PRIMARY KEY AUTO_INCREMENT,
//     nama VARCHAR(255),
//     email VARCHAR(255),
//     alamat VARCHAR(255),
//     pesan TEXT,
//     no_kontak VARCHAR(20),
//     createdAt DATETIME NOT NULL, 
//     updatedAt DATETIME NOT NULL
//   )
// `;

// connection.query(createTableQuery, (err) => {
//   if (err) {
//     console.error('Error creating table:', err);
//     return;
//   }
//   console.log('Table created or already exists');
// });

// Menyisipkan data contoh
// const insertDataQuery = `
//   INSERT INTO data_pengguna (nama, email, alamat, pesan, no_kontak)
//   VALUES ('Contoh Nama', 'contoh@email.com', 'Contoh Alamat', 'Contoh Pesan', '123456789')
// `;

// connection.query(insertDataQuery, (err, results) => {
//   if (err) {
//     console.error('Error inserting data:', err);
//     return;
//   }
//   console.log('Data inserted successfully');
// });

// // Menutup koneksi
// connection.end((err) => {
//   if (err) {
//     console.error('Error closing connection:', err);
//     return;
//   }
//   console.log('Connection closed');
// });

const express = require ('express')
const app = express()
const cors = require('cors')
const pool = require ('./controller/db_config')
// const moment = require ('moment')
// let currentDate = moment().format('YYYY-MM-DD, hh:mm:ss');

// import moment from 'moment';


app.use(cors())
app.use(express.json())

port = 8000

app.get('/', (req, res) => {
    // res.send('Hello World!');
    console.log("server siap digunakan")
    res.sendFile('./index.html', {root:__dirname})
  });



  
// open list semua user
app.get('/ViewUser', (req, res) => {
    pool.query('SELECT * FROM user', (error, results, fields) => {
        if (error) {
            console.error(error.message);
            res.status(500).send('Internal Server Error');
        } else {
            res.json(results);
        }
    });
});

// open list semua pendaftar
app.get('/view_pendaftar', (req, res) => {
    pool.query('SELECT * FROM tb_registrasi', (error, results, fields) => {
        if (error) {
            console.error(error.message);
            res.status(500).send('Internal Server Error');
        } else {
            res.json(results);
        }
    });
});



/// Contoh endpoint login di backend
app.post('/login', (req, res) => {
    const { username, password } = req.body;
  
    // Lakukan kueri ke database dengan parameterized query
    const query = 'SELECT * FROM user WHERE username = ?';
    pool.query(query, [username], (error, results, fields) => {
        if (error) {
            console.error(error.message);
            res.status(500).send('Internal Server Error');
        } else {
            // Jika username ditemukan
            if (results.length > 0) {
                const user = results[0];
                // Bandingkan password yang dimasukkan dengan password di database
                if (user.password === password) {
                    res.json({ success: true });
                } else {
                    res.json({ success: false, message: 'Invalid credentials' });
                }
            } else {
                res.json({ success: false, message: 'User not found' });
            }
        }
    });
});

// Endpoint untuk menyimpan data pendaftaran
app.post('/pendaftaran', (req, res) => {
    console.log('req.body:', req.body);
    const {
        nama,
        nama_lengkap,
        alamat_lengkap,
        email,
        phone,
        ktp,
        selvi,
        pekerjaan,
        jumlah_tanggungan
    } = req.body;

    const query = `INSERT INTO tb_registrasi (id, nama, nama_lengkap, alamat_lengkap, email, phone, ktp, selvi, pekerjaan, jumlah_tanggungan) VALUES ('', '${nama}', '${nama_lengkap}', '${alamat_lengkap}', '${email}', '${phone}', '${ktp}', '${selvi}', '${pekerjaan}', '${jumlah_tanggungan}')`;
    pool.query(query, [nama, nama_lengkap, alamat_lengkap, email, phone, ktp, selvi, pekerjaan, jumlah_tanggungan], (error, results, fields) => {
        console.log('nama:', nama);
        console.log('nama_lengkap:', nama_lengkap);
        if (error) {
            console.error(error.message);
            res.status(500).send('Internal Server Error');
        } else {
            res.json({ success: true, message: 'Data pendaftaran berhasil disimpan' });
        }
    });
});


// open semua jumlah siswa pertahun untuk chart 
app.get('/jumlah_pembelian_perbulan', (req, res) => {
    pool.query('SELECT * FROM jumlah_pelanggan', (error, results, fields) => {
        if (error) {
            console.error(error.message);
            res.status(500).send('Internal Server Error');
        } else {
            res.json(results);
        }
    });
});

app.listen(port, () => {
  
    console.log(`Example app listening on port http://localhost:${port}/`)
  })

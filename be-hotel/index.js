const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

app.use(express.static(__dirname))

//import end-point diletakkan disini

// endpoint user
const user = require('./routes/user');
app.use("/store/user", user)

// endpoint tipe_kamar
const tipe_kamar = require('./routes/tipe_kamar');
app.use("/store/tipe_kamar", tipe_kamar)

// endpoint pemesanan
const pemesanan = require('./routes/pemesanan');
app.use("/store/pemesanan", pemesanan);

// endpoint kamar
const kamar = require('./routes/kamar');
app.use("/store/kamar", kamar)

// endpoint detail_pemesanan
const detail_pemesanan = require('./routes/detail_pemesanan');
app.use("/store/detail_pemesanan", detail_pemesanan)

//run server
app.listen(8080, () => {
    console.log('server run on port 8080')
})
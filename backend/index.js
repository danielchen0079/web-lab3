const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./connectDB/connectDB');
const productRoutes = require('./routes/productRoutes');
const cartRoutes = require('./routes/cartRoutes');
const userRoutes = require('./routes/userRoutes');
const swaggerDocs = require('./swagger');

dotenv.config();
connectDB();
const app = express();

app.use(express.json());

app.use('/api/products', productRoutes);
app.use('/api/cart', cartRoutes);
app.use('/api/user', userRoutes);

app.get('/',(req, res)=>{
    res.send('Hello World');
});

swaggerDocs(app);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
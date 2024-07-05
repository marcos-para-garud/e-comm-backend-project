// 1. Import Exprerss
import express from 'express';
import dotenv from 'dotenv';
import productRouter from './src/features/product/product.routes.js';
import userRouter from './src/features/user/user.routes.js';
import jwtAuth from './src/middlewares/jwt.middleware.js';
import cartRouter from './src/features/cartItems/cartItems.routes.js';
import loggerMiddleware from './src/middlewares/logger.middleware.js';

import { connectToMongodb } from './src/config/mongodb.js';

// 2. Create Server
const server = express();
dotenv.config();

server.use(express.json());

// for all requests related to product, redirect to product routes.
// localhost:3200/api/productss
server.use(loggerMiddleware);

server.use((err, req, res, next) => {
  console.log(err);
  res.status(500).send('Something went wrong!')
})

server.use(
  '/api/products',
  jwtAuth,
  productRouter
);
server.use("/api/cartItems", jwtAuth, cartRouter);
server.use('/api/users', userRouter);

// 3. Default request handler
server.get('/', (req, res) => {
  res.send('Welcome to Ecommerce APIs');
});

// 4. Specify port.
server.listen(3200 , ()=>{
  console.log('Server is running at 3200');
  connectToMongodb();
});



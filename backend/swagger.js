const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Shopping Cart API',
      version: '1.0.0',
      description: 'A simple Express API for a shopping cart',
    },
    servers: [
      {
        url: 'http://localhost:5000',
      },
    ],
  },
  apis: ['./routes/*.js'], // 你可以写在哪个文件夹下注释路由
};

const swaggerSpec = swaggerJSDoc(options);

const swaggerDocs = (app) => {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
  console.log(`Swagger docs available at http://localhost:5000/api-docs`);
};

module.exports = swaggerDocs;

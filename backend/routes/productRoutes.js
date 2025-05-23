const express = require('express');
const router = express.Router();
const {getAllProducts, 
    getProductById, 
    getRandomProduct, 
    searchProduct} = require('../controllers/productController');

/**
 * @swagger
 * /api/products:
 *   get:
 *     summary: 获取所有产品
 *     tags: [Products]
 *     responses:
 *       200:
 *         description: 成功返回产品列表
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   _id:
 *                     type: string
 *                   name:
 *                     type: string
 *                   price:
 *                     type: number
 */
router.get('/', getAllProducts);

/**
 * @swagger
 * /api/products/{id}:
 *   get:
 *     summary: 通过ID获取产品
 *     tags: [Products]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: 成功返回产品信息
 *       404:
 *         description: 产品未找到
 */
router.get('/:id', getProductById);

/**
 * @swagger
 * /api/products/random:
 *   get:
 *     summary: 获取随机产品
 *     tags: [Products]
 *     responses:
 *       200:
 *         description: 成功返回随机产品
 */
router.get('/random', getRandomProduct);

/**
 * @swagger
 * /api/products/search:
 *   get:
 *     summary: 搜索产品
 *     tags: [Products]
 *     parameters:
 *       - in: query
 *         name: q
 *         schema:
 *           type: string
 *         description: 搜索关键词
 *     responses:
 *       200:
 *         description: 成功返回搜索结果
 */
router.get('/search', searchProduct);

module.exports = router;
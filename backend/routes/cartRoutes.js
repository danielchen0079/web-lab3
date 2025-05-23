const express = require('express');
const router = express.Router();
const {addToCart, getCart, updateCartItem, deleteCartItem} = require('../controllers/cartController');

/**
 * @swagger
 * /api/cart:
 *   post:
 *     summary: 获取购物车内容
 *     tags: [Cart]
 *     responses:
 *       200:
 *         description: 成功返回购物车信息
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 items:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       productId:
 *                         type: string
 *                       quantity:
 *                         type: number
 */
router.post('/', getCart);

/**
 * @swagger
 * /api/cart/add:
 *   post:
 *     summary: 添加商品到购物车
 *     tags: [Cart]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               productId:
 *                 type: string
 *               quantity:
 *                 type: number
 *     responses:
 *       200:
 *         description: 商品成功添加到购物车
 *       400:
 *         description: 请求参数错误
 */
router.post('/add', addToCart);

/**
 * @swagger
 * /api/cart/{id}:
 *   put:
 *     summary: 更新购物车商品数量
 *     tags: [Cart]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               quantity:
 *                 type: number
 *     responses:
 *       200:
 *         description: 购物车商品更新成功
 *       404:
 *         description: 商品未找到
 */
router.put('/:id', updateCartItem);

/**
 * @swagger
 * /api/cart/{id}:
 *   delete:
 *     summary: 从购物车删除商品
 *     tags: [Cart]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: 商品成功从购物车中删除
 *       404:
 *         description: 商品未找到
 */
router.delete('/:id', deleteCartItem);

module.exports = router;
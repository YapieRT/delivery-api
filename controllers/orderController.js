import Order from '../models/orderModel.js';
import { validationResult } from 'express-validator';

export const newOrder = async (req, res) => {
  try {
    console.log(req.body);
    const errors = validationResult(req);

    if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

    await Order.create(req.body);

    res.status(200).json({ msg: 'Success' });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: 'Failed to create order.',
    });
  }
};

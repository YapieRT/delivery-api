import { Schema, model } from 'mongoose';

const orderSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  order: {
    type: Array,
    required: true,
  },
  totalPrice: {
    type: Number,
    required: true,
  },
});

export default model('Order', orderSchema);

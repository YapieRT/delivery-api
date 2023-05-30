import { Schema, model } from 'mongoose';

const restaurantSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  location: {
    type: String,
  },
});

export default model('Restaurant', restaurantSchema);

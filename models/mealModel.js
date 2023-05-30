import { Schema, model } from 'mongoose';

const mealSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  restaurant: {
    type: Schema.Types.ObjectId,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
});

export default model('Meal', mealSchema);

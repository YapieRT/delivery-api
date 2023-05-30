import cors from 'cors';
import express from 'express';

import { connectDB } from './db.js';

import * as RestaurantController from './controllers/restaurantsController.js';
import * as MealsController from './controllers/mealsController.js';
import * as OrderController from './controllers/orderController.js';
import * as Validator from './validation/validator.js';

const app = express();

connectDB();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 8000;

app.get('/api/getAllRestaurants', RestaurantController.getAllRestaurants);
app.get('/api/getRestaurantMeals', MealsController.getRestaurantMeals);
app.post('/api/newOrder', Validator.orderValidator(), OrderController.newOrder);

app.listen(PORT, (err) => {
  console.log(`Server listening on port ${PORT}...`);
  if (err) {
    return console.log(err);
  }
});

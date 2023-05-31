import Meal from '../models/mealModel.js';

export const getRestaurantMeals = async (req, res) => {
  try {
    const restaurantId = req.query.id;
    const meals = await Meal.find({ restaurant: restaurantId }).select('name restaurant price');
    if (meals) {
      res.status(200).json({
        message: 'Success',
        meals: meals,
      });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: 'Failed',
    });
  }
};

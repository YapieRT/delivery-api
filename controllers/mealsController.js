import Meal from '../models/mealModel.js';

// {MealsController.addMeal();

// const data = new Meal({
//   name: 'Mushroom Mac and Cheese.',
//   restaurant: '647520188151be5099837120',
// });

// export const addMeal = async (req, res) => {
//     await Meal.create(data)
//       .then((MealResponse) => {
//         console.log(MealResponse); // Handle the saved order document
//       })
//       .catch((error) => {
//         console.error(error); // Handle the error if the insertion fails
//       });
//   };}

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

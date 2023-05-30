import Restaurant from '../models/restaurantModel.js';

export const getAllRestaurants = async (req, res) => {
  try {
    let restaurants = await Restaurant.find().select('name');
    for (let i = 0; i < restaurants.length; i++) {
      await restaurants[i].populate('name', 'name');
    }
    res.status(200).json({
      message: 'Success',
      restaurants: restaurants,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: 'Failed',
    });
  }
};

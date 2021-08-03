const router = require('express').Router();
const recipeRoutes = require('./recipeRoutes');
const restaurantRoutes = require('./restaurantRoutes');




router.use('/recipes', recipeRoutes);
router.use('/restaurantRoutes', restaurantRoutes);




module.exports = router;
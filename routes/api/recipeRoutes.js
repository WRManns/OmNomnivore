const router = require("express").Router();
const { Recipe } = require("../../models");
const sequelize = require("../../config/connection");

// C- populate the database with list of recipies
router.post("/", (req, res) => {
    Recipe.create({
        recipeID: req.body.recipeID,
        recipeName: req.body.recipeName,
        recipeLink: req.body.recipeLink,
        user_id: req.session.user_id
            })
      .then((postContent) => res.json(postContent))
      .catch((err) => {
          console.log(err);
          res.status(500)
              .json(err);
      });
});

// R- Read- get a single recipe
router.get("/:id", (req, res) => {
    Recipe.findOne({
            where: {
                id: req.params.id,
            },
            attributes: ["id", "recipeID", "recipeName", "recipeLink" ],
           
        })
       
});

// R- Read- get all recipies
router.get("/", (req, res) => {
    console.log("======================");
    Recipe.findAll({
      attributes: ["id", "recipeID", "recipeName", "recipeLink" ],
      order: [["recipeLink", "DESC"]],
      where: {
        user_id: req.session.user_id
      }     
        })
        .then((postContent) => res.json(postContent.reverse()))
        .catch((err) => {
            console.log(err);
            res.status(500)
                .json(err);
        });
});
// D- delete a post
router.delete("/del", (req, res) => {
    Recipe.destroy({
    where: {
      user_id: req.session.user_id
    }
  })
  })

  module.exports = restaurantRouter;

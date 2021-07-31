const router = require("express").Router();
const { Restaruant } = require("../../models");
const sequelize = require("../../config/connection");

// C- populate the database with list of restaurants
router.post("/", (req, res) => {
    Restaruant.create({
        restaurantID: req.body.restaurantID,
        restaurantName: req.body.restaurantName,
        restaurantLink: req.body.restaurantLink,
        user_id: req.session.user_id
            })
      .then((postContent) => res.json(postContent))
      .catch((err) => {
          console.log(err);
          res.status(500)
              .json(err);
      });
});

// R- Read- get a single restaurant
router.get("/:id", (req, res) => {
    Restaruant.findOne({
            where: {
                id: req.params.id,
            },
            attributes: ["id", "restaurantID", "restaurantName", "restaurantLink" ],
           
        })
       
});

// R- Read- get all games
router.get("/", (req, res) => {
    console.log("======================");
    Restaruant.findAll({
      attributes: ["id", "restaurantID", "restaurantName", "restaurantLink" ],
      order: [["restaurantLink", "DESC"]],
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
    Restaruant.destroy({
    where: {
      user_id: req.session.user_id
    }
  })
  })

  module.exports = router;

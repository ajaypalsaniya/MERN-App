const express = require("express");
const router = express.Router();

//item Model
const Item = require("../../models/Item");

//@route Get API/ITEMS
router.get("/", (req, res) => {
  Item.find()
    .sort({ date: -1 })
    .then((items) => res.json(items));
});

//@route POST API/ITEM
router.post("/", (req, res) => {
  const newItem = new Item({
    name: req.body.name,
  });
  newItem.save().then((item) => res.json(item));
});

//@route Delete API/ITEM
router.delete("/:id", (req, res) => {
  Item.findById(req.params.id).then((Item) =>
    Item.remove().then(() => res.json({ sucess: true }))
  );
});

module.exports = router;

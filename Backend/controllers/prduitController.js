const Produit =require ("../models/produit")
const { validationResult } = require("express-validator");


module.exports={

// @route    POST annonces/
// @desc     add an ad
// @access   Private
postProduit: async (req, res) => {
    try {
          const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() });
      }
      const { title, description, image, price, category,countInStock } = req.body;
      const publication = new Produit({
        user: req.user._id,
        title,
        category,
        description,
        image, 
        price,
        countInStock
      });
      publication.save();
      res.status(201).send(publication);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Server error");
    }
  },

// @desc     get prods
// @access   Public
getProduit: async (req, res) => {
    try {
      const publications = req.query.user_id
        ? await Produit.find({ user: req.query.user_id })
        : req.query.category
        ? await Produit.find({
            $and: [{ category: req.query.category }]
          }).populate("user", "-password")
        : req.query.marque
        ? await Publication.find({
            marque: req.query.category
          }).populate("user", "-password")
        : await Produit.find().populate("user", "-password");
  
      if (!publications)
        return res.status(404).send({ msg: "There are no product yet" });
  
      return res.send(publications);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Server error");
    }
  },
  // @desc     get  recent 5 ads
// @access   Public
recentProduit: async (req, res) => {
    try {
      const publications = await Produit.find()
        .limit(4)
        .sort({ date: -1 });
  
      if (!publications)
        return res.status(404).send({ msg: "There are no ads yet" });
  
      return res.send(publications);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Server error");
    }
  },
  getProduitById: async (req, res) => {
    try {
      const publication = await Produit.findById(req.params.id)
        .populate("user", "-password")
        .populate("Comments.user", "-password");
  
      if (!publication)
        return res
          .status(404)
          .send({ msg: "The ad with the given ID was not found." });
  
      return res.send(publication);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Server error");
    }
}
  ,

  // @route    PUT annonces/:id
// @desc     update an ad
// @access   Private

  putProduit:async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() });
      }

      let publication = await Produit.findById(req.params.id);
      if (!publication)
        return res
          .status(404)
          .send({ msg: "The ad with the given ID was not found." });

      if (publication.user.toString() !== req.user._id)
        return res.status(403).send({ msg: "you are not authentification" });
      publication = await Produit.findByIdAndUpdate(
        req.params.id,
        req.body,
        {
          new: true
        }
      );
      publication.populate("user");
      res.send(publication);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Server error");
    }
  },

  // @route    DELETE annonces/:id
// @desc     delete an ad
// @access   Private
  deleteProduit:async (req, res) => {
    try {   
      let publication = await Produit.findById(req.params.id);
      if (!publication)
        return res
          .status(404) 
          .send({ msg: "The ad with the given ID was not found." });
      if (
        publication.user.toString() !== req.user._id &&
        req.user.role !== "Admin"
      )
        return res.status(403).send({ msg: "unauthentification" });
      publication = await Produit.findByIdAndDelete(req.params.id);
      res.send("ad removed");
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Server error");
    }
  },
  



  

}
const express = require("express");
const router = express.Router();
const Product = require("../models/products");
const path = require("path");
const fs = require("fs");

router.get("/seed", async (req, res) => {
  const newProducts = [
    {
      type: "sneakers",
      name: "Jordan",
      description: "Air Jordan.",
      img: { src: "https://cdn.flightclub.com/2600/TEMPLATE/248935/1.jpg" },
      price: 5,
      qty: 99,
    },
    {
      type: "sneakers",
      name: "Jordan Yellow",
      description: "It's just a bag of bones.",
      img: { src: "https://cdn.flightclub.com/1000/TEMPLATE/248963/1.jpg" },
      price: 2,
      qty: 0,
    },
    {
      type: "sneakers",
      name: "Jordan Pink",
      description: "A stack of colorful bins for your beans and bones.",
      img: { src: "https://cdn.flightclub.com/1000/TEMPLATE/251724/1.jpg" },
      price: 7000,
      qty: 1,
    },
    {
      type: "sneakers",
      name: "Jordan",
      description: "Classic Air Jordan.",
      img: { src: "https://cdn.flightclub.com/2600/TEMPLATE/248935/1.jpg" },
      price: 5,
      qty: 99,
    },
    {
      type: "sneakers",
      name: "Jordan White",
      description: "It's just a bag of bones.",
      img: { src: "https://cdn.flightclub.com/1000/TEMPLATE/246509/1.jpg" },
      price: 2,
      qty: 0,
    },
    {
      type: "sneakers",
      name: "Jordan Red",
      description: "A stack of colorful bins for your beans and bones.",
      img: { src: "https://cdn.flightclub.com/1000/TEMPLATE/254938/1.jpg" },
      price: 7000,
      qty: 1,
    },
    {
      type: "caps",
      name: "Jordan",
      description: "Air Jordan.",
      img: {
        src: "https://image.goat.com/375/attachments/product_template_pictures/images/055/487/989/original/744903_00.png.png",
      },
      price: 5,
      qty: 99,
    },
    {
      type: "caps",
      name: "Jordan Yellow",
      description: "It's just a bag of bones.",
      img: {
        src: "https://image.goat.com/375/attachments/product_template_pictures/images/052/329/076/original/751646_00.png.png",
      },
      price: 2,
      qty: 0,
    },
    {
      type: "caps",
      name: "Jordan Pink",
      description: "A stack of colorful bins for your beans and bones.",
      img: {
        src: "https://image.goat.com/375/attachments/product_template_pictures/images/056/731/912/original/790556_00.png.png",
      },
      price: 7000,
      qty: 1,
    },
    {
      type: "caps",
      name: "Jordan",
      description: "Classic Air Jordan.",
      img: {
        src: "https://image.goat.com/375/attachments/product_template_pictures/images/051/826/292/original/747686_00.png.png",
      },
      price: 5,
      qty: 99,
    },
    {
      type: "caps",
      name: "Jordan White",
      description: "It's just a bag of bones.",
      img: {
        src: "https://image.goat.com/375/attachments/product_template_pictures/images/056/025/667/original/783879_00.png.png",
      },
      price: 2,
      qty: 0,
    },
  ];

  try {
    const seedItems = await Product.create(newProducts, (err, result) => {
      
    });
    res.redirect("/products")
  } catch (err) {
    res.send(err.message);
  }
});

router.get("/", (req, res) => {
  try {
    console.log(req.file);
    Product.find({}, (err, allProducts) => {
      const sneakers = allProducts.filter((product) => {
        if (product.type == "sneakers") return true;
        return false;
      });
      const caps = allProducts.filter((product) => {
        if (product.type == "caps") return true;
        return false;
      });
      const others = allProducts.filter((product) => {
        if (product.type == "others") return true;
        return false;
      });
      res.render("index.ejs", {
        sneakers: sneakers,
        caps: caps,
        others: others,
      });
    });
  } catch (err) {
    res.send(err);
  }
});

router.post("/", (req, res) => {
  try {
    const { product_name, description,product_image, price, quantity, type } = req.body;
    console.log(product_image);
    let product = new Product({
      name: product_name,
      description: description,
      price: price,
      qty: quantity,
      type: type,
      img: {
        src: product_image    }});
    product.save().then(() => {
      res.redirect("/products");
    }).catch((err)=>{
      if(err) console.log(err);
    })

    return;
  } catch (err) {
    res.send(err);
  }
});

router.get("/:id", (req, res) => {
  try {
    const id = req.params.id;
    Product.findById(id, (err, foundProduct) => {
      err
        ? res.send(err)
        : res.render("show.ejs", {
            product: foundProduct,
          });
    });
  } catch (err) {
    res.send(err);
  }
});
router.get("/:id/edit", (req, res) => {
  try {
    Product.findById(req.params.id, (err, foundProduct) => {
      console.log(foundProduct);
      err
        ? res.send(err)
        : res.render("edit.ejs", {
            product: foundProduct,
          });
    });
  } catch (err) {
    res.send(err);
  }
});

router.put("/:id", (req, res) => {
  try {
    console.log(req.body);
    Product.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true },
      (err, updatedProduct) => {
        err ? res.send(err) : res.redirect("/products/" + req.params.id);
      }
    );
  } catch (err) {
    res.send(err);
  }
});

router.put("/:id/buy", (req, res) => {
  try {
    Product.findByIdAndUpdate(
      req.params.id,
      { $inc: { qty: -1 } },
      { new: true },
      (err, updatedProduct) => {
        err ? res.send(err) : res.redirect("/products/" + req.params.id);
      }
    );
  } catch (err) {
    res.send(err);
  }
});

router.delete("/:id", (req, res) => {
  try {
    Product.deleteOne({ _id: req.params.id }, (err, result)=>{
      if(!err) {res.redirect("/products")} else{
        res.send(err);
      }
    });
    
  } catch (err) {
    res.send(err);
  }
});

module.exports = router;

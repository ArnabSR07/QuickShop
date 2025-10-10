import searchIcon from "./searchIcon.jpg";
import homePage from "./HomePage.png";

import watch from "./watch.png";
import headset from "./headset.png";
import mouse from "./mouse.png";
import shirt from "./shirt.png";
import watchpro from "./watchpro.png";
import electronics from "./Category-CellPhone.png";
import headphone from "./Category-Headphone.png";
import shopcart from "./Shopping Cart.png";
import customer from "./Customer.png";
import favourite from "./Favorite.png";
import footwear from "./Women Shoe Side View.png";
import clothing from "./V-neck Longsleeve.png";
import camera from "./categoryCamera.png";
import homeDecor from "./Armchair.png";
import gplay from "./gplay.png";
import appstore from "./appstore.png";
import sendicon from "./sendicon.png";
import qrcode from "./qrcode.png";
import headsetHero from "./headsetHero.png";
import shoes from "./shoes.png";
import controller from "./controller.png";
import sneakersmain from "./sneakersmain.png";
import sneakers from "./sneakers.png";
import sneakers1 from "./sneakers1.png";
import sneakers2 from "./sneakers2.png";
import sneakers3 from "./sneakers3.png";
import visa from "./visa.png";
import bKash from "./bKash.png";
import mastercard from "./mastercard.png";
import nagad from "./nagad.png";
import iconDelivery from "./icon-delivery.png"
import iconReturn from "./icon-return.png"
import downArrow from "./Down Arrow.png"
import dropdown from "./dropdown_icon.png"


export const assets = {
  searchIcon,
  homePage,
  shopcart,
  favourite,
  customer,
  watch,
  gplay,
  appstore,
  visa,nagad,mastercard,bKash,
  sendicon,
  qrcode,
  iconDelivery,
  iconReturn,
  dropdown,
  headsetHero,
  downArrow,
  products: [
    {
      id: "aaaa",
      name: "HAVIT HV-G92 Gamepad",
      price: 120,
      oldprice: 160,
      rating: 5,
      image: [headset,headset,headset,headset],
      discount: 40,
      reviewCount:200,
      category:"HeadPhones",
    },

    {
      id: "aaab",
      name: "AK-900 Wired Keyboard",
      price: 960,
      oldprice: 1160,
      rating: 4,
      image: [watchpro,watchpro,watchpro,watchpro],
      discount: 35,
      reviewCount:200,
      category:"Electronics"
    },

    {
      id: "aaac",
      name: "IPS LCD Gaming Monitor",
      price: 370,
      oldprice: 400,
      rating: 5,
      image: [shirt,shirt,shirt,shirt],
      discount: 30,
      reviewCount:200,
      category:"Clothing",
      sizes:['S','M','L','XL']
    },

    {
      id: "aaad",
      name: "S-Series Comfort Chair",
      price: 375,
      oldprice: 400,
      rating: 4,
      image: [mouse,mouse,mouse,mouse],
      reviewCount:200,
      discount: 25,
      category:"Electronics"
    },
    {
      id: "aaae",
      name: "AK-900 Wired Keyboard",
      price: 960,
      oldprice: 1160,
      rating: 4,
      image: [watchpro,watchpro,watchpro,watchpro],
      discount: 35,
      reviewCount:200,
      category:"Electronics"
    },
    {
      id: "aaaf",
      name:"Jr. Zoom Soccer Cleats",
      price:1160,
      image:[shoes,shoes,shoes,shoes], 
      rating:5,
      reviewCount:35,
      category:"Footwear",
      sizes:["5","6","7","8","9"]
    },
    {
      id: "aaag",
      name:"GP11 Shooter USB Gamepad",
      price:660,
      reviewCount:45,
      image:[controller,controller,controller,controller], 
      rating:4,
      category:"Electronics",
      colours:["red","blue"]
    },
    {
      id: "aaah",
      name: "IPS LCD Gaming Monitor",
      price: 370,
      oldprice: 400,
      rating: 5,
      image: [shirt,shirt,shirt,shirt],
      discount: 30,
      reviewCount:200,
      category:"Clothing"
    },
    {
      id:"aaai",
      name:"Sports Sneakers",
      price:1999,
      rating:4,
      image:[sneakersmain,sneakers,sneakers1,sneakers2,sneakers3],
      reviewCount:150,
      category:"Footwear"
    }
  ],
  categories: [
    {
      id: 1,
      image: electronics,
      name:"Electronics"
    },
    {
      id: 2,
      image: footwear,
      name:"Footwear"
    },
    {
      id: 3,
      image: clothing,
      name:"Clothing"
    },
    {
      id: 4,
      image: camera,
      name:"Camera"
    },
    {
      id: 5,
      image: headphone,
      name:"HeadPhones"
    },
    {
      id: 6,
      image: homeDecor,
      name:"Home Decor"
    }
  ],

};

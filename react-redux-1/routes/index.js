const appleBasketRoutes = require("../apis/appleBasket");
const imgRoutes = require("../apis/imgRoutes");
const addPicRoutes = require("../apis/addPicRoutes")

const constructorMethod = (app) => {
    app.use("/apple", appleBasketRoutes);  
    app.use("/addPic", addPicRoutes);  
    app.use("/upload", imgRoutes);
};

module.exports = constructorMethod;
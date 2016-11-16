const appleBasketRoutes = require("../apis/appleBasket");


const constructorMethod = (app) => {
    app.use("/apple", appleBasketRoutes);  
};

module.exports = constructorMethod;
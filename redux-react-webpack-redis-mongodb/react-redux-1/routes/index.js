const appleBasketRoutes = require("../apis/appleBasket");


const constructorMethod = (app) => {
    app.use("/apple", appleBasketRoutes);

    app.get("/", function(req, res) {
        res.sendFile(__dirname + '/index.html')
    })
    
    app.use("*", (req, res) => {
        res.redirect("/");
    })
};

module.exports = constructorMethod;
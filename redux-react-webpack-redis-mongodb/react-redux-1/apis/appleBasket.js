const express = require('express');
const router = express.Router();
const redis = require("redis");
const uuid = require("node-uuid");


router.get("/", (req, res) => {
    res.send('success');
});

router.post("/", (req, res) => {
    console.log('get request');
    console.log(req.body);
    var data = req.body;
    var redisConnection = req
        .app
        .get("redis");
    var messageId = uuid.v4();

    let killswitchTimeoutId = undefined;

    redisConnection.on(`apple-created:${messageId}`, (data, channel) => {
        res.send(data);
        //console.log(res.json(insertedRecipe.recipe));
        redisConnection.off(`apple-created:${messageId}`);
        redisConnection.off(`apple-created-failed:${messageId}`);

        clearTimeout(killswitchTimeoutId);
    });

    redisConnection.on(`apple-created-failed:${messageId}`, (error, channel) => {
        res
            .status(500)
            .json(error);

        redisConnection.off(`apple-created:${messageId}`);
        redisConnection.off(`apple-created-failed:${messageId}`);

        clearTimeout(killswitchTimeoutId);
    });

    killswitchTimeoutId = setTimeout(() => {
        redisConnection.off(`apple-created:${messageId}`);
        redisConnection.off(`apple-creation-failed:${messageId}`);
        res
            .status(500)
            .json({error: "Timeout error"})
    }, 5000);

    redisConnection.emit(`create-apple:${messageId}`, {
        requestId: messageId,
        data: data
    });
});

module.exports = router;
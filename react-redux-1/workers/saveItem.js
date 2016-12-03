const redis = require("redis");
const NRP = require('node-redis-pubsub');
const collection = require('../data/collection');
const dataMethod = require("../data/method");
const config = {
    port: 6379, // Port of your locally running Redis server
    scope: 'createItem' // Use a scope to prevent two NRPs from sharing messages
};

const client = redis.createClient();

const redisConnection = new NRP(config); // This is the NRP client



redisConnection.on('create-item:*', (data, channel) => {

    let messageId = data.requestId;
    let item = data.data;

    let tmp = []
    tmp.push(item);
    //apple-created-failed

    collection().then((col) => {
        return () => {
            return col;
        }
    }).then((col) => {
        return dataMethod.removeAll(data);
    }).then((col) => {
        let datas = tmp.map(data => {
            return dataMethod.addApple(data);
        });
        return Promise.all(datas);
    }).then((data) => {
        return dataMethod.getAllApple();
    }).then((res) => {
        console.log(res);
        redisConnection.emit(`item-created:${messageId}`, {
            requestId: messageId,
            data: res,
        });
    }).catch(error => {
        redisConnection.emit(`item-created-failed:${messageId}`, {
            requestId: messageId
        });
    });
});
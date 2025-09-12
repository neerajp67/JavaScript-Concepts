/**
 * @param {Promise} promise1
 * @param {Promise} promise2
 * @return {Promise}
 */
var addTwoPromises = async function (promise1, promise2) {
    const response = await Promise.all([promise1, promise2]);
    return response[0] + response[1];
};


addTwoPromises(Promise.resolve(2), Promise.resolve(2))
    .then(console.log); // 4

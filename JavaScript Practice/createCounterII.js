/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function (init) {
    const INIT = init;
    let value = INIT;

    return {
        increment: () => {
            return ++value;
        },
        decrement: () => {
            return --value;

        },
        reset: () => {
            return value = INIT;
        }
    }
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */
//Common function for Debounce and Throttle Start
//method to be called based on user action
/**
 * @param searchString
 */
function search(searchString) {
    //add appropreate logic to handle the input

    //logging the serach string for now
    console.log(searchString);
}

//if we call search() normally, it will call search() immediatly and for all the search() calls
// // search('test search');

/** Common function for Debounce and Throttle End */


/** Debounce Start */
//using Debouncing to limit function calls, function will be executed only after a specified idel state

/**
 * @param {*} fn function to be called (search() in our case)
 * @param {*} delay the delay time we want to add before calling a function
 */
function debounce(fn, delay) {
    let timer;
    return (searchString) => {
        clearTimeout(timer); //reset timeout
        timer = setTimeout(() => {
            fn(searchString); // call search() after specified delay
        }, delay);
    }
}

let debounceSearch = debounce(search, 1000); //passing search() to debounce() and a delay of 1s

//now call this function instead of search() to add a delay before executing search 
//in this case only 2nd call will be executed.
debounceSearch('debounceSearch 1')
debounceSearch('debounceSearch 2')

//this will be exicuted after 1.1s, so the search() will be executed
setTimeout(() => {
    debounceSearch('debounceSearch 3')
}, 1100)

/** Debounce End */

/** Throttle Start */
//using Throttling to limit function calls, function will be executed only once within a specified delay

/**
 * @param {*} fn function to be called (search() in our case)
 * @param {*} delay the delay time we want to add for executing a function
 */
function Throttle(fn, delay) {
    let shouldExecute = true;
    return (searchString) => {
        if (shouldExecute) {
            fn(searchString); //call search function (immediately for 1st time)
            shouldExecute = false;
        }
        setTimeout(() => {
            shouldExecute = true; // search function can be called again only afterspecified delay
        }, delay);
    }
}

let throttleSearch = Throttle(search, 1000); //passing search() to debounce() and a delay of 1s

//now call this function instead of search() to add a delay before executing search 
//in this case only 1st call will be executed immediately and 2nd will not be executed
throttleSearch('throttleSearch 1')
throttleSearch('throttleSearch 2')

//this will be exicuted after 1.1s, so the search() will be executed
setTimeout(() => {
    throttleSearch('throttleSearch 3')
}, 1100)

/** Throttle End */


//do comment out the Throttle code to run Debounce and vice versa
function convertToArray(collection) {
    if (Array.isArray(collection) === true) {
        return collection.slice();
    }
    else {
        return Object.values(collection);
    }
}

function myEach(collection, callback) {
    const convertedCollection = convertToArray(collection);
    for (const item of convertedCollection) {
        callback(item);
    }
    return collection;
}

function myMap(collection, callback) {
    const convertedCollection = convertToArray(collection);
    const newArray = [];
    for (const item of convertedCollection) {
        newArray.push(callback(item));
    }
    return newArray;
}

function myReduce(collection, callback, acc) {
    const convertedCollection = convertToArray(collection);
    
}
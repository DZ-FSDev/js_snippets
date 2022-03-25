let getAccuracy = function (net, testData) {
    let hits = 0;
    testData.forEach((datapoint) => {
        const output = net.run(datapoint.input);
        const outputArray = [Math.round(output[0]), Math.round(output[1]), Math.round(output[2])];
        if (outputArray[0] === datapoint.output[0] && outputArray[1] === datapoint.output[1] && outputArray[2] === datapoint.output[2]) {
            hits += 1;
        }
    });
    return hits / testData.length;
}

let shuffle = function (array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    return array;
}


/* bathrooms, bedrooms, sqft */
const samples = [[1,1,500], [2,2,500], [2,3,750], [2,3,650]];

/* */
const labels = [[1,0,0,0], [1,1,0,0], [1,1,1,1], [1,1,1,0]];

const orderedData = samples.map((sample,index) => {
    return {
        input: sample,
        output: labels[index]
    }
});

const DATA = shuffle(orderedData);

const SPLIT = 2;
const trainData = DATA.slice(0, SPLIT);
const testData = DATA.slice(SPLIT + 1);

//create a simple feed forward neural network with backpropagation
const net = new brain.NeuralNetwork({
    activation: 'sigmoid', // activation function
    hiddenLayers: [3],
    iterations: 20000,
    learningRate: 0.5 // global learning rate, useful when training using streams
});

net.train(trainData);

const accuracy = getAccuracy(net, testData);
console.log('accuracy: ', accuracy);
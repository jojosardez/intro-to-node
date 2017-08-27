var maxTime = 1000;

var evenDoubler = function(v, callback) {
    var random = Math.floor((Math.random() * maxTime) + 1);
    setTimeout(function() {
        if (v % 2 == 0) {
            callback(null, v * 2, random);
        }
        else
        {
            callback({ Message: "Odd input" }, 0, random);
        }
    }, random);
}

var handleResults = function(err, results, time) {
    if (err) {
        console.log("ERROR: " + err.Message);
    }
    else {
        console.log("The results are: " + results + " (" + time + "ms)");
    }
}

evenDoubler(2, handleResults);

console.log("-----");
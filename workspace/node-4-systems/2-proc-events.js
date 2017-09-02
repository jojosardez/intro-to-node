process.stdin.resume();
process.stdin.setEncoding("utf-8");

process.stdin.on("data", function(chunk) {
    process.stdout.write("Data! -> " + chunk);
});

process.stdin.on("end", function() {
    process.stderr.write("End!\n");
});

process.on("SIGTERM", function() {
    process.stderr.write("Why are you trying to terminate me?!? :)");
});

console.log("Ndode is running as process #" + process.pid);
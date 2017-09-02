var should = require("should");
var fun = require("./mathfun");

describe("MathFun", function() {
   
    describe("When used syncrhonously", function() {
        it("should double even numbers correctly", function() {
            fun.evenDoublerSync(2).should.equal(4);
        });
        it("should throw on odd numbers", function(done) {
            (function() { fun.evenDoublerSync(3) }).should.throw(/Odd/);
            done();
        });
    });
    
    describe("When used asynchronously", function() {
        it("should double even numbers correctly", function(done) {
            fun.evenDoubler(2, function(err, results) {
                should.not.exists(err);
                results.should.equal(4);
                done();
            })
        });
        it("should throw on odd numbers", function(done) {
            fun.evenDoubler(3, function(err, results) {
                should.exists(err);
                should.not.exists(results);
                done();
            })
        });
    })
});
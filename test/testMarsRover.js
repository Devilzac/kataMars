const assert = require("chai").assert;
const marsRover = require("../app/MarsRover.js");

describe('position x,y and what direction is the mars facing', function(){
    it('mars rover default position', function(){
        let cords = {
            "positionX":2,
            "positionY":4,
        };

        let mars = new marsRover();
            mars.cords = cords;
        let result = mars.actualCords();

        assert.equal(cords.positionX, result.positionX, 'Expected result.positionX to be equal cords.positionX');
        assert.equal(cords.positionY, result.positionY, 'Expected result.positionY to be equal cords.positionY');

    });


    it('mars rover default facing' , function() {
        let direction = "N";
        let mars = new marsRover();
        let turnNorth = mars.direction.North;

        let result = mars.defaultDirection(turnNorth);
        assert.equal(direction, result, 'Expected result.direction to be equal cords.direction');
    });
});

describe('implement commands that move the rover forward/backward (f,b).', function(){
    it('mars rover foward when press "f" positionY', function(){

            let mars = new marsRover();
            let direction = mars.actualCords();

            /*  console.log("direction: ",fn); */

            var result = mars.forward();

            console.log("result: ",result);
            assert.increases(result, direction, 'positionY');
        });

});
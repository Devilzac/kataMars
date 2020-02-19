module.exports = class MarsRover{

     direction = {
          "North":"N",
          "South":"S",
          "East":"E",
          "West":"W"
     };

     cords = {
          
          "positionX":0,
          "positionY":0,
          "direction": this.direction.North,
          "comand": null
     };

     actualCords(){
          return this.cords;
     }

     defaultDirection(directionValue){
          return directionValue;
     }

     forward(){
          let currentCords= this.actualCords();
          if(currentCords.direction== this.direction.North){
               this.cords.positionY++;
          }
          return this.cords;

     }
}
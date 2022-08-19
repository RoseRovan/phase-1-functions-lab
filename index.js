function distanceFromHqInBlocks(pickUpPoint){
    if(pickUpPoint > 42){
        return pickUpPoint - 42;
    }
    else{
        return 42 - pickUpPoint;
    }    
}
// part 2
function distanceFromHqInFeet(pickUpPoint) {
    return distanceFromHqInBlocks(pickUpPoint)* 264;
}
// part 3
function distanceTravelledInFeet(start, destination){
    if (start < destination){
        return (destination-start)*264; // 264 feet per block
    }
    else{
        return (start-destination) *264;
    }
}
// part 4
function calculatesFarePrice(start, destination) {
    let distance = distanceTravelledInFeet(start, destination);
    if (distance <= 400) {
      return 0;
    } else if (distance < 2000) {
      return (distance - 400) * 0.02;
    } else if (distance >= 2000 && distance < 2500) {
      return 25;
    } else if (distance >= 2500) {
      return "cannot travel that far";
    }
  }
  calculatesFarePrice(43, 44);
  calculatesFarePrice(50, 58);
   calculatesFarePrice(34, 24);

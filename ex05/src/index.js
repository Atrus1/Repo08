//
var sum = 0;
function addThree(){
sum = sum + 3;
console.log("addThree: ",sum);
}
console.log(addThree());

function addFive(){
    sum = sum + 5;
    console.log("addFive: ",sum);
}
console.log(addFive());
addThree();
addFive();
//

module.exports = {
addThree,
addFive
};
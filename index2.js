function computeDemeritPoints(speed) {
const speedlimit= 70 ;
const kmPerDemeritPoints= 5;
const maxDemeritPoints= 12;

if (speed <= speedlimit) {
return ;
console.log("ok");

}
const demeritPoints = (speed - speedlimit)/kmPerDemeritPoints
console.log("points:",demeritPoints);

if (demeritPoints>= maxDemeritPoints) {
return `license suspended`
console.log(`license suspended`);
}
}
console.log(computeDemeritPoints(90))
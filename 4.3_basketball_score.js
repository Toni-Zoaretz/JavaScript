function avg(score1, score2, score3) {
  let result = score1 + score2 + score3 / 3;
  return result;
}

const johnsTeam = avg(89, 120, 103);
// console.log(johnsTeam);
const mikeTeam = avg(116, 94, 123);
// console.log(mikeTeam);
const maryTeam = avg(250, 134, 500);
// console.log(maryTeam);

///the winers:///
if (johnsTeam > mikeTeam) {
  console.log("Mike Team is the winner with" + " " + johnsTeam + " " + "score");
}
if (mikeTeam > johnsTeam) {
  console.log("Mike Team is the winner with" + " " + mikeTeam + " " + "score");
}
if (maryTeam > johnsTeam && maryTeam > mikeTeam) {
  console.log("Mary Team is the winner with" + " " + maryTeam + " " + "score");
} else {
  console.log("this is a draw!");
}

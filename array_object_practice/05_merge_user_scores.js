const users = [
  {id:1, name:"A"},
  {id:2, name:"B"}
];
const scores = [
  {userId:1, score:80},
  {userId:2, score:90}
];

const mergedMap = new Map();

for (user of users) {
  mergedMap.set(user.id, user);
}

for (score of scores) {
  const user = mergedMap.get(score.userId);
  user.score = score.score
  mergedMap.set(score.userId, user);
}

console.log(Array.from(mergedMap.values()));
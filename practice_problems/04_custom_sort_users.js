const users = [
  { name: "Bob", score: 90 },
  { name: "Alice", score: 90 },
  { name: "Carl", score: 80 }
];

users.sort((a, b) => {
  if (a.score !== b.score) return b.score - a.score;
  return a.name.localeCompare(b.name);
});

console.log(users);
const users = [
    { id: 1, name: "A", active: true },
    { id: 2, name: "B", active: false },
    { id: 3, name: "C", active: true }
];

const activeUsers = users
    .filter(user => user.active)
    .map(user => user.name);

console.log(activeUsers);
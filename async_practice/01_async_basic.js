function fetchUser(id) {
  return new Promise(resolve => setTimeout(() => resolve({id, name: "User" + id}), 100));
}

// 목표: async 함수로 user 받아서 콘솔 출력
async function getUser() {
    const user = await fetchUser(1);
    console.log(user);
}

getUser();
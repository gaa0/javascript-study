// getUser, getPosts(userId) 등 간단한 비동기 함수 작성
// 목표: API 호출 순서, await로 의존성 처리
function getUser() {
    return new Promise(function (resolve) {
        setTimeout(function(){
            resolve(1);
        }, 500);
    });
}

function getPosts(userId) {
    return new Promise(function (resolve) {
        setTimeout(function(){
            resolve(`${userId}'s post`);
        }, 500);
    });
}

async function getPost() {
    const user = await getUser();
    const post = await getPosts(user);
    console.log(post);
}

getPost();
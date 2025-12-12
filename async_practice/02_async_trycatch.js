function fetchData(shouldFail) {
    return new Promise((resolve, reject) =>
        setTimeout(() => shouldFail ? reject("Error!") : resolve("OK"), 100)
    );
}

// 목표: 에러 발생 시 try/catch로 처리
async function testFetch(shouldFail) {
    try {
        const result = await fetchData(shouldFail);
        console.log(result);
    } catch (err) {
        console.log("Error!", err);
    }
}

testFetch(true);
testFetch(false);
function fetchValue(i) {
  return new Promise(resolve => setTimeout(() => resolve(i * 2), 100));
}

// 목표: 1~5까지 값을 fetchValue로 가져와 배열에 담기
// 1) 순차 처리
async function fetchSequential() {
    const results = [];
    for (let i = 1; i <= 5; i++) {
        const value = await fetchValue(i);
        results.push(value);
    }
    console.log(results);
}
fetchSequential();
// 2) Promise.all 병렬 처리
async function fetchAll() {
    const promises = [];
    for (let i = 1; i <= 5; i++) promises.push(fetchValue(i));
    const values = await Promise.all(promises);
    console.log(values);
}
fetchAll();
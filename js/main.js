'use strict';

{
  const btn = document.getElementById('btn');

  btn.addEventListener('click', () => {
    // const results = ['大吉', '中吉', '凶', '末吉'];
    // const results = ['大吉', '大吉', '大吉', '大吉', '凶'];
    // 確率の操作（記述量が多い）
    // const n = Math.floor(Math.random() * results.length);
    // btn.textContent = results[n];
    // btn.textContent = results[Math.floor(Math.random() * results.length)];
    // 簡略化できる
    const n = Math.random();
    if (n < 0.05) {
      btn.textContent = '大吉'; // 5%
    } else if (n < 0.2) {
      btn.textContent = '中吉'; // 15%
    } else {
      btn.textContent = '凶'; // 80%
    }
  });
}



// 完成
// 'use strict';

// {
//   const btn = document.getElementById('btn');

//   btn.addEventListener('click', () => {

//     const n = Math.random();
//     if (n < 0.05) {
//       btn.textContent = '大吉'; // 5%
//     } else if (n < 0.2) {
//       btn.textContent = '中吉'; // 15%
//     } else {
//       btn.textContent = '凶'; // 80%
//     }
//   });
// }

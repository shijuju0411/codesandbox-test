/**
 * スプレッド構文
 */
//まとめる
// const arr2 = [1, 2, 3, 4, 5];
// const [num1, num2, ...arr3] = arr2;
// console.log(arr3);
//配列のコピーや結合
// const arr4 = [10, 20];
// const arr5 = [30, 40];

// const arr6 = [...arr4];
// console.log(arr6);
// const arr7 = [...arr4, ...arr5];
// console.log(arr7);

// const arr8 = arr4;
// arr8[0] = 100;
// console.log(arr4);

/**
 * mapやfilterを使った処理
 */
// const nameArr = ["shijuju", "shinan", "zhaoyi"];
// for (let index = 0; index < nameArr.length; index++) {
//   console.log(nameArr[index]);
// }

// const nameArr2 = nameArr.map((name) => {
//   return name;
// })
// console.log(nameArr2);
// nameArr.map((name, index) => console.log(`${index + 1}番目は${name}です。`));
// const numArr = [1, 2, 3, 4, 5];
// const newNumArr = numArr.filter((num) => {
//   return num % 2 === 1;
// });
// console.log(newNumArr);
// const newNameArr = nameArr.map((name) => {
//   if(name === "zhaoyi"){
//     return name;
//   }else{
//     return(`${name}さん`);
//   }
// })
// console.log(newNameArr);
/**
 * 三項演算子
 */
//ある条件？条件はtrueの時: 条件はfalseの時
// const var1 = 1 > 0 ? "trueです" : "falseです";
// console.log(var1);
// const num = 1300;
// // console.log(num.toLocaleString());

// const formartedNum =
//   typeof num === "number" ? num.toLocaleString() : "数値を入力してください";
// console.log(formartedNum);

// const checkSum = (num1, num2) => {
//   return num1 + num2 > 100 ? "100を超えています" : "範囲内";
// }
// console.log(checkSum(50,60));

/**
 * 論理演算子の本当の意味を知ろう
 */

//vs code에서 스크립트 실행이 허용이 안된 경우 powershell
//실행되면 오케이
let arr1 = [11,22,33,99,55]     //인덱스 0~4
console.log(arr1)
console.log(typeof arr1)
console.log(arr1[3])
arr1[2]=77
console.log(arr1.sort())
console.log(arr1.reverse())
arr1[6]=44
console.log(arr1)
arr1=[1,5,6,7]; //let 변수 이므로 객체 자체 변경 가능

const arr2=['apple','mango','kiwi','banana','딸기','사과']  //인덱스 0~5
console.log(arr2)
arr2[7]='배'    //기존 객체 변경은 가능
console.log(arr2)
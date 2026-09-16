console.log("Hello js")

// 변수: 값을 저장하는 이름을 가진 공간
//const username = "이유네";
let username = "이유네";


username = "fnffnskssk";

console.log("username",username)

//데이터 타입
const num = 10; //숫자
console.log("🚀 ~ num:", num, "num type", typeof num)

const text = "안녕하세요"
console.log("🚀 ~ text:", text)

const isDarkMode = true;
console.log("🚀 ~ isDarkMode:", isDarkMode)
console.log("🚀 ~ isDarkMode type:", typeof isDarkMode)

const empty = null;
console.log("🚀 ~ empty:", empty)
console.log("🚀 ~ empty type:", typeof empty)

let userage;
console.log("🚀 ~ userage:", userage)

/* 함수 특정 기능을 수행하도록 만든 코드 조각 */
// 함수 정의한다
// function greeting() {
//   //console.log(username+"님, 반갑습니다!")
//   console.log(`${username}님, 반갑습니다!`)
// }

//화살표 함수 변환
const greeting = (studentname,usermbti) => {
  //console.log(username+"님, 반갑습니다!")
  console.log(`${username}님, 반갑습니다!`)
  console.log(`MBTI는 ${usermbti}이시군요`)

}

//함수 호출한다
greeting()

//결과값 반환
const add = (num1, num2) => {
  return num1 + num2
}

const doubleSum = (num) => {
  console.log("🚀 ~ doubleSum ~ doubleSum:", doubleSum)
}

const sum = add(10,20)

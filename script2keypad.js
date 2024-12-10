console.log("스크립트 로드 완료");

const passwordInput = document.getElementById("passwordInput");
const keys = document.querySelectorAll(".key");
const clearButton = document.getElementById("clear");
const submitButton = document.getElementById("submit");
const feedback = document.getElementById("feedback");

let inputPassword = "";

// 키패드 버튼 클릭 시 처리
keys.forEach((key) => {
  key.addEventListener("click", () => {
    console.log("키 클릭됨:", key.getAttribute("data-value"));  // 클릭된 키 값 출력
    inputPassword += key.getAttribute("data-value");
    passwordInput.value = inputPassword;
  });
});

// C 버튼 클릭 시
clearButton.addEventListener("click", () => {
  console.log("C 버튼 클릭됨");
  inputPassword = "";
  passwordInput.value = "";
  feedback.textContent = "";
});

// 제출 버튼 클릭 시
submitButton.addEventListener("click", () => {
  console.log("제출 버튼 클릭됨");
  const correctPassword = "4972"; // 예시 비밀번호

  if (inputPassword === correctPassword) {
    feedback.textContent = "correct password!";
    feedback.style.color = "green";
  } else {
    feedback.textContent = "wrong password.";
    feedback.style.color = "red";
  }
});
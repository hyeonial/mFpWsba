console.log("��ũ��Ʈ �ε� �Ϸ�");

const passwordInput = document.getElementById("passwordInput");
const keys = document.querySelectorAll(".key");
const clearButton = document.getElementById("clear");
const submitButton = document.getElementById("submit");
const feedback = document.getElementById("feedback");

let inputPassword = "";

// Ű�е� ��ư Ŭ�� �� ó��
keys.forEach((key) => {
  key.addEventListener("click", () => {
    console.log("Ű Ŭ����:", key.getAttribute("data-value"));  // Ŭ���� Ű �� ���
    inputPassword += key.getAttribute("data-value");
    passwordInput.value = inputPassword;
  });
});

// C ��ư Ŭ�� ��
clearButton.addEventListener("click", () => {
  console.log("C ��ư Ŭ����");
  inputPassword = "";
  passwordInput.value = "";
  feedback.textContent = "";
});

// ���� ��ư Ŭ�� ��
submitButton.addEventListener("click", () => {
  console.log("���� ��ư Ŭ����");
  const correctPassword = "4972"; // ���� ��й�ȣ

  if (inputPassword === correctPassword) {
    feedback.textContent = "correct password!";
    feedback.style.color = "green";
  } else {
    feedback.textContent = "wrong password.";
    feedback.style.color = "red";
  }
});
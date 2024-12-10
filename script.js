function checkPassword() {
    const password = document.getElementById("password").value;
    const correctPassword = "4792"; // 올바른 pw

    if (password === correctPassword) {
        alert("correct answer. See you next level :D");
        // 다음 페이지로 이동하거나 관리자를 위한 다른 페이지로 이동하는 코드 추가
    } else {
        alert("The wrong password");
    }
}
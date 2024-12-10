function checkPassword() {
    const password = document.getElementById("password").value;
    const correctPassword = "mFpWsba"; // 올바른 암호

    if (password === correctPassword) {
        alert("암호가 맞습니다! 관리자 페이지로 이동합니다.");
        // 다음 페이지로 이동하거나 관리자를 위한 다른 페이지로 이동하는 코드 추가
    } else {
        alert("암호가 틀렸습니다. 다시 시도해 주세요.");
    }
}
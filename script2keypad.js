document.addEventListener('DOMContentLoaded', function () {
    const inputField = document.getElementById('input-field');
    const statusMessage = document.getElementById('status-message');
    const keys = document.querySelectorAll('.key');
    const correctPassword = "4792"; // 설정할 암호 (예시로 "1234"로 설정)

    keys.forEach(key => {
        key.addEventListener('click', function () {
            const keyValue = key.getAttribute('data-key');
            const action = key.getAttribute('data-action');

            if (action === 'clear') {
                inputField.value = '';
                statusMessage.textContent = ''; // 상태 메시지 초기화
                statusMessage.className = ''; // 상태 메시지 스타일 초기화
            } else if (action === 'submit') {
                if (inputField.value === correctPassword) {
                    statusMessage.textContent = 'Correct password!';
                    statusMessage.className = 'correct'; // 맞으면 초록색
                } else {
                    statusMessage.textContent = 'wrong password. Try again';
                    statusMessage.className = 'incorrect'; // 틀리면 빨간색
                }
            } else if (keyValue) {
                inputField.value += keyValue;
            }
        });
    });
});
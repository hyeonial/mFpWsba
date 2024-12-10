document.addEventListener('DOMContentLoaded', function () {
    const inputField = document.getElementById('input-field');
    const keys = document.querySelectorAll('.key');

    keys.forEach(key => {
        key.addEventListener('click', function () {
            const keyValue = key.getAttribute('data-key');
            const action = key.getAttribute('data-action');

            if (action === 'clear') {
                inputField.value = '';
            } else if (action === 'submit') {
                alert('�Էµ� ��: ' + inputField.value);
            } else if (keyValue) {
                inputField.value += keyValue;
            }
        });
    });
});
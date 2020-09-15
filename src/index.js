
{ //1送信ボタンのクリックイベントが起こる。即時関数
    const submit = document.getElementById('submit'); // 送信ボタンの要素を指定する
    submit.addEventListener('click', onSubmit); // 送信ボタンがクリックされるとonSubmitを呼び出す。
}

// 2フォームに入力された値を得る。
const onSubmit = () => {
    let emailInput = document.getElementById('email');
    let passwordInput = document.getElementById('password');
    let emailVal = emailInput.value;
    let passwordVal = passwordInput.value;
}
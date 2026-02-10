function loginFunc() {
    const name = document.querySelector('.name');
    const password = document.querySelector('.password');
    const result = document.querySelector('.result');
    if (name.value && password.value) {
        result.innerHTML = "Loged In !!!";
    } else {
        result.innerHTML = "You missed name or password";
    }
    name.value = "";
    password.value = "";
}
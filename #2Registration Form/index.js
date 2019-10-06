var check = function() {
    if (document.getElementById('password').value == document.getElementById('confirm_password').value) {
        document.getElementById('message').style.color = 'white';
        document.getElementById('message').innerHTML = 'Пароли совпадают';
    } 
    
    else {
        document.getElementById('message').style.color = 'black';
        document.getElementById('message').innerHTML = 'Пароли не совпадают';
    }
}
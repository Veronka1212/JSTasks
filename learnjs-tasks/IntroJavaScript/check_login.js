let nickName = prompt("Enter your name", '');

if (nickName === 'admin') {

    let password = prompt('Enter your password', '');

    if (password === 'adminpass') {
        alert( 'you are logged' );
    } else if (password === '' || password === null) {
        alert( 'no entered passwords' );
    } else {
        alert( 'Error pass!' );
    }

} else if (nickName === '' || nickName === null) {
    alert( 'Отменено' );
} else {
    alert( "Я вас не знаю" );
}
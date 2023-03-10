function formatDate(date) {
    let diff = new Date() - date;
    if (diff < 1000) {
        return 'right now';
    }
    let sec = Math.floor(diff / 1000);

    if (sec < 60) {
        return sec + 'second ego';
    }

    let min = Math.floor(diff / 60000);
    if (min < 60) {
        return min + 'minute ego';
    }

    let formattedDate = date;
    formattedDate = [
        '0' + formattedDate.getDate(),
        '0' + (formattedDate.getMonth() + 1),
        '' + formattedDate.getFullYear(),
        '0' + formattedDate.getHours(),
        '0' + formattedDate.getMinutes()
    ].map(component => component.slice(-2));

    return formattedDate.slice(0, 3).join('.') + ' ' + formattedDate.slice(3).join(':');
}

alert( formatDate(new Date(new Date - 1)) );
alert( formatDate(new Date(new Date - 30 * 1000)) );
alert( formatDate(new Date(new Date - 5 * 60 * 1000)) );
alert( formatDate(new Date(new Date - 86400 * 1000)) );
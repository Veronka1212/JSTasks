function camelize(str) {
    let array = str.split('');
    let index;
    do {
        index = array.findIndex((arg) => arg === '-');
        delete array[index];
        if (index < array.length - 1 && index >= 0) {
            array[index + 1] = array[index + 1].toUpperCase();
        }
    }
    while (index !== -1);
    return array.join('');
}
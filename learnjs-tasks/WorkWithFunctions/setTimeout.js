function printNumbers(from, to) {

    let timer = setInterval(function() {
        if (from <= to) {
            console.log(from++);
        } else {
            clearInterval(timer);
        }
    }, 1000);

}

printNumbers(1, 10);
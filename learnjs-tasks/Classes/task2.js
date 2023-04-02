class ExtendedClock extends Clock{
    constructor( template ){
        super(template);
        this.precision=1000;
    }
    start() {
        this.render();
        this.timer = setInterval(() => this.render(), this.precision);
    }
}

let clock = new ExtendedClock( 'h:m:s');
clock.start();

class FormatError extends SyntaxError {
    constructor(message) {
        super(message);
        this.name = "FormatError";
    }
}

let err = new FormatError("ошибка форматирования");

alert( err.message );
alert( err.name );
alert( err.stack );

alert( err instanceof SyntaxError );
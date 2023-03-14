"use strict";

function work(a, b) {
    console.log(a + b);
}

function spy(func) {
    function wrapper() {
        wrapper.calls.push([...arguments]);
        return func.apply(this, arguments);
    }
    wrapper.calls = [];
    return wrapper;
}

work = spy(work);
work(1, 2);
work(3, 4);

for (let args of work.calls) {
    console.log('call: ' + args.join());
}

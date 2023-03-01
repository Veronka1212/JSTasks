function aclean(arr) {
    let words = new Map();

    for (let word of arr) {
        words.set(
            word.toLowerCase().split("").sort().join(""),
            word
        );
    }

    return Array.from(words.values());
}

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

alert( aclean(arr) ); // "nap,teachers,ear" или "PAN,cheaters,era"
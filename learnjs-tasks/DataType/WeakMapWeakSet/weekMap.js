let messages = [
    {text: "Hello", from: "John"},
    {text: "How goes?", from: "John"},
    {text: "See you soon", from: "Alice"}
];

let readDate = new WeakMap();

readDate.set(messages[0], new Date(2023, 1, 23));

alert(readDate.get(messages[0]));
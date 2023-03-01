let read = new WeakSet();

let messages = [
    {text: "Hello", from: "John"},
    {text: "How goes?", from: "John"},
    {text: "See you soon", from: "Alice"}
];

read.add(messages[0]);
read.add(messages[1]);
read.add(messages[2]);

if (read.has(messages[0]))
    alert('This message is read');

if (read.has(messages[1]))
    alert('This message is read');

if (read.has(messages[2]))
    alert('This message is read');
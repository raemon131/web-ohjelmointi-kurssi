function Palindrom(word) {
    let rWord = "";

    for (let i = word.length - 1; i >= 0; i--) {
        rWord += word[i];
    }

    return word === rWord;
}

let word = prompt("enter word:");
let result = Palindrom(word);

console.log(word);
console.log(result);
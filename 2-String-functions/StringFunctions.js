//2.1
function toMachineName(name, separator = '-') {
    return name
        .trim()
        .split(/ \s*/)
        .join(separator);
}
console.log(toMachineName('  ijjasnd      ksndkasndk   '));

//2.2.1
var numberToMoney = function (n) {
    return Number(n
        .toString()
        .split('.')
        .map((val, i) => i === 1 ? val.slice(0, 2) : val)
        .join('.')).toLocaleString();
};
//2.2.2
var numberToMoney = function (n) {
    return (Math.trunc(n * 100) / 100).toLocaleString()
};

//2.3
function alphabetized(text) {
    return [...text]
        .filter(el => el.match(/[A-Za-z]/))
        .sort((l, r) => l.toLowerCase().localeCompare(r.toLowerCase()))
        .join('');
}

//2.4
function solution(roman) {
    const fromRoman = { 'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000 }
    return (Array.from(roman))
        .reduce((prev, val, i, arr) => prev + (
            fromRoman[val] < fromRoman[arr[i + 1]]
                ? -fromRoman[val]
                : fromRoman[val]
        ), 0)
}

//2.5
function duplicateCount(text) {
    return [...new Set([...text.toLowerCase()]
        .filter((el, i, arr) => arr.slice(i + 1).includes(el)))].length
}

//2.6
const alphabet = {
    'a': '1', 'b': '2', 'c': '3', 'd': '4', 'e': '5',
    'f': '6', 'g': '7', 'h': '8', 'i': '9', 'j': '10',
    'k': '11', 'l': '12', 'm': '13', 'n': '14', 'o': '15',
    'p': '16', 'q': '17', 'r': '18', 's': '19', 't': '20',
    'u': '21', 'v': '22', 'w': '23', 'x': '24', 'y': '25', 'z': '26'
}

function alphabetPosition(text) {
    return text.toLowerCase().replace(/[^a-z]/g, '').replace(/([a-z])/g, (el => alphabet[el].concat(' '))).trim();
}


//2.1
console.log((function toMachineName(name, separator = '-') {
    return name.trim().split(/ \s*/).join(separator);
})('  ijjasnd      ksndkasndk   '));

//2.2
var numberToMoney = function (n) {
    return Number(n
        .toString()
        .split('.')
        .map((val, i) => i === 1 ? val.slice(0, 2) : val)
        .join('.')).toLocaleString();
};

//2.3
function alphabetized(s) {
    return [...s].filter(el => el.match(/[A-Za-z]/)).sort((l, r) => l.toLowerCase().localeCompare(r.toLowerCase())).join('');
}

//2.5


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

//
function duplicateCount(text) {
    return [...new Set([...text.toLowerCase()].filter((el, i, arr) => arr.slice(i + 1).includes(el)))].length
}

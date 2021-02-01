//2.1
console.log((function toMachineName(name, separator = '-') {
    return name.trim().split(/ \s*/).join(separator);
})('  ijjasnd      ksndkasndk   '));



const readLine = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
})

const input = []
readLine.on('line', line => input.push(line))

readLine.on('close', () => {
    console.log(input)
})
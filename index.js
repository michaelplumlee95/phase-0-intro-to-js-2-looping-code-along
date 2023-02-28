
function writeCards(listOfNames, event) {
    const messages = []
    for (let i = 0; i < listOfNames.length; i++) {
        messages.push(`Thank you, ${listOfNames[i]}, for the wonderful ${event} gift!`)
    }
    return messages
}

function countDown(n) {
    while (n >= 0)
    console.log(n--)
}

countDown(10);
function niceLogger() {
    console.log("Hello World!");
    return "Hello World!";
}

function messageRepeater(messageToRepeat) {

    if (Array.isArray(messageToRepeat)){

        return [...messageToRepeat, ...messageToRepeat, ...messageToRepeat];

    } else {
        let localMessageToRepeat = messageToRepeat.toString()
        return localMessageToRepeat + localMessageToRepeat +localMessageToRepeat;
    }

    
}

module.exports = {
    niceLogger,
    messageRepeater
}


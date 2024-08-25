function delayedMessage(message, delay) {
    setTimeout(() => {
        console.log(message);
    }, delay);
}

// Usage example
delayedMessage('Hello, world!', 2000); // Logs 'Hello, world!' after 2 seconds

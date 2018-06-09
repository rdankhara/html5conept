self.addEventListener('message', ev => {
    console.log('worker received message', ev)
    switch(ev.type){
        case 'isEven':
            self.postMessage(ev.payload % 2 === 0);
            break;
        case 'isOdd':
            self.postMessage(ev.payload % 2 !== 0);
            break;
    }
});


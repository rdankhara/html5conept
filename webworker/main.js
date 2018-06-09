this.onload(() => {
    let button = document.querySelector('#isEvenCheckButton');
    button.addEventListener('click', () => {
        initWorker({type: 'isEven', paylod: 2}, new Promise((data) => {
            console.log(data);
        }, (e)=> console.log(e)));
    })
});

const initWorker = (message, promise) =>  {
  let worker = new Worker();
  worker.addEventListener('message', (e)=> {
    console.log('response received from worker');
    promise.resolve(e.data);
    worker.terminate();
  });

  worker.addEventListener('error', ev => {
      promise.reject(ev);
      worker.terminate();
  })

  worker.postMessage(message);
};

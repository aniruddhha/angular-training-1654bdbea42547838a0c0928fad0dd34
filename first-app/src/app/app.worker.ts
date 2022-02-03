/// <reference lib="webworker" />


//ng generate web-worker app

addEventListener('message', ({ data }) => {

  console.log(`Worker : I got the message ${data.dt}`)

  setInterval( () => postMessage({ dt : 'hello' }), 2000 )
});

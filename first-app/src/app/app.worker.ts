/// <reference lib="webworker" />

//ng generate web-worker app

addEventListener('message', ({ data }) => {
  const response = `worker response to ${data}`;
  postMessage(response);
});

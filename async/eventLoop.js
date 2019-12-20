//  asynchronous vs synchronous 
// synchronous : line by line single thread.
/* asynchronous : don't wait for function to finish. it run in the background.
it make a callback functoin in web API after it has finished and functoin return from stack
=> massage queue  and it execute when the stack is empty.
resposibily event loop is to monitor the stack and massage queue.
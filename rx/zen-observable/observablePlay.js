const Observable = require("zen-observable");

let observable1 = new Observable(observer => {
    // Emit a single value after 1 second
    let timer = setTimeout(() => {
        observer.next('hello');
        observer.complete();
    }, 1000);

    // On unsubscription, cancel the timer
    return () => clearTimeout(timer);
});

const subscription = observable1.subscribe(d => console.log("subscribe data: ", d))
console.log('subscription', subscription)
/**
 * Subscription {
  _cleanup: [Function],
  _observer: { next: [Function], error: undefined, complete: undefined },
  _queue: undefined,
  _state: 'ready' }
 */
console.log('subscription._cleanup', subscription._cleanup.toString())
// () => clearTimeout(timer)
console.log('subscription._observer.next', subscription._observer.next.toString())
// d => console.log("subscribe data: ", d)

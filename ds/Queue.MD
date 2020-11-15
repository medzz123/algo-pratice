# Data Structures

## Queue

Container of sorts. Data enter one end, exit from another.

Order Matters!

Adding to queue -> enqueuing

Removing from queue -> dequeuing

**FIFO (FIRST IN FIRST OUT)**

Add to queue -> `array.unshift()`

Remove from queue -> `array.pop()`

```js
class Queue {
  constructor() {
    this.data = [];
  }

  add(record) {
    this.data.unshift(record);
  }

  remove() {
    return this.data.pop();
  }
}

const q = new Queue();

q.add(1);

q.remove();
```

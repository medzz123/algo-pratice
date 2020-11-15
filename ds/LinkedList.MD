# Data Structures

## Linked Lists

Order of nodes in linked list is consistent.

Head Node -> First node of linked list

Tail Node -> Last node (doesn't contain reference to any node)

Data can contain anything

Reference to next node

```ts
const nodeOne = {
  data: 123
};

const nodeTwo = {
  data: 456
};

nodeOne.next = nodeTwo;
```

import uuid from 'uuid';

// ADD_CHILD
export const addChild = (parentId, child) => ({
  type: 'ADD_CHILD',
  parentId,
  child: {
    id: uuid(),
    children: [],
    ...child
  }
});

// REMOVE_CHILD
export const removeChild = id => ({
  type: 'REMOVE_CHILD',
  id
});

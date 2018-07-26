import uuid from 'uuid';

const initialState = {
  id: uuid(),
  children: []
};

export default (prevState = initialState, action) => {
  switch (action.type) {
    case 'ADD_CHILD':
      return mapChildrenToAdd(prevState, action.parentId, action.child);
    case 'REMOVE_CHILD':
      return mapChildrenToRemove(prevState, action.id);
    default:
      return prevState;
  }
};

const mapChildrenToAdd = (node, parentId, addChild) => {
  if (node.id === parentId) {
    return {
      ...node,
      children: [ ...node.children, addChild ]
    };
  } else {
    return {
      ...node,
      children: node.children.map(child => mapChildrenToAdd(child, parentId, addChild))
    };
  }
};

const mapChildrenToRemove = (node, id) => {
  return {
    ...node,
    children: node.children.filter(child => child.id !== id).map(child => mapChildrenToRemove(child, id))
  };
};

import React from 'react';
import { connect } from 'react-redux';
import { addChild, removeChild } from '../actions/tree';

const TreeNode = ({ node, addChild, removeChild, isParent }) => (
  <li style={{ marginBottom: '0.5rem' }}>
    <span style={isParent ? { fontWeight: 'bold' } : {}}>{node.id}</span>
    <button
      type="button"
      onClick={() => addChild(node.id, {})}
    >
      Add Child
    </button>
    {!isParent && (
      <button
        type="button"
        onClick={() => removeChild(node.id)}
      >
        Remove This
      </button>
    )}
    {node.children.length > 0 && (
      <ul style={{ marginTop: '0.5rem' }}>
        {node.children.map(child =>
          <TreeNode key={child.id} node={child} addChild={addChild} removeChild={removeChild} />
        )}
      </ul>
    )}
  </li>
);


const mapStateToProps = (state, ownProps) => ({
  isParent: state.id === ownProps.node.id
});

export default connect(mapStateToProps, { addChild, removeChild })(TreeNode);

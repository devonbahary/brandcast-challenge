import React from 'react';
import { connect } from 'react-redux';
import TreeNode from './TreeNode';

const App = ({ parent }) => (
  <div>
    <h1>Brandcast Coding Exercise</h1>
    <p>Coded by <a href="https://github.com/devonbahary/">Devon Bahary</a></p>
    <details style={{ marginBottom: '0.5rem' }}>
      <summary>Summary</summary>
      <p>An infinite-depth data tree with UI to add/remove members of the tree.</p>
    </details>
    <details style={{ marginBottom: '0.5rem' }}>
      <summary>Objectives</summary>
      <ul>
        <li><b>Part One:</b> Design a data structure to store a single parent family tree
          <ul>
            <li>each family member can have zero or more children</li>
            <li>each family member can have an indefinite number of properties, e.g. name, gender, favorite color, etc.</li>
            <li>there should not be a limit on the depth of the family tree</li>
            <li>this part of the exercise should be completed in full</li>
          </ul>
        </li>
        <li><b>Part Two:</b>
          <ul>
            <li>Render the family tree in the browser</li>
            <li>you will not be evaluated based on visual design or style</li>
          </ul>
        </li>
        <li><b>Part Three:</b>
          <ul>
            <li>Implement UI to add and remove members of the tree</li>
          </ul>
        </li>
      </ul>
    </details>

    <hr />

    <h1>Infinite-Depth Data Tree</h1>
    <TreeNode node={parent} />

    <hr />

    <p>Coding Challenge Time Limit: <b>2 hours</b></p>
    <p>Coding Challenge Completion Time: <b>1:40:54</b></p>
    Visit the <a href="https://github.com/devonbahary/brandcast-challenge">documentation!</a>
  </div>
);

const mapStateToProps = state => ({
  parent: state
});

export default connect(mapStateToProps)(App);

# [Brandcast Coding Exercise](https://brandcast-challenge.herokuapp.com/)

## The Challenge
> Take no more than 2 hours to complete the exercise. We are most interested in your approach and the reasons behind your decisions, as opposed to a fully working solution. As such, we would like at least partial solutions to all 3 parts of the exercise, so plan your time accordingly.
Tech Stack:
We use React at Brandcast for the UI and would prefer a React-based solution. Create React App is by far the easiest place to start.

> **Part One:**
> -	Design a data structure to store a single parent family tree
>   -	each family member can have zero or more children
>   - each family member can have an indefinite number of properties, e.g. name, gender, favorite color, etc.
>   -	there should not be a limit on the depth of the family tree
>  	- this part of the exercise should be completed in full

> **Part Two:**
> - Render the family tree in the browser
>  - you will not be evaluated based on visual design or style

> **Part Three:**
>  - Implement UI to add and remove members of the tree

## To Run
1. Clone the project
2. From the terminal:
  - `npm install`
  - `npm run dev-server`
3. Go to http://localhost:8080/
4. Or, visit the project running [live](https://brandcast-challenge.herokuapp.com/)

## The Process
So I immediately went to work on creating the data structure. I knew I'd have to be able to generate actions that could identify which parent to produce a child for, and I knew I'd have to iterate through the tree to find that particular parent.

After a few failed attempts at trying to `map` through a parent node `children` property in my reducer, I realized I'd need recursion to solve this challenge and implemented `mapChildrenToAdd` and `mapChildrenToRemove`.

These functions take in a node in the tree and iterate through its children, and because each node is structurally identical, the functions don't need to count their place or trace their steps through the tree: they just follow the trail of children.

## Developing the UI
Instead of using `create-react-app`, I chose to use a [React-Redux starting template](https://github.com/devonbahary/react-redux-starter-template) I built from scratch to avoid extraneous libraries and to work in an environment that I've become comfortable using as a launch-off point.

From there, I went to work making my `<TreeNode>` component. This, too, would call for recursion, because I'd render `<TreeNode node={parent} />` from the main `<App>` component once, and from within `<TreeNode>`, I'd render `<TreeNode>` for each child in the node, mapping over the `parent` node's `children`.

Two buttons would fire off `addChild` and `removeChild` actions, making use of each node's `id` property through the use of the `uuid` library.

I didn't give myself time to create an interface to add arbitrary properties to each child, but you'll find that if you dispatch an action like the following...

```javascript
const child = {
  favoriteColor: 'red',
  favoriteNumber: 4
};

...

dispatch(addChild(parentId, child));
```

...the newly created node will contain those arbitrary properties:

```javascript
// node
{
  id: // ...,
  children: [],
  favoriteColor: 'red',
  favoriteNumber: 4
}
```

However, in the actual application, `addChild` is called with an empty object `{}`:

**src/components/TreeNode.js**, line 10
```javascript
onClick={() => addChild(node.id, {})}
```

## Completion Time
![1:40:54](/assets/CompletionTime.png)

The time limit for the coding exercise was 2 hours, and I completed everything up to this line in the README.md in **1:40:54**.

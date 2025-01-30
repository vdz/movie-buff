# A mock movie ticketing app

## The purpose of this document
This is a simple instruction letter to a) explain how to run theis project and b) to explain some of my decisions and thinking.

## Setup
1. Clone the repo
2. Run `npm install`
3. Run `npm run dev`


## Design Approach
While the instruction that were provided were great, still some motivational points for an app like these are obsccure and decisions should be made. So...

I had approched this pfrom a perspective of a rich client app that will grow and evolve. So I would like to have a) high **maintainability** and b) high **performance**.

### Maintainability
By using Redux with Listener middleware (RTK) in a specific way I'd presented here you may (and should) keep all of the other pieces very dumb and declarative: 

* Components will have no business logic and no internal state (except some edge/atomic dependencies)
* Reducer will contain **no** business logic
* Actions declarative and very simple

Business Logic is handled only by listeners, allowing managing the app by means of simple messages (Actions).

This way App can grow in complexity in terms of features, but stay at the same level of complexity code-wise.

Disclamer: I know that simpler solution are plenty with simpler state management tools like Zustand or Context API or ever Signals.js. However I chose this architecture to showcase it to you.

### Global state
Global state management is better for rapid changes and additionas of features in the app. 

### Reusability
My components work will almost no outside props, they get all from global state, this is because my focus here is on the App at large. However this will not be a problem for reuse, on the contrary: same vars that are connected to the state should be rewired for a different project, otherwise used freely in the same app.

### Styling
It is tempting to use Tailwind CSS for styling and the amazingly convenient shadcn/ui, however I detest how it bloats the JSX, and it is not good maintainability practice. Also it might encorage frontend devs to forget CSS, that is super poverful — So I've used `styled-components` and wrote the CSS myself, and used Ant Design components.

## Going over the code
Just start the the very top `src` folder. Take in the folder structure, then find there 2 files:

* `main.tsx` - this is the entry point of the app
* `router.tsx` - you'll see there top level components

And just go down which ever path you'll like from the router.

### Folder structure
 — `components` - React components
 — `store` - state management for data entities like titles, users, etc.
 — `layouts` - for "pages" (React components)
 — `lib` - for utility functions
 — `mocks` - for mock data
 — `styles` - for default CSS

## Remarks
This was a large-ish task, so I cut corners trying to save time. No tests for example. I left comments in the code to explain some of the decisions.

Also some of the code that is repeated handled in a non-consistent way simply because I wanted to show different possible approaches.

This code wasn't written by AI, but I have worked with AI a lot to help me with the mockes, and other relevant queries.

### References
* Design doc I'd used [/docs/Movie Buff design.pdf](<docs/Movie Buff design.pdf>)

---

Thank you for the opportunity to get to know you through this project!
🤩

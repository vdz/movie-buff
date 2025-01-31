# A mock movie ticketing app

## The purpose of this document
This is a simple instruction letter to a) explain how to run theis project and b) to explain some of my decisions and thinking.

## Setup
1. Clone the repo
2. Run `npm install`
3. Run `npm run dev`

## Going over the code
Just start the the very top `src` folder. Take in the folder structure, then find there 2 files:

* `main.tsx` - this is the entry point of the app
* `router.tsx` - you'll see there top level components

And just go down which ever path you'll like from the router.

(In the app to see that your bookings change availability, just go back to "Film" in booking summary page, you'll see. Otherwise it's not persistent of course (without server based API persistency))

### Folder structure
 — `components` - React components

 — `store` - state management for data entities like titles, users, etc.

 — `layouts` - for "pages" (React components)

 — `lib` - for utility functions

 — `mocks` - for mock data

 — `styles` - for default CSS


## Design Approach
While the instruction that were provided were great, still some motivational points for an app like these are obsccure and decisions should be made. So...

I had approched this from a perspective of a rich client app that will grow and evolve. So I would like to have a) high **maintainability** and b) high **performance**.

### Maintainability
By using Redux with Listener middleware (RTK) in a specific way I'd presented here you may (and should) keep all of the other pieces very dumb and declarative: 

* Components will have no business logic and no internal state (except some edge/atomic dependencies)
* Reducer will contain **no** business logic
* Actions declarative and very simple

Business Logic is handled only by listeners, allowing managing the app by means of simple messages (Actions).

This way App can grow in complexity in terms of features, but stay at the same level of complexity code-wise.

Disclamer: I know that simpler solution are plenty with simpler state management tools like Zustand or Context API or ever Signals.js. However I chose this architecture to showcase it to you.

### Performance
Some notes on performance:
I assumed some data structure that a backend will provide will not be 100% compatible to the frontend, so I create several data structure (mappings) to allow O(1) access to the data, suitable for client use.

Also memoization of functions in React is assumed as if I'm using React 19 Compiler.

Also all of the state access by the components is done through Reselect selectors, which are being cached.

### Global state
IMO global state management allows a holistic view of the app, and is better for rapid changes and additions of features in the app. This way everything can affect everything without underming existing dependencies (at least in the architecture I've presented here).

### Reusability
My components work with almost no props (Drill, baby drill not!). They get all from global state, this is because my focus here is on the App scope — components are not independent, but are tied to the specific App. However, this will not be a problem for reusability. On the contrary: just like you'd use Shadcn/UI components, I expect you to copy the component you'd like to reuse from project to project, and rewire the selectors to the new project (if needed). There're great benefits for maintainability in this approach.

### Styling
It is tempting to use Tailwind CSS for (fast) styling and the amazingly convenient shadcn/ui, **however** I detest how it bloats the JSX, and it is not good maintenance practice. Also it might encorage frontend devs to forget CSS, that is super powerful — So I've used `styled-components` as a great semantic wrapper for the markup in my React components. I wrote the CSS myself in addition to some Ant Design components (as suggested in the instructions).

## Final remarks
This was a large-ish task, so I cut corners trying to save time. No tests for example. No site design — only the bare minimum. Etc. I left comments in the code to explain some of the decisions I'd made. 

Also some of the code that is repeated handled in a non-consistent way simply because I wanted to show different possible approaches (mentioned in the comments).

This code wasn't written by AI, but I have worked with AI to help me with the mocks, and other relevant queries.

### References
* Design doc I'd used [/docs/Movie Buff design.pdf](<docs/Movie Buff design.pdf>)

---

Thank you for the opportunity to get to know you through this project!
🤩

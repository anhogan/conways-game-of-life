# ***Conway's Game of Life***
### **React Implementation**

The universe of the Game of Life consists of a two-dimensional grid containing square cells with one of two possible states: live or dead. Each cell has eight neighbors horizontally, vertically, and diagonally. During the animation, cell transitions occur based on the following rules:

* Any cell with two or three live neighbors survives
* Any dead cell with three live neighbors becomes a live cell
* Any live cell with less than two live neighbors, or more than three live neighbors, dies

Built using React with a CSS Gradient for the grid

---
### **Build Process**

At it's core, the Game of Life examines each cell in a two-dimensional grid and calculates the state for each neighboring cell. In code, a 2D array created for the grid container and its corresponding cells is an efficient rendering method. For this implementaiton, the grid is built on a predefined container and cells are created as background images using a specified cell size (in pixels). To determine the number of rows, and columns, for the grid, the following calculations were used:

`rows = gridHeight / cellSize`

`columns = gridWidth / cellSize`

Cell positioning is determined by looping through the `cellGrid` array (consisting of nested sub-arrays with x, y coordinate values) and setting CSS values for `left`, `top`, `width`, and `height` based on dimensions for each cell size and the coordinates passed down as x and y values. 1 is added to the `left` and `top` values to account for the 1px border on each cell. In addition, 1 is subtracted from the overall width and height to round out the correct placement in compliance with the border standards.

After building the grid, cell state toggling comes from getting the window location of the click and calculating the offset to the corresponding cell. If a cell within the grid is clicked, state is toggled between live and dead with a visual color change reflecting the toggling of the 2D grid array at the [row][column] pairing. 

Users can create their own cell configurations then use the action buttons to manage game play. `Start` toggles game running state to true and creates an interval based on the current state's interval value, which is stored as an `intervalTimeout` variable, and invokes the `runGame` method. During animation, an empty grid is rendered initially to store the next state configuration. Two nested for loops call the `calculateNeighborState` method by passing in the grid at its current state, along with the current x, y coordinates. `calculateNeighborState` goes through the given cell and all it's potential neighbor options, returning the number of live neightbor cells. If the current cell is live and has 2, or 3, live neighbors, it remains alive. Otherwise it dies. Alternatively, if the current cell is dead and has 3 live neighbors, it becomes alive. This newGrid of live vs. dead cells is set the grid state, `renderCells` is called to put the cells in their corresponding states in accordance with the grid state, and the generation is advanced by 1.

Clicking `Stop` turns the running state to false and clears the `intervalTimeout` interval. The `Clear` button renders an empty grid configuration, turns all cell states to dead, and renders the cell placements for the grid. Selecting the `Random` button will create a random assortment of live cells on the grid by using a `Math.random()` call.

Users can see a generation render one step at a time with the `Next Generation` button. This isn't tied to the `intervalTimeout` and doesn't update game state to running to allow for all other user functions that are tied to a false running state to work (toggle cell state, clear the grid, and generate a random configuration).

---
### **File Structure**
`App.js`

Contains `GameBoard` import

`components` Folder

Contains the following files:
* `BoardControls.js`

  Contains user action buttons for Start, Stop, Clear, and Random
* `Cell.js`

  Contains structured div for each cell on the grid
* `GameBoard.js`

  Contains the header text, rules button, and the `Grid` component import. Rules button toggles a modal with game rules for participants
* `Grid.js`

  Contains the grid div that renders a `Cell` component for each item in the `cellGrid` array. Has imports for `InputBoxes` that control cell size and animation speed. In addition, it has a `BoardControls` import for the user action buttons
* `InputBoxes.js`

  Contains input boxes for cell size and animation speed
* `Rules.js`

  Modal layout containing the rules for users to interact with the game
* `Styles.js`

  Styling file using `styled-components` to export the various element styles

---
### Status
The app has been fully developed to simulate Conway's Game of Life. Users can interact with the grid by toggling cell state on / off and starting the simulation.

Users can further personalize the experience by changing the grid size, generating a random start state, or by stepping through cell generations one at a time.

---

### Known Issues
All known issues, or currently in progress features, can be found under the issues tab

---

### Work on this Repo
Questions, comments, or concerns can be submitted as an issue on this repository. As an open-source project, all developers are encouraged to work on active issues, or implement new features, by pushing to a separate feature branch. All commits to master must be approved prior to merging.

To work on this repository, clone it and run `yarn install`

Start the app by running `yarn start`
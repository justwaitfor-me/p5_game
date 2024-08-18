# Interactive Canvas

## Overview
> This is an interactive canvas project that responds to mouse presses and releases. The canvas displays a circle that grows and shrinks based on the duration of the mouse press. When the mouse is pressed, a timer starts, and when the timer reaches 6 seconds, the circle stops growing. If the mouse is released before the timer reaches 6 seconds, the circle resets.

## Features
> Interactive circle that grows and shrinks based on mouse press duration
Timer that starts when the mouse is pressed and stops when the timer reaches 6 seconds
Level indicator and message displayed when the timer reaches 6 seconds
Circle resets when the mouse is released before the timer reaches 6 seconds

## Usage
### Setup
Run the setup() function to initialize the canvas and its parent element.
The setup() function sets up the canvas and retrieves the saved level from a cookie.

### Drawing
Run the draw() function to draw the canvas and update its state based on the mouse press and release events.
The draw() function updates the circle's size based on the mouse press duration and displays the level indicator and message.

### Mouse Events
The mousePressed() function handles the mouse press event and starts the timer.
The mouseReleased() function handles the mouse release event and resets the timer and circle.

## Technical Details
> The project uses JavaScript and the p5.js library for creating the interactive canvas.
The project uses cookies to save the level and retrieve it when the page is loaded.

## License
> This project is licensed under the MIT License. See the LICENSE file for details.

## Contributing
> Contributions are welcome! If you'd like to contribute to this project, please fork the repository and submit a pull request.

### Issues
> If you encounter any issues with this project, please file an issue in the issue tracker.
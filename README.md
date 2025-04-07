# An Attempt at a Game
Hi. I don't know what this is yet. This is mostly just a thing for me to play around at night before bed.

So far I have:

## Changelog

### Update: 20250406
* Enhanced Player component with emoji-based sprite system
* Added dynamic emoji changes for different interactions (items, enemies, NPCs, doors)
* Implemented smooth movement and interaction animations
* Removed rotation-based direction system for simpler, cleaner movement
* Added interaction indicator with bounce animation
* Optimized state updates using React 18's automatic batching
* Improved component documentation with JSDoc comments

### Update: 20250405
* Upgraded to React 18 and implemented concurrent rendering features
* Modularized map elements (Tree, Rock, Crabgrass, Passage) into separate components
* Added proper SCSS files for each map element component
* Updated Map component to use new modular components
* Fixed React 18 deprecation warning by implementing createRoot API
* Added Log window to keep track of status updates
* Added localStorage persistence for player position, current map, and game log
* Created useLocalStorage custom hook for state management
* Added timestamp formatting utility for log entries

### Update: 20250404
* Added alert types (info, success, warning, error) with different colors
* Updated passage alerts to use appropriate types (warning for holes, success for stairs)
* Fixed alert remounting issues by optimizing state updates
* Abstracted position update logic into a utility function
* Improved alert component to handle different types and prevent unnecessary re-renders

### Update: 20200630
* A player that moves using the arrow keys (and moves according to CSS Grid)
* A rudimentary map structure that allows for different kinds of maps
* Two very plain maps (Green Hill and Underhill)
* Obstacles that halt the player's movements
* "Passages" that allow the player to switch maps
* An info box that displays the player's position in the grid, the name of the map, and a half-baked alert system for when actions happen

### For Next Time
* Update the Underhill map
* Update "Hole" and "Stairs"

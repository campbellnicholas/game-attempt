# An Attempt at a Game
Hi. I don't know what this is yet. This is mostly just a thing for me to play around at night before bed.

So far I have:

## Changelog

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

Crystal Collector Game Pseudocode

1. Computer generates random number.
2. Computer generated number displays on screen as soon as game starts.
3. Each crystal generates a random value.
    * Each value is hidden until user clicks the crystal
4. Everytime a user clicks a crystal, the value of clicked crystal gets added to the current score.
5. User wins if current number matches computer number.
    * Increase win and restart game
6. User loses if current number exceeds computer number.
    * Increase losses and restart game
7. When game restarts:
    * App generates a new random number
    * App generates new values for each crystal
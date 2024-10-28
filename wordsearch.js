// Pair Programming exercise with @AbdullahZia
// Unable to collaboratively work on project due to paired partner personal issues not related to LHL course.
// Completed code review/de-bugging solo.
// Initial code was missing a false return if the word wasn't found and code did not do a vertical search of the matrix.
// Implemented code to address issue and confirmed npm testing passed, including testing vertical search.
// Implemented added additional input validation checks and assert testing. confirmed testing passed
// Attempted stretch goal to search backwards by reversing the word
// Implemented reverse words in testing both horizontal and vertical
// Need to Implement diagonal searching (forwards and backwards)
// No need to Implement boundary protection at this time as the search is contained within a row or column.

const wordSearch = (letters, word) => {
  // Validate inputs
  if (
    !Array.isArray(letters) || // check if letters is an array
    letters.length === 0 || // check if letters is empty
    typeof word !== "string" || // check if word is a string
    word.length === 0 // check if word is empty
  )
    return false; // return false if any of above are true

  // Verify that each row in the matrix is an array
  for (let row of letters) {
    if (!Array.isArray(row)) return false;
  }

  // Reverse the search word. This will allow finding the word "backwards"
  const reverseWord = word.split('').reverse().join('');

  // Horizontal search
  const horizontalJoin = letters.map((ls) => ls.join(""));

  for (l of horizontalJoin) {
    if (l.includes(word) || l.includes(reverseWord)) return true;
  }

  // Vertical search values
  const numCols = letters[0].length;
  const numRows = letters.length;
  const verticalJoin = [];

  // Transpose table into a single string of characters.
  for (let col = 0; col < numCols; col++) {
    let verticalWord = "";
    for (let row = 0; row < numRows; row++) {
      verticalWord += letters[row][col];
    }
    verticalJoin.push(verticalWord);
  }

  // Repeat horizontal search strategy for "vertical" search
  for (l of verticalJoin) {
    if (l.includes(word) || l.includes(reverseWord)) return true;
  }

  // Return false if the word is not found
  return false;
};

module.exports = wordSearch;

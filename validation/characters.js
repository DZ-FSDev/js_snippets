/**
 * Tests whether a given character is a letter.
 * 
 * @param {String} str A character to be tested.
 * @returns True if character is a letter, false otherwise.
 * @author DZ-FSDev
 */
function isLetter(str) {
    return str.length === 1 && str.match(/[a-z]/i);
}
/* function gets number as input and returns a triangle out of asteriks
 e.g n = 4
    *
   ***
  *****
 *******
 */

 /*
 e.g n = 4
    *	line 1: 1 asteriks, 3 spaces; (1 + 2 * (line - 1)) asteriks, (n - line) spaces
   ***	line 2: 3 asteriks, 2 spaces
  ***** line 3: 5 asteriks, 1 space
 ******* line 4: 7 asteriks, 0 space
 */

const makeTriangle = function(num) {
  let asteriks = '*';
  const logLine = function(line) {
    if (line === num + 1) {
    	return;
    }
    let spaces = '';
    for (let i = 0; i < num - line; i ++) {
    	spaces += ' ';
    }
    console.log(spaces, asteriks);
    asteriks += '**';
    logLine(line + 1);
  }
  logLine(1);
}

makeTriangle(4);
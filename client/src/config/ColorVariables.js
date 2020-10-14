/* Export the various global colours (as string).
conditionally based on darkTheme on or off. */

let isDarkThemeOn = true; // FIXME: replace with redux store lookup.

// MaterialUI colors for input (text) field
// Light theme __L
const hover_color__L = 'black'; // (prev. was BDBDBD light grey)
const border_color__L = '#BDBDBD';
const click_color__L = '#3F51B5'; // blue

// Dark theme colors __D
const hover_color__D = 'white';
const border_color__D = '#BDBDBD';
const click_color__D = '#90CAF9'; // blue 200

export const hover_color = isDarkThemeOn ? hover_color__D : hover_color__L;
export const border_color = isDarkThemeOn ? border_color__D : border_color__L;
export const click_color = isDarkThemeOn ? click_color__D : click_color__L;

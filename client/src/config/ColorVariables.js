// Function to return a requested component-color for a given color-theme (light or dark)

// MaterialUI colors for input (text) field
// Light theme __L
const hover_color__L = 'black';
const border_color__L = '#BDBDBD';
const click_color__L = '#3F51B5'; // blue
const primary_color__L = '#673AB8';

// Dark theme colors __D
const hover_color__D = 'white';
const border_color__D = '#BDBDBD';
const click_color__D = '#90CAF9'; // blue 200
const primary_color__D = '#bc86fc';

export const getColor = (compName, isLightThemeOn) => {
  if (compName === 'hover_color')
    return isLightThemeOn ? hover_color__L : hover_color__D;
  if (compName === 'border_color')
    return isLightThemeOn ? border_color__L : border_color__D;
  if (compName === 'click_color')
    return isLightThemeOn ? click_color__L : click_color__D;
  if (compName === 'primary_color')
    return isLightThemeOn ? primary_color__L : primary_color__D;
};

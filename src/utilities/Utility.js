import invert from "invert-color";

export const degrees_to_radians = (degrees) => degrees * (Math.PI / 180);

export const randomColor = () => {
  const color = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  const invertedColor = invert(color);
  return {
    backgroundColor: color,
    foregroundColor: invertedColor,
  };
};

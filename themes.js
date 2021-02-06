let stylesheet = document.querySelector("link");

const blueTheme = () => {
  const blue = (stylesheet.href = "./themes/blueTheme.css");
  if (stylesheet == !blue) {
    stylesheet.href = blue;
  }
};

const darkTheme = () => {
  const dark = (stylesheet.href = "./themes/darkTheme.css");
  if (stylesheet == !dark) {
    stylesheet.href = dark;
  }
};

const purpleTheme = () => {
  const purple = (stylesheet.href = "./themes/purpleTheme.css");
  if (stylesheet == !purple) {
    stylesheet.href = purple;
  }
};

const defaultTheme = () => {
  const defaul = (stylesheet.href = "./styles.css");
  if (stylesheet == !defaul) {
    stylesheet.href = defaul;
  }
};

function col(color) {
  switch (color) {
    case "yellow":
    case "pink":
    case "orange":
      return "light color";
    case "blue":
    case "purple":
    case "brown":
      return "dark color";
    default:
      return "Unkown color";
  }
}

console.log(col("brown"));

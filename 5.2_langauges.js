function lan(language) {
  switch (language) {
    case "mandarin":
      return "MOST number of native speakers!";
      break;
    case "Spanish":
      return "2nd place in a number of native speakers";
      break;
    case "English":
      return "3rd place";
      break;
    case "Hindi":
      return "Number 4";
      break;
    case "Arabic":
      return "5th most spoken language";
      break;
    default:
      return "Not in the top 5";
  }
}

console.log(lan("English"));

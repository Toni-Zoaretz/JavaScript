function countryToLiveIn(language, isIsland, population, country) {
  if (language === "english" && isIsland === false && population <= 50) {
    return `you should live in ${country}`;
  } else {
    return `${country} is not meet your criteria`;
  }
}

console.log(countryToLiveIn("english", false, 48, "Finland"));

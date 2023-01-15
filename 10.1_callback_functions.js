function isString(str, answer) {
  if (typeof str === "string") {
    return answer(str);
  } else {
    return "this is not a string";
  }
}

function answer(str) {
  return str;
}

console.log(isString(10, answer));

function firstWordUpperCase(str, capital) {
  return capital(str).toUpperCas();
}

function capital(str) {
  return str;
}

console.log(firstWordUpperCase("toni", capital));

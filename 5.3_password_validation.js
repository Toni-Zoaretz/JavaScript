function pass(password) {
  if (password.length >= 7) {
    return "Strong";
  } else if (password.length < 7) {
    return "Weak";
  }
}

///////////////////////////////
function passternorey(password) {
  password.length >= 7 ? "String" : "Week";
}

//////////////////////////////
function passOpertor(password) {
  if (password.length > 7 && password.length === 7) {
    return "String";
  } else if (password.length < 7) {
    return "Weak";
  }
}

///////////////////////////
function pass4(password) {
  if (password.length >= 7 && password <= "A" && password <= "Z") {
    return "Very Strong";
  } else if (password.length >= 7) {
    return "Strong";
  } else if (password.length < 7) {
    return "Weak";
  }
}

// (guess >= "A" && guess <= "Z"))
console.log(pass4("12345744"));

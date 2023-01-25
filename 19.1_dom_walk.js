const newLi = document.querySelector(".start-here");
newLi.textContent = "mail title";

// 2. Add another subtitle with the text “subtitle 4”
// 3. Delete the last <li> element from the list.
// 4. Change the <title> element text to “Master Of The Dom”.
// 5. Change the text of the <p> element ot something else of
// your

const add = document.querySelector(".first-ul");
const li = (document.createElement("li").innerHTML = "sub btitle 4");
add.append(li);

const del = document.querySelector("ul");
del.lastElementChild.remove();

const title = document.querySelector("title");
title.innerHTML = "Master Of The Dom!";

const p = document.querySelector("p");
p.innerText = "lorem lorem";

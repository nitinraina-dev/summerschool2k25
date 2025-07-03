const el = document.getElementById('demo');
console.log(el.innerText)
console.log(el.textContent)
console.log(el.innerHTML)

el.innerHTML="changed html"


const notes= document.getElementsByClassName("note");

let headings = document.getElementsByTagName("h2");
console.log(notes)

let links= document.getElementsByTagName("a")

let aInsideSpan= document.querySelector(".intro span a")

aInsideSpan.classList.add("highlight")
console.log(aInsideSpan)

let aInsideSpans= document.querySelectorAll(".intro span a")


console.log(aInsideSpans)


let thirdA= document.querySelector('a:nth-of-type(3)');
// console.log(thirdA)
// thirdA.classList.toggle("highlight");

if (thirdA.classList.contains("highlight")) {
  console.log("Already highlighted!");
}


let listItem=document.querySelector('li');
listItem.style.cssText="color:green"


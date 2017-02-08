console.log("BEGIN TESTS");
// test 1
if ( generateElement("p", {class: "test_paragraph"}).classList.contains("test_paragraph") ) {
  console.log("  1 OK")
}
else {
  console.log("failed - test 1")
}
// test 2
let testedElement = generateElement("div", {class: "test_div test_div--big"})
if ( testedElement.classList.contains("test_div") ) {
  console.log("  2 OK")
}
else {
  console.log("failed - test 2")
}
// test 3
testedElement = generateElement("div", {class: "test_div test_div--big"})
if ( testedElement.classList.contains("test_div") && testedElement.classList.contains("test_div--big") ) {
  console.log("  3 OK")
}
else {
  console.log("failed - test 3")
}
// test 4
testedElement = generateElement("div", {class: "test_div"})
if ( testedElement.classList.contains("lol_div") ) {
  console.log("failed - test 4")
}
else {
  console.log("  4 OK")
}
// test 5
testedElement = generateElement("div")
if ( testedElement.classList.length > 0 ) {
  console.log("failed - test 5")
}
else {
  console.log("  5 OK")
}
// test 6
testedElement = generateElement("div", {id:"container", class: "main"})
if ( testedElement.classList.contains("main") ) {
  console.log("  6 OK")
}
else {
  console.log("failed - test 6")
}
// test 7
testedElement = generateElement("div", {id:"container", class: "main"})
if ( testedElement.id == "container" ) {
  console.log("  7 OK")
}
else {
  console.log("failed - test 7")
}
// test 8
testedElement = generateElement("section", {id:"container", class: "main"})
if ( testedElement.tagName == "SECTION" ) {
  console.log("  8 OK")
}
else {
  console.log("failed - test 8 -", testedElement.tagName)
}

// TEST TextNodes

// test 9
testedElement = generateElement("p", {id:"container", class: "main"})
if ( testedElement.childNodes.length == 0 ) {
  console.log("  9 OK")
}
else {
  console.log("failed - test 9")
}
// test 10
testedElement = generateElement("p", {id:"container", class: "main", textNode: "hello there"})
if ( testedElement.childNodes.length == 1 ) {
  console.log(" 10 OK")
}
else {
  console.log("failed - test 10")
}
// test 11
testedElement = generateElement("p", {id:"container", class: "main", textNode: "hello there"})
if ( testedElement.innerHTML == "hello there" ) {
  console.log(" 11 OK")
}
else {
  console.log("failed - test 11")
}
// test 12
testedElement = generateElement("p", {id:"container", class: "main", textNode: "hello there"})
if ( testedElement.childNodes[0].nodeType == Node.TEXT_NODE ) {
  console.log(" 12 OK")
}
else {
  console.log("failed - test 12")
}

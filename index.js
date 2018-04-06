const inputText = document.getElementById("addContact")
const output = document.getElementById("output")
const searchText = document.getElementById("searchContact")

//
var addressBook = [];

const showList = function () {
  output.innerHTML = " ";
  addressBook.map((data,index) =>{
    var a = document.createElement("li");
    a.innerHTML = `
    <span>${data}</span>
    <button class="delbutton" onclick="deleteTodo(${index})">X</button>
    <button onclick="editTodo(${index})">E</button>`
    output.appendChild(a)
  })
}

if(localStorage.data) {
  addressBook = JSON.parse(localStorage.data)
  showList()
}


function addButton(){
  addressBook.push(inputText.value)
  var result = JSON.stringify(addressBook)
  localStorage.data = result
  showList()
}

function deleteTodo(index) {
  addressBook.splice(index, 1)
  localStorage.data = JSON.stringify(addressBook)
  showList()
}

function editTodo (index) {
  let edit = prompt("Edit Your Text Here !")
  addressBook[index] = edit
  var result = JSON.stringify(addressBook)
  localStorage.data = result
  showList(input_text.value)
}

function searchButton () {
  var word_data = searchText.value.toLowerCase()
  let find_data = addressBook.filter(word =>word.toLowerCase().includes(word_data))
  alert(find_data.join(', '))
}

function clearButton () {
  addressBook = []
  localStorage.clear()
  showList()
}

var list = document.getElementById('list');
const addTodo=()=>{
  var todo_item = document.getElementById('todo_item').value;
  var li = document.createElement('li');
  var litext = document.createTextNode(todo_item)
  li.appendChild(litext);

                      // Delete Button
  var delbutton = document.createElement('button')
  var deltext = document.createTextNode("DELETE");
  delbutton.appendChild(deltext);
delbutton.setAttribute("onclick","deleteItem(this)")

                       // Edit Button
var editbtn =document.createElement('button');
var edittext=document.createTextNode("EDIT");
editbtn.appendChild(edittext);
editbtn.setAttribute("onclick","editItem(this)")


li.appendChild(editbtn);

li.appendChild(delbutton);

list.appendChild(li);

  todo_item.value = ""
// console.log(todo_item)
}







function deleteItem(e){
  // console.log(e.parentNode)
e.parentNode.remove();
  }

 function deleteAll(){
   list.innerHTML="";
 }

 function editItem(e){
  var val =   e.parentNode.firstChild.nodeValue;
  var edit = prompt("Enter updating",val);
  e.parentNode.firstChild.nodeValue =edit;
    
    // console.log(e.parentNode.childNodes[0])

  }
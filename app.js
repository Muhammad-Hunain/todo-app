// console.log(firebase);
// console.log(firebase.database)
firebase.database().ref('todos').on('child_added',function(data){
 
  // console.log(key)
  var li = document.createElement('li');
  var p =document.createElement('p')
  p.setAttribute("id","text")
  var litext = document.createTextNode(data.val().value)
  p.appendChild(litext);
  li.appendChild(p);
//                       // Delete Button
  var delbutton = document.createElement('button')
  var deltext = document.createTextNode("DELETE");
  delbutton.appendChild(deltext);
  delbutton.setAttribute("id",data.val().key)
delbutton.setAttribute("onclick","deleteItem(this)")

//                        // Edit Button
var editbtn =document.createElement('button');
var edittext=document.createTextNode("EDIT");
editbtn.setAttribute("id",data.val().key)
editbtn.appendChild(edittext);
editbtn.setAttribute("onclick","editItem(this)")


li.appendChild(editbtn);

li.appendChild(delbutton);

list.appendChild(li);
})
var list = document.getElementById('list');
const addTodo=()=>{
  var todo_item = document.getElementById('todo_item');
  var database =firebase.database().ref('todos'); 
  var key = database.push().key;
  var obj = {
    value:todo_item.value,
    key:key,
  }
  database.child(key).set(obj);


  todo_item.value="";
// console.log(todo_item)
}







function deleteItem(e){
firebase.database().ref('todos').child(e.id).remove()
e.parentNode.remove();

  }

 function deleteAll(){
  firebase.database().ref('todos').remove();
  list.innerHTML="";
 }

 function editItem(e){
  var val =  e.parentNode.children[0].innerText;
  console.log(val)
  var edit = prompt("Enter updating",val);
  var editTodo={
    value:edit,
    key:e.id,
  }
  firebase.database().ref('todos').child(e.id).set(editTodo)
  e.parentNode.children[0].innerText = edit;

    // console.log(e.parentNode.childNodes[0])
 }

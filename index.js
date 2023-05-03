let btn=document.getElementById('add_btn');
btn.addEventListener('click',addItem);
let parentList=document.getElementById('ul')
function addItem(e){
    e.preventDefault();
    if(parentList.children[0].className==="noMsg"){
      parentList.children[0].remove();
    }
    const currentbtn=e.currentTarget;
    const currInput=currentbtn.previousElementSibling;
    console.log(currInput.value)
    const newLi=document.createElement('li');
    newLi.className='list-group-item d-flex';
    newLi.innerHTML=` <h3 class="me-sm-auto ">${currInput.value}</h3>  <button type="button" class="btn btn-warning" onclick="editItem(this)">Edit</button> <button type="button" class="btn btn-danger ms-2" onclick="removeItem(this)">Delete</button>`
   
    parentList.appendChild(newLi)
}

// Remove Item
function removeItem(currElement){
   // console.log(currElement.parentElement)
    currElement.parentElement.remove();
    if(parentList.children.length<=0){
     let msg=document.createElement("h3");
     //msg.className="text-center"
     msg.classList.add("noMsg");
     msg.textContent="Add Item Here"
     parentList.appendChild(msg);
     
    }
}

function editItem(currElement){
  if(currElement.textContent=="Done"){
    currElement.textContent="Edit";
    let currItem=currElement.previousElementSibling.value;
    let currHeading=document.createElement("h3");
    currHeading.className="me-sm-auto";
    currHeading.textContent=currItem;
    currElement.parentElement.replaceChild(currHeading,currElement.previousElementSibling);
  }
  else{
    currElement.textContent="Done"
 let currText=currElement.previousElementSibling.textContent;
 let currInput=document.createElement("input");
 currInput.type="text";
 currInput.className="form-control"
 currInput.placeholder="Add Items"
 currInput.value=currText;
 currElement.parentElement.replaceChild(currInput,currElement.previousElementSibling);
  }
 
}
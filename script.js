let addBtn = document.querySelector('#add-btn');
let inputField = document.querySelector('#input-field');
let task = document.querySelector('.task');
let taskList = document.querySelector('.task-list');
let taskListContent = document.createElement('div');
let checkbtn = document.createElement('button');
let trashBtn = document.createElement('button');

let count = 0;



function createTask() {
  //create divs
  let taskListContent = document.createElement('div');
  taskListContent.className="task-list-content";

  //paragraph element for the output
  let p = document.createElement('p');
  p.className="output";

  //checked button
  let checkbtn = document.createElement('button');
  checkbtn.className='fa fa-check';
  checkbtn.classList.add('check-button');

  // delete button
  let trashBtn = document.createElement('button');
    trashBtn.className='fa fa-trash';
    trashBtn.classList.add('delete-btn');

    //animation
    
    setTimeout(()=>{
      taskListContent.appendChild(p);  
      taskListContent.appendChild(checkbtn);
      taskListContent.appendChild(trashBtn);
      taskListContent.classList.add('popout')
    }, 400)
    
    //append
    taskList.appendChild(taskListContent);
  
  //display the input value
  p.textContent = inputField.value;

  //alert if input value is empty
  if(!inputField.value){
    taskListContent.remove();
    alert('Error: No task found')
  }

  //empty input value when button is clicked
  inputField.value= '';

  //remove task when checked
  checkbtn.addEventListener('click', ()=>{
    taskListContent.classList.add('remove-animation');
    setTimeout(() => {
  taskListContent.remove();

}, 500);
})
   
   // remove task when deleted
   trashBtn.addEventListener('click', ()=>{
     taskListContent.classList.add('remove-animation');
     setTimeout(() => {
      taskListContent.remove();
}, 500);
});

}

addBtn.addEventListener('click', createTask)


  
 const list=document.querySelector('#taskList ul');
 list.addEventListener('click',function(e){
     if(e.target.className =='btn'){
         const li=e.target.parentElement;
         list.removeChild(li);
     }
 })

 //add task function
 const addTask=document.forms['addTask'];
 addTask.addEventListener('submit', function(e){


     e.prevent
     e.preventDefault();
     const value = addTask.querySelector('input[type="text"]').value;
     

    //  create task 
    const li =document.createElement('li');
    const taskName = document.createElement('p');
    const btn= document.createElement('button');


    btn.textContent='done';
    taskName.textContent=value;
    li.classList.add('lineInner');
    btn.classList.add('btn');

    li.appendChild(taskName);
    li.appendChild(btn);
    list.appendChild(li);
 })
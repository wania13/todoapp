var list=document.getElementById('mylist')
var addbutton=document.getElementById('add')
var removebutton=document.getElementById('remove')
var removeAllbutton=document.getElementById('removeall')


addbutton.addEventListener('click',addtodo)
removebutton.addEventListener('click',removetodo)
removeAllbutton.addEventListener('click',removeall)

window.onload = () => {
    const list = document.getElementById('mylist')
    list.addEventListener('click', (e) => {
    // match is a checkbox?
    if (e.target.matches('.check')) {
      // if checked, get its parent .mycheck elm, either add or remove the cut class
      if (e.target.checked) {
        e.target.closest('.mycheck').classList.add('cut')
      } 
      else e.target.closest('.mycheck').classList.remove('cut')
    }
  })
}




function removetodo(){

    var items =list.children //array of all todo (li)
    checkitems=document.getElementsByClassName('check') //array of all checkboxes (li)
    
    for(var x=0; x < checkitems.length; ){

        if(checkitems[x].checked)
            {list.removeChild(items[x])}
        else{x++}
    }

    // for(var x=0; x < items.length;x++){
    //     while (items[x] && items[x].children[0].checked)
    //     {list.removeChild(items[x])}
    // }
    
}




function addtodo(){

    var input=document.getElementById('new')
    var content=input.value
   
    if (content=='' || content==" " || !content){
        alert("please enter a todo!")
        return false
    }

    else{

        var newli=document.createElement('li')
        newli.setAttribute('class','mycheck')
        newli.setAttribute('id','visual')

        var newinput=document.createElement('input')
        newinput.type='checkbox'
        newinput.setAttribute('class','check')
        
        

        var newlabel=document.createElement('label')
        newlabel.innerHTML=content
        localStorage.setItem('todo',content)

        list.appendChild(newli)
        newli.appendChild(newinput)
        newli.appendChild(newlabel)
        list.insertBefore(newli,list.childNodes[0])

        input.value=''

    }



}



function removeall(){
  
    // if (list) 
    // { 
    //     while (list.firstChild)
    //      { list.removeChild(list.firstChild) } 
    // }

    list.innerHTML = '';
    localStorage.clear()
}



const btn = document.querySelector("#btn");
// const ul=document.querySelector("#list");
const data = document.querySelector("#inpt");

btn.addEventListener("click", addItems);

function addItems(e) {
    e.preventDefault();
    
    let val = data.value;
    if (val == "") {
        alert("Please Add Something");
        return;
    }
    else {
        var ul = document.getElementById("list");
        var li = document.createElement("li");
        li.id = "para";
        li.appendChild(document.createTextNode(val));
        ul.appendChild(li);
        li.innerHTML = `${ val } <button id="remove">Remove</button> <input type="checkbox" id="check">`
        data.value = "";
    }

    li.querySelector("#remove").addEventListener("click", Delete);
    function Delete() {
        li.remove();
    }
    li.querySelector("#check").addEventListener("click",strikethrough);
    let temp=0;
    function strikethrough()
    {
        if(temp==0)
        {
             li.style.textDecoration = "line-through";
             temp=1;
        }
        else
        {
             li.style.textDecoration = "none";
             temp=0;
        }
        
    }

}

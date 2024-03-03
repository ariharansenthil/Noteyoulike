var a=document.querySelector(".popup")
    var b=document.querySelector(".popupbox")
    var c=document.getElementById("btn")
    
    c.addEventListener("click",function(){
        a.style.display="block"
        b.style.display="block"
    })
    var e=document.getElementById("popcancel")

    e.addEventListener("click",function(event){
        event.preventDefault()
        a.style.display="none"
        b.style.display="none"
    })

    var f=document.querySelector(".container")
    var g=document.getElementById("booktitle")
    var h=document.getElementById("bookauthor")
    var i=document.getElementById("bookdiscription")
    var j=document.getElementById("popadd")

    j.addEventListener("click",function(event){
        event.preventDefault()
        var div=document.createElement("div")
        div.setAttribute("class","bookcontainer")
        div.innerHTML=` <h2>${g.value}</h2>
            <h3>${h.value}</h3>
            <p>${i.value}</p><button onclick="deletebook(event)">Delete</button>`
        f.append(div)
        a.style.display="none"
        b.style.display="none"
    })
    function deletebook(event){
        event.target.parentElement.remove()

    }
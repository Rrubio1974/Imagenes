const array = [
    div1 = document.querySelector("#Uno"),
    div2 = document.querySelector("#Dos"),
    div3 = document.querySelector("#Tres"),
    div4 = document.querySelector("#Cuatro"),
    div5 = document.querySelector("#Cinco"),
    div6 = document.querySelector("#Seis"),
    div7 = document.querySelector("#Siete"),
    div8 = document.querySelector("#Ocho"),
    div9 = document.querySelector("#Nueve"),
    div10 = document.querySelector("#Diez")
]

console.log(array)

function des(item)
{

    item.innerHTML = '<img src="" alt="">'
    
}
function apa()
{
    for(let item of array)
    {
    item.innerHTML = '<img src="Yoda.jpg" id="Yoda" alt="" class="img-fluid">'
    console.log("aparecer imagen")

    }
    
}

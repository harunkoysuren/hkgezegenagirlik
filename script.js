const header = document.querySelector("h1")
const input = document.querySelector("input")
const select = document.getElementById("select")
const btn = document.getElementById("button")
const input_container = document.querySelector(".container")
const flex_container = document.querySelector(".flex-container")
const img_container = document.querySelector(".img-container")
const img = document.getElementById("image")
const content = document.getElementById("content")

document.body.style.backgroundImage = "url('./gezegenler/galaxy.gif')"


header.style.color = "white"
header.style.textAlign = "center"



input_container.style.display = "flex"
input_container.style.justifyContent = "center"
input_container.style.alignItems = "center"
input_container.style.gap = "20px"
input_container.style.margin = "20px auto"





flex_container.style.display = "flex"
flex_container.style.justifyContent = "center"
flex_container.style.alignItems = "center"
flex_container.style.margin = "50px auto"
flex_container.style.gap = "20px"
flex_container.style.backgroundColor = "rgba(255,255,255,0.100)"
flex_container.style.padding = "30px"




btn.style.width = "150px"
btn.style.height = "30px"
input.style.widht = "150px"
input.style.height = "30px"
select.style.widht = "150px"
select.style.height = "30px"




content.style.color = "white"
content.style.fontSize = "20px"




btn.addEventListener("click",function(){
    let kilo = Number(input.value)
    kilo /= 9.81
    let gezegen = select.value
    let sonuc = 0

    if(input.value.trim() != "" && select.value != "Bir Gezegen Seç" && !isNaN(input.value)){
        sonuc = kilo * 9.81
        if(gezegen === "earth"){
            img.setAttribute("src","./gezegenler/earth.png")
        }else if(gezegen === "jupiter"){
            img.setAttribute("src","./gezegenler/jupiter.png")
            sonuc = kilo * 24.8
        }else if(gezegen === "mars"){
            img.setAttribute("src","./gezegenler/mars.png")
            sonuc = kilo * 3.7
        }else if(gezegen === "mercury"){
            img.setAttribute("src","./gezegenler/mercury.png")
            sonuc = kilo * 3.7
        }else if(gezegen === "moon"){
            img.setAttribute("src","./gezegenler/moon.png")
            sonuc = kilo * 1.6
        }else if(gezegen === "neptune"){
            img.setAttribute("src","./gezegenler/neptune.png")
            sonuc = kilo * 11.15
        }else if(gezegen === "pluto"){
            img.setAttribute("src","./gezegenler/pluto.png")
            sonuc = kilo * 0.62
        }else if(gezegen === "saturn"){
            img.setAttribute("src","./gezegenler/saturn.png")
            sonuc = kilo * 10.44
        }else if(gezegen === "uranus"){
            img.setAttribute("src","./gezegenler/uranus")
            sonuc = kilo * 8.87
        }else if(gezegen === "venus"){
            img.setAttribute("src","./gezegenler/venus.png")
            sonuc = kilo * 8.87
        }


        content.innerHTML = `Seçmiş Olduğunuz Gezegen : <span class="sekillendir">${gezegen}</span> ve Bu Gezegendeki Ağırlığınız <span class="sekillendir">${sonuc.toFixed(2)}</span>`
    }else{
        content.textContent = "Kilonu Sayıyla Gir Ve Bİr Gezegen Seçtiğinden Emin OL"
    }
})

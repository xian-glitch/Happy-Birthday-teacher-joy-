const button = document.getElementById('end');
const animate = document.getElementById('birtday');
const form = document.querySelector('.container');
const othButton = document.getElementById('other');
const container = document.getElementById('division');
const body = document.getElementById('mainbod');
const next = document.querySelector(".next");
const end = document.getElementById('the-end');
const letter = document.getElementById('letter');
const oth = document.getElementById('oth');
const giphy = document.getElementById('giphy-embed');
const color = document.getElementById('color'); 
const h = document.getElementById('h');

color.addEventListener("click", () =>{
    color.style.visibility = ('hidden');
    giphy.style.display = ('block');
    
})





function myfunction(){
    body.style.background =  ('rgb(2,0,36)');
    body.style.background = ("linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)");
    body.style.width = ('100%');
    body.style.height = ('100%');
    othButton.style.display = ('none')
    animate.style.display = ('none');
    letter.style.display = ('block');
    oth.style.display = ('block');
}

function myOth(){
    location.reload()
}

function idk(){
    letter.style.display = ('none');
    oth.style.display = ('none');
    body.style.background = ('none');
    body.style.background = ('rgb(131,58,180)');
    body.style.background = ('linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)');
    color.style.display = ('block');
    color.style.marginLeft = ('500px');
    giphy.style.marginLeft = ('500px');
    h.innerHTML = ("Sorry that I didn't buy you cake irl ,but here's a virtual one!")
    
}

form.addEventListener('submit', (e) =>{
    e.preventDefault()
    if(button.onclick){
        animate.style.visibility = ('visible');
        button.style.visibility = ('hidden');
        othButton.style.visibility = ('visible')
        
    }else{   
    }; 
    
   
    
})



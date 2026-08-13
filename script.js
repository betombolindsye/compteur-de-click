let nombre = 0 
const compteur = document.getElementById("compteur")
const plus = document.getElementById("plus")
const moins = document.getElementById("moins")
plus.addEventListener("click",() =>{
    nombre=nombre+1;
    compteur.textContent=nombre;
});
moins.addEventListener("click",() =>{
    nombre=nombre-1;
    compteur.textContent=nombre;
});
const reinitialiser=document.getElementById("reinitialiser")
reinitialiser.addEventListener("click",() =>{
    nombre=0;
    compteur.textContent=nombre
})
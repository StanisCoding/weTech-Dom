const button = document.querySelectorAll('.btn')
const p = document.createElement('p')
const iphoneBtn = document.querySelector('.iphoneBtn')
const iphoneHeading = document.querySelector('.iphone')
const iphoneRestock = document.querySelector('.iphoneRestock')
const pcBtn = document.querySelector('.pcBtn')
const pcRestock = document.querySelector('.pcRestock')
const pcHeading = document.querySelector('.pc')
const span = document.querySelector('span')
const consoleHead= document.querySelector('.console')
const consoleBtn = document.querySelector('.consoleBtn')
const consoleRestock = document.querySelector('.consoleRestock')

iphoneBtn.addEventListener('click', function(){
 iphoneHeading.innerHTML = 'Out Of Stock'
 iphoneHeading.style.color ='red'

  


})

iphoneRestock.addEventListener('click', function(){
  iphoneHeading.innerHTML = 'iPhones'
  iphoneHeading.style.color = 'rgba(0,0,0,0.685)'

})


pcBtn.addEventListener('click', function(){
  pcHeading.innerHTML = 'Out Of Stock'
  pcHeading.style.color ='red'
 
   
 
 
 })



 pcRestock.addEventListener('click', function(){
  pcHeading.innerText = 'Pc'
  pcHeading.style.color = 'rgba(0,0,0,0.685)'
  span.classList.add = 'view'
  

  
 

  

  
})

consoleBtn.addEventListener('click', function(){
  consoleHead.innerHTML = 'Out Of Stock'
  consoleHead.style.color ='red'
 
   
 
 
 })



 consoleRestock.addEventListener('click', function(){
  consoleHead.innerText = 'Console'
  consoleHead.style.color = 'rgba(0,0,0,0.685)'
  
  

  
 

  

  
})











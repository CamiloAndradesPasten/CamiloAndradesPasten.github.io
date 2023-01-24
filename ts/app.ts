
const divDesp = (document.querySelector('.Header-desp') as HTMLDivElement);    
const menuBtn = (document.querySelector('.Header-btn') as HTMLButtonElement);  
   
function menuDesp() {     
       
    menuBtn.addEventListener('click', ()=>{ 
        divDesp.classList.toggle('menuActive'); 
          
    });

} 

  

menuDesp();

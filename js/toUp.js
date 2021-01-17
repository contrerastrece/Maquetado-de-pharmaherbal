export function toUp(btnUp){        
    if(scrollY>800){            
    document.querySelector(btnUp).classList.remove("hidden");
        document.addEventListener("click",e=>{
            if(e.target.matches(btnUp)){ 
                
                scrollTo(scrollX,0);
            }
        })
    }else{
    
        document.querySelector(btnUp).classList.add("hidden");        
    }
}
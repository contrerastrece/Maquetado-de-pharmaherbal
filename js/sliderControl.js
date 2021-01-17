export{carouselControl} 
function carouselControl(btnNext,btnPrev,sliders,nSliders){
    const $next=document.getElementById(btnNext);
    const $prev=document.getElementById(btnPrev);    
    const $sliders=document.querySelectorAll(sliders);

    // calcular el width del slider
    let $container_width=document.querySelector(".sliders-content").clientWidth/nSliders;
    let contador=1;
    document.addEventListener("click",e=>{
           if(e.target===$prev){
                contador--;
                // reiniciar el contador
                if(contador<=0) contador=($sliders.length - nSliders +1);

                for (let i=0;i<$sliders.length;i++) {                   
                    $sliders[i].style.transform=`translate(${(-contador+1)*$container_width}px)`;    
                }       
           }
           if(e.target===$next){                
               //reiniciar el contador   
               if(contador>=($sliders.length - nSliders +1)) contador=0;
               
               for (let i=0;i<$sliders.length;i++) {                   
                   $sliders[i].style.transform=`translate(${(-contador)*$container_width}px)`;    
                }
                contador++;
            }       
    })
}

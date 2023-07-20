let intro = document.querySelectorAll('.intro');
let logo = document.querySelectorAll('.logohead');
let logoSpan =document.querySelectorAll('.logo');
let container =document.querySelectorAll(".container");
let nav1 = document.querySelectorAll('.nav1');
let time = 2300

let dark= document.querySelectorAll('.dark')
let foot = document.getElementById('foot')
let particle = document.getElementById('bg1')
let particle2 = document.getElementById('bg2')

window.addEventListener('DOMContentLoaded', ()=>{
        
        setTimeout(()=>{
                logoSpan.forEach((span ,idx)=>{
                        setTimeout(()=>{
                                span.classList.add('active');
                        }, (idx + 1) * 200)
                        
                });
                setTimeout(()=>{
                        logoSpan.forEach((span, idx)=>{

                                setTimeout(()=>{
                                        span.classList.remove('active');
                                        span.classList.add('fade');
                                        
                                }, (idx + 1)*50)
                        })
                },2000);

                setTimeout(()=>{
                        intro.forEach((el) => {
                                el.style.top = '-100vh';
                              });
       
                }, time)
                setTimeout(()=>{
                        container.forEach((el2) => {
                                el2.style.height = '100vh';
                                el2.style.filter = 'blur(0px)'
                              });
       
                }, time)
                setTimeout(()=>{
                        nav1.forEach((el3) => {
                                el3.style.opacity = '1';
                              });
       
                }, time+1000)
                setTimeout(()=>{
                        dark.forEach((el4) => {
                                el4.style.opacity = '0';
                              });
       
                }, time+600)
                
        })
})



window.addEventListener('scroll', () => {
        let value = window.scrollY;

        particle.style.marginTop = value *-0.2 + 'px';
        particle2.style.marginTop = value *-1 + 'px';
        foot.style.marginTop = value *-0.2 + 'px';        
})
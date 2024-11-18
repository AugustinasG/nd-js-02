//10Uždavinį atlikite atskirame html faile. Visame ekrane atsitiktine tvarka “išmėtykite“ 444 pusiau permatomus atsitiktinės spalvos ir atsitiktinio skersmens nuo 44 iki 144 (px) apskritimus. Apskritimai turi tolygiai (pagal funkciją rand()) dengti visą ekraną.#fun



function rand(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
  }
  
 
  function randomColor() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16).padEnd(6, '0');
  }
  
  
  const container = document.querySelector('#circleContainer');
  let circlesHTML = ''; 
  
  for (let i = 0; i < 444; i++) {
   
    const size = rand(44, 144);
  
 
    const maxWidth = window.innerWidth - size;
    const maxHeight = window.innerHeight - size;
    const posX = rand(0, maxWidth);
    const posY = rand(0, maxHeight);
  
    
    circlesHTML += `<div class="circle" 
                      style="
                        width: ${size}px; 
                        height: ${size}px; 
                        background-color: ${randomColor()}; 
                        left: ${posX}px; 
                        top: ${posY}px;">
                    </div>`;
  }
  
 
  container.innerHTML = circlesHTML;
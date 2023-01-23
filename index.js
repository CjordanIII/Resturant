const main = document.getElementById('main')
let bottom =document.getElementById("bottom-set")
import {menuArray} from '/data.js'
let blkLine = document.getElementById('line-dark')
let coBtn = document.getElementById('container-3')
blkLine.style.display = 'none'
coBtn.style.display ='none'
let toggleContainerDisplay=document.getElementById('container-3')
toggleContainerDisplay.style.display = 'none'
document.getElementById('model').style.display = 'none'
let prices = {}

document.addEventListener("click",function(event){
    /* checks to see if the uuid matches what is clicked */
    if (event.target.dataset.uuid) {
        dealWithMath(event.target.dataset.uuid) /* check to see what is being controlled the right uuid */
        /* controlls the bottom data "your order" */
        function bottomSet(data) {
            let swapH2 = document.getElementById("check-out")
            let Name = data.name
            let Price = data.price
            let Total = document.getElementById('Total')
            if (!prices[Name]) { /* checks if the name already exists in the prices object */
                prices[Name] = Price;
                /* Groups of tollge makes sure YOUR ORDER appers once */
                    swapH2.classList.toggle('check-out')
                    blkLine.style.display = 'block'
                    coBtn.style.display ='flex'
                if(swapH2.classList.toggle('check-out')){
                    swapH2.classList.toggle('check-out')
                }
                
            } else {
                prices[Name] += Price;
            }
            bottom.innerHTML = ""
            for (let item in prices) {
                bottom.innerHTML += `
                <div class = 'item'><span>${item}</span><span>$${prices[item]}</span></div>`
            }
            Total.textContent = `Total Price: $${sum(prices)}`
            coBtn.innerHTML = `
            <button class="complete-btn" id="complete-btn">Complete order</button>`
            let CompleteOrder = document.getElementById('complete-btn')
            CompleteOrder.addEventListener('click',function(){
                toggleContainerDisplay.style.display = 'absolute'
                document.getElementById('model').style.display = 'absolute'
            })
            /* figure out how to make diplay for for the complete order btn and also fix above */

    }
    function dealWithMath(data){
    const filteredLIst = menuArray.filter(function(dataof){
        if(dataof.uuid === data){
            return dataof
        }
    })
    bottomSet(filteredLIst[0])
}
    }


})




/* does the adding for all the stuff */
function sum( obj ) {
    var sum = 0;
    for( var el in obj ) {
      if( obj.hasOwnProperty( el ) ) {
        sum += parseFloat( obj[el] );
      }
    }
    return sum;
  }

Array.prototype.count = function(item){ 
            let appearance = 0; //This is the default value
            this.forEach(index=>{
                if (index === item)
                    appearance++
            });
            return appearance;
        }










menuArray.forEach(function(data){
    main.innerHTML+= `<div class="container">
                        <span class="emoji">${data.emoji}</span>
                        <ul class='list'>
                            <li>${data.name}</li>
                            <li>${data.ingredients}</li>
                            <li>$${data.price}</li>
                        </ul>
                        <i class="fa-regular circle fa-circle" data-uuid=${data.uuid}></i>
                        <span for="circle"class='plus'>+</span>
                    </div>
                    <div class='line'>

                    </div>
            
                    `
})




 


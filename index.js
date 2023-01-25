const main = document.getElementById('main')
let bottom =document.getElementById("bottom-set")
import {menuArray} from '/data.js'
let blkLine = document.getElementById('line-dark')
let coBtn = document.getElementById('container-3')
blkLine.style.display = 'none'
coBtn.style.display ='none'
let toggleContainerDisplay=document.getElementById('model')
toggleContainerDisplay.style.display='none'
let Total = document.getElementById('Total')
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

            if (!prices[Name]) { /* checks if the name already exists in the prices object */
                prices[Name] = Price
                
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
            console.log(prices)
            bottom.innerHTML = ""
            for (let item in prices) {
                bottom.innerHTML += `
                <div class = 'item'><span class='each-item'>${item}</span><sub class='remove'id='${item}'>Remove</sub>
                <span class='price' >$${prices[item]}</span></div>`
                let removebtn = document.getElementById(item);
                removebtn.addEventListener('click', function() {/* only activates when you click delete */
                    delete prices[item];
                    bottom.innerHTML = "";
                    for (let item in prices) {
                        bottom.innerHTML += `
                            <div class = 'item'><span class='each-item'>${item}</span><sub class='remove'id='${item}'>Remove</sub>
                            <span class='price' >$${prices[item]}</span></div>`
                        let removebtn = document.getElementById(item);
                        removebtn.addEventListener('click', function() {
                            delete prices[item];
                            bottom.innerHTML = "";
                            for (let item in prices) {
                                bottom.innerHTML += `
                                <div class = 'item'><span class='each-item'>${item}</span><sub class='remove'id='${item}'>Remove</sub>
                                <span class='price' >$${prices[item]}</span></div>`
                                let removebtn = document.getElementById(item);
                                removebtn.addEventListener('click', function() {
                                    delete prices[item];
                                    console.log(prices);
                                });
                            }
                        });
                    }
                });
              
            }
            /* this code is whwat happens druing codBtn and after you hit complete order */
            Total.textContent = `Total Price: $${sum(prices)}`
            coBtn.innerHTML = `
            <button class="complete-btn" id="complete-btn">Complete order</button>`
            /* figure out how to make diplay for for the complete order btn and also fix above */
            document.getElementById('complete-btn').addEventListener('click',function(){
            toggleContainerDisplay.style.display='block'
            


            
            const form = document.getElementById('submit')
            form.addEventListener('click',function(){
              let data= Array.from(document.querySelectorAll('.labels')).reduce((acc,input)=>({...acc,[input.id]: input.value}), {})
              if(data.name&& data.email && data.ccn && data.cvc){
                toggleContainerDisplay.style.display='none'
                console.log(data)
              }
              /* I check to see if the data if filled or empty I creaded an object but did not do anythig with it. but now All I have to do is inside the if stament abmove  set the your order and all the info to thank you. Will deploye but I have to move on in the course sice im paying for months but i'm going to come back just need to move forward and make improvements later as i learn */
            })


            }) 
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




 


const main = document.getElementById('main')
let bottom =document.getElementById("bottom-set")
import {menuArray} from '/data.js'


let prices = {}

document.addEventListener("click",function(event){
    /* checks to see if the uuid matches what is clicked */
    if (event.target.dataset.uuid) {
        dealWithMath(event.target.dataset.uuid) /* check to see what is being controlled the right uuid */
        /* controlls the bottom data "your order" */
        function bottomSet(data) {
            let Name = data.name
            let Price = data.price
            if (!prices[Name]) { /* checks if the name already exists in the prices object */
                prices[Name] = Price;
            } else {
                prices[Name] += Price;
            }
            bottom.innerHTML = ""
            for (let item in prices) {
                bottom.innerHTML += `
                <div class = 'item'><span>${item}</span><span>$${prices[item]}</span></div>`
            }

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

Array.prototype.count = function(item){ 
            let appearance = 0; //This is the default value
            this.forEach(index=>{
                if (index === item)
                    appearance++
            });
            return appearance;
        }

/*                                    TASK
Figure out how to count how many time a button has been clidked using the uuid
so beer for example does not repete more than once but it couts the number of times it has been clicked
 */
/*                              where I left off
I took the event that makde p print more than once insdie the document.addevent listner
the bottom functon matches the uuid to make sure it only prints one uuid and match the button to the correct food.
 */









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




 


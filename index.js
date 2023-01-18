const main = document.getElementById('main')
let bottom =document.getElementById("bottom-set")
import {menuArray} from '/data.js'


document.addEventListener("click",function(event){
    if(event.target.dataset.uuid){
        dealWithMath(event.target.dataset.uuid)
        function bottomSet(data){
            bottom.innerHTML+=`
            <p class = 'added-text'>${data.name}</p>
            `;
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




 


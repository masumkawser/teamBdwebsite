
// addTolist(this)
// {

//     this.disabled =true;
    
// }


//Array  declaration 

const cart = [];

function displayProduct()
{
 
    const totalProducts = document.getElementById("total-player");
    totalProducts.innerText = cart.length;

    const cartContainer = document.getElementById("player-cart");
    cartContainer.textContent = '';

    for(let i = 0; i < cart.length; i++)
    {
if(cart.length>5){

    alert('you can not select more than 5')

    return ;
}

    

        const tr = document.createElement("tr");
        tr.innerHTML = `
        <th>${i+1}</th>
        <td>${cart[i].pdName}</td>
        
        `;
        cartContainer.appendChild(tr);
    }
    const tr = document.createElement('tr');
    tr.innerHTML = `
    
    `;

    cartContainer.appendChild(tr);
}

function addTolist(element) {
    const pdName = element.parentNode.parentNode.children[1].innerText;
    
    const pd = {
        pdName: pdName,
        
    }
    cart.push(pd);

    displayProduct();
}











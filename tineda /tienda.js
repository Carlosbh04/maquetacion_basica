//-- carrito
let carrito = [];

//-- Añadir productos al carrito
$('.producto').click(function(){
    let addCart = {
        articulo: $(this).attr("title"),
        precio: $(this).attr("value")
    }
    carrito.push(addCart);
})

//-- Mostrar carrito.
function total(){
    let total = 0;
    for (let i = 0; i < carrito.length; i++) {
        total += Number(carrito[i].precio);
    }
    //-- Visualizar Total
    $('#total').text(total.toFixed(2) + '€');
}

function printCartList(){
    //-- Visualizar lista de articulos
    let list = '';
    for (let i = 0; i < carrito.length; i++) {
        list += `<li class="list-group-item">PRENDA: ${carrito[i].articulo} ${carrito[i].precio}</li>`;
       
    }
    $('.body-ul').html(list);
}

$('.cart_btn').click(function(e){
    e.preventDefault();
    printCartList();
    total();
})



function removeItem(index){
    carrito.splice(index, 1);
}

function printCartList(){
    let list = '';
    for (let i = 0; i < carrito.length; i++) {
        list += `<li class="list-group-item">
                    PRENDA: ${carrito[i].articulo} ${carrito[i].precio}
                    <button class="btn btn-success btn-sm float-end delete_btn" data-index="${i}">Eliminar</button>
                </li>`;
    }
    $('.body-ul').html(list);
}


$(document).on('click', '.delete_btn', function(e){
    e.preventDefault();
    let index = $(this).data('index');
    removeItem(index);
    printCartList();
    total();
});


// function showMessage(message){
//     $('.modal-body').text(message);
//     $('#cart').modal('show')
// }

// $('.producto').click(function(){
//     let addCart = {
//         articulo: $(this).attr("title"),
//         precio: $(this).attr("value")
//     }
//     carrito.push(addCart);
//     showMessage(`${addCart.articulo} ha sido añadido al carrito.`);
    
   
// })

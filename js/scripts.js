function calcular(){
    try {
        var a = parseInt(document.getElementById('TarjetaGrafica1').value) || 0,
        b = parseInt(document.getElementById('TarjetaGrafica2').value) || 0,
        c = parseInt(document.getElementById('TarjetaGrafica3').value) || 0,
        d = parseInt(document.getElementById('TarjetaGrafica4').value) || 0;
    
        document.getElementById('total').value = (a*1) + (b*30) + (c*200) + (d*100) ;
    } catch (e) {
        console.log(e)
        alert("ERROR DE PAGINA")
    }
    
    }
    const btnComprar = document.querySelector('#boton_comprar');
    
    btnComprar.addEventListener('click', function(){
     alert("Gracias por su compra")
    })
    
    
    
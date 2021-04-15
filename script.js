function converter() {
    var temperatura = parseFloat(document.getElementById('temperatura').value)
    var selecao = document.getElementById('selecao')
    var value = selecao.options[selecao.selectedIndex].value;
    var fahrenheit = 1.8 * temperatura + 32
    var celsius = (temperatura - 32) / 1.8
    
    if(value != 'vazio'){
        if (!isNaN(temperatura)) {
            if (value == 'f') {
                document.getElementById('res').innerHTML = celsius.toFixed(1) + 'ºC'
                var temperatura = parseFloat(document.getElementById('temperatura').value='')    
            }else{
                document.getElementById('res').innerHTML = fahrenheit.toFixed(1) + 'ºF'   
                var temperatura = parseFloat(document.getElementById('temperatura').value='')
            }
            
        }else{
            document.getElementById('res').innerHTML = ''
            swal('', 'Digite a temperatura', 'error')
        }
                
    }else{
        // alert('Escolha uma opção')
        swal('', 'Escolha o tipo de temperatura', 'error')
    }
}


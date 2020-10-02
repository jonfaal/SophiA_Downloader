

function baixar() {
    let pagde = document.querySelector('#pagde');
    let pagate = document.querySelector('#pagate');
    let iddoc = document.querySelector('#iddoc');
    
    if(iddoc.value == "") {

        window.alert(`Preencha o ID do documento.`);
    } else {

        var i = pagde.value;

        function loop() {
            setTimeout(function() {
                console.log(i);
                window.open(`https://biblioteca.fapcom.edu.br/asp/prima-pagina-pdf.asp?tstmp=1600872321620&pagina=${i}&codigoMidia=${iddoc.value}&midiaExemplar=0`)
                i++;
                if (i <= pagate.value) {
                    loop();
                }
            }, 1000)
        }

        loop();

}

}

//https://biblioteca.fapcom.edu.br/asp/prima-pagina-pdf.asp?tstmp=1600872321620&pagina=5&codigoMidia=18411&midiaExemplar=0
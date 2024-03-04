let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do Desafio';

function verificarNumero() {
     console.log('O botao foi clicado');
}
    function mensagemJava() {
        alert ('Eu amo JS');
    }
        function qualCidade() {
            let cidade = prompt ("Fale uma cidade muito bonita");
            alert (`Estive em ${cidade} e lembrei de você`);
        }
            function somaValor(){
                let n1 = prompt ('escolha um numero');
                let n2 = prompt ('escolha outro numero');

                //convertendo as string para numero
                    n1 = parseFloat(n1)
                    n2 = parseFloat(n2)

                    //verificar se a pessoa colocou numeros msm
                        if (isNaN(n1) || isNaN(n2)) {
                            alert ('Por favor, insira números validos.');
                            return;
                        }

                        let resultado = n1 + n2
                        alert (`O resultado da soma foi ${resultado}`);
            }
            // Voce sempre deve chamar a funcion
            somaValor();
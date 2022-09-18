$( document ).ready(function() {
  
      //contem o id do botao e inicia a função
    $('#btnMostrar').click(function() {

      //passa o valor do campo html para a variavel 
       let palavraDigitada = $('#txtPalavra').val();

       //armazena os caracteres do idice 0 a posição 9
       //e atribui os valores para outra variavel
       let pedacoPalavra = palavraDigitada.substring(0,9);
     
      // variaveis de todos os caracter do cpf digitdo
       let dig1 =  palavraDigitada.substring(0,1);
       let dig2 =  palavraDigitada.substring(1,2); 
       let dig3 =  palavraDigitada.substring(2,3) ;
       let dig4 =  palavraDigitada.substring(3,4) ;
       let dig5 =  palavraDigitada.substring(4,5) ;
       let dig6 =  palavraDigitada.substring(5,6); 
       let dig7 =  palavraDigitada.substring(6,7) ;
       let dig8 =  palavraDigitada.substring(7,8) ;
       let dig9 =  palavraDigitada.substring(8,9) ;
       let dig10 = palavraDigitada.substring(09,10);
       let dig11 = palavraDigitada.substring(10,11);
       

      

      // soma para achar o primeiro verificador do cpf
       let soma1 =dig1 * 10 + dig2 * 9 + dig3 * 8 + dig4 * 7 + dig5*6 + dig6*5 + 
       dig7 * 4 + dig8 * 3 + dig9 * 2;
       //resto da operação matematica
        resto1 =soma1 % 11
       //se a soma do conta for menor que 2 o verificador é 0
       if(resto1 < 2){
        verificador1 = 0;
        }
       //se o resto for maior que 2 entao a soma e dividida por mod 
       //11 e depois 11 - o resto do mod
        else{
          verificador1 =11 - resto1;
        }


      //soma para achar o segundo verificador
      let soma2 =dig1 * 11 + dig2 * 10 + dig3 * 9 + dig4 * 8 + dig5 * 7 + dig6 * 6 + 
      dig7 * 5 + dig8 * 4 + dig9 * 3 + verificador1 * 2;
      //resto para achar o segundo verificador
       resto2 = soma2 % 11;
      //se o resta da conta for menor que 2 o verificador é 0
      if(resto2 < 2){
        verificador2 = 0;
      }
      //se a soma for maior que 2 entao a soma e dividida por mod 
       //11 e depois 11 - o resto do mod
      else{
        verificador2 = 11 - resto2;
      }

       //verifica se  verificardor1 e igual a dig10
       //verifica se verificador2 é igual a dig11
       //verifica  se os numeros digitados nao sao uma sequencia de 11 digitos igauis
      if(verificador1 == dig10 && verificador2 == dig11 &&
        palavraDigitada != 11111111111 && palavraDigitada != 22222222222 && palavraDigitada != 33333333333 && 
        palavraDigitada != 44444444444 && palavraDigitada != 55555555555 && palavraDigitada != 66666666666 && 
        palavraDigitada != 77777777777 && palavraDigitada != 88888888888 && palavraDigitada != 99999999999)
        {
        resultadoVerificacao = alert('CPF valido');
      }
      
      //se conter alguma das codiçôes de cima no cpf digitado executado essa msg
      else{
        resultadoVerificacao = alert('CPF invalido tente novamente');
      }
     

      
       // envia a resposta como text para a pagina html
      //$('#lblMensagem').text(resultadoVerificacao);
  
    })
   });
import readlinesync = require("readline-sync");
import { colors } from "./src/util/Colors";
import { ContaCorrente } from "./src/model/ContaCorrente";
import { ContaPoupanca } from "./src/model/ContaPoupanca";
import { ContaController } from "./src/Controller/ContaController";
import { clear } from "node:console";

export function main() {

  //let opcao: number;
  
  // instanciando a classe controller
  let contas: ContaController = new ContaController();

  let numeroAt, numero, opcao, agencia, tipo, limite, saldo, aniversario, valor, numeroDestino: number;
  let titular: string;
  const tipoContas =  ['Conta Corrente', 'Conta Poupanca'];


  while (true) {
    
    console.log(colors.bg.black, colors.fg.yellow,
                "*****************************************************");
    console.log("                                                     ");
    console.log("                BANCO DO BRAZIL COM Z                ");
    console.log("                                                     ");
    console.log("*****************************************************");
    console.log("                                                     ");
    console.log("            1 - Criar Conta                          ");
    console.log("            2 - Listar todas as Contas               ");
    console.log("            3 - Buscar Conta por Numero              ");
    console.log("            4 - Atualizar Dados da Conta             ");
    console.log("            5 - Apagar Conta                         ");
    console.log("            6 - Sacar                                ");
    console.log("            7 - Depositar                            ");
    console.log("            8 - Transferir valores entre Contas      ");
    console.log("            9 - Sair                                 ");
    console.log("                                                     ");
    console.log("*****************************************************",
    colors.reset);
    console.log("Entre com a opção desejada: ");
    opcao = readlinesync.questionInt();

    if(opcao == 9){ 
    console.log(colors.fg.greenstrong,
      "\nBanco do Brazil com Z O seu Futuro começa aqui!");
    sobre();
    console.log(colors.reset);
    process.exit(0);
      
    }
  switch(opcao){
    case 1:
      console.log(colors.fg.whitestrong,
        "\nCriar Conta\n", colors.reset);    
        
        console.log("Digite o numero da Agencia: ");
        agencia = readlinesync.questionInt("");

        console.log("Digite o nome do Titular da conta: ");
        titular = readlinesync.question("");        

        console.log("Digite o tipo da conta: ");
        tipo = readlinesync.keyInSelect(tipoContas,"",{cancel:false}) + 1;

        console.log("Digite o saldo da conta(R$): ");
        saldo = readlinesync.questionFloat();

        switch(tipo){
          case 1:
            console.log("Digite o Limite disponivel: ")
            limite = readlinesync.questionFloat("");
            contas.cadastrar(
              new ContaCorrente(contas.gerarNumero(), agencia, tipo, titular, saldo, limite));
            break;
        
          case 2:
            console.log("Digite o dia do aniversario do titular: ")
            aniversario = readlinesync.questionInt("");
            contas.cadastrar(
              new ContaPoupanca(contas.gerarNumero(), agencia, tipo, titular, saldo, aniversario));            
            break;        
        }

      keyPress();
      console.clear();
      break;

    case 2:
      console.log(colors.fg.whitestrong,
        "\nListar Todas as Contas\n", colors.reset);    
        console.clear();
        contas.listarTodos();
        
      keyPress();
      console.clear();
      break;

    case 3:
      console.log(colors.fg.whitestrong,
        "\nBuscar Conta por Numero\n", colors.reset);    
          
          console.log('Digite o numero da conta: ');
          numero = readlinesync.questionInt('');
          contas.buscarPorNumero(numero);

      keyPress();
      console.clear();
      break;

    case 4:
      console.log(colors.fg.whitestrong,
        "\nAtualizar Dados da Conta\n", colors.reset);    
        
        console.log("Digite o numero da conta");
        numeroAt = readlinesync.questionInt("");

        let conta = contas.buscarNoArray(numeroAt);
        
        if(conta != null){

          console.log("Digite o numero da Agencia: ");
          agencia = readlinesync.questionInt("");

          console.log("Digite o nome do Titular da conta: ");
          titular = readlinesync.question("");        

          tipo = conta.tipo;

          console.log("Digite o saldo da conta(R$): ");
          saldo = readlinesync.questionFloat();

          switch(tipo){
            case 1:
              console.log("Digite o Limite disponivel: ")
              limite = readlinesync.questionFloat("");
              contas.atualizar(
                new ContaCorrente(numeroAt, agencia, tipo, titular, saldo, limite));
              break;
          
            case 2:
              console.log("Digite o dia do aniversario do titular: ")
              aniversario = readlinesync.questionInt("");
              contas.atualizar(
                new ContaPoupanca(numeroAt, agencia, tipo, titular, saldo, aniversario));            
              break;        
          }
        }else{
            console.log(`${colors.fg.red} \nA Conta de numero: ${numero} não foi encontrada! ${colors.reset}`);
        }

      keyPress();
      console.clear();
      break;

    case 5:
      console.log(colors.fg.whitestrong,
        "\nApagar Conta\n", colors.reset);    
        
        console.log('Digite o numero da conta a ser apagada: ');
        numero = readlinesync.questionInt('');
        contas.deletar(numero);

      keyPress();
      console.clear();
      break;

    case 6:
      console.log(colors.fg.whitestrong,
        "\nSacar\n", colors.reset);    
      
        console.log('Digite o numero da conta: ');
        numero = readlinesync.questionInt("");
        console.log('Digite o valor do saque R$: ');
        valor = readlinesync.questionFloat("");

        contas.sacar(numero,valor);
        

      keyPress();
      console.clear();
      break;

    case 7:
      console.log(colors.fg.whitestrong,
        "\nDepositar\n", colors.reset);

        console.log('Digite o numero da conta: ');
        numero = readlinesync.questionInt("");
        console.log('Digite o valor a depositar R$: ');
        valor = readlinesync.questionFloat("");

        contas.depositar(numero,valor);        
      
      keyPress();
      console.clear();
      break;

    case 8:
      console.log(colors.fg.whitestrong,
        "\nTransferir Valores Entre Contas\n", colors.reset);    
        
        console.log('Digite o numero da conta de Origem: ');
        numero = readlinesync.questionInt("");
        
        console.log('Digite o numero da conta de Destino: ');
        numeroDestino = readlinesync.questionInt("");

        console.log('Digite o valor a depositar R$: ');
        valor = readlinesync.questionFloat("");

        contas.transferir(numero,numeroDestino,valor);

      keyPress();
      console.clear();
      break;

    default:
      console.log(colors.fg.whitestrong,
        "\nA opcao digitada e invalida\n", colors.reset);    
      
      keyPress();
      console.clear();
      break;  
    }
  }  
}


function keyPress(): void {
  console.log(colors.reset, "");
  console.log("\nPressione enter para continuar...");
  readlinesync.prompt();
}


export function sobre(){
  console.log("\n*****************************************************");
  console.log("Projeto Desenvolvido por: Douglas Santos");
  console.log("Douglas Santos - DouglasSantosWrk@hotmail.com");
  console.log("github.com/DougSan7");
  console.log("*****************************************************");
}

main();
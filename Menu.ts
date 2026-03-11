import readlinesync = require("readline-sync");
import { colors } from "./src/util/Colors";
import { Conta } from "./src/model/Conta";
import { ContaCorrente } from "./src/model/ContaCorrente";
import { ContaPoupanca } from "./src/model/ContaPoupanca";

export function main() {

  let opcao: number;
  // Testando as classes Corrente e Poupança.
  const conta: Conta = new Conta(1,1,1,'Douglas S.',1000);
  conta.visualizar();
  conta.sacar(500);
  conta.visualizar();
  conta.depositar(1000);
  conta.visualizar();

  const contaCorrente: ContaCorrente = new ContaCorrente(2,2,1,'Edvania M',2000,4000);
  contaCorrente.visualizar();
  contaCorrente.sacar(9000);
  contaCorrente.visualizar();
  contaCorrente.depositar(3000);
  contaCorrente.visualizar();

  const contaPoupanca: ContaPoupanca = new ContaPoupanca(2,2,2,'Clove S.',3000,10);
  contaPoupanca.visualizar();
  contaPoupanca.sacar(2000);
  contaPoupanca.visualizar();
  contaPoupanca.depositar(3000);
  contaPoupanca.visualizar();


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
        "\n\nCriar Conta\n\n", colors.reset);    
      
      keyPress();
      break;

    case 2:
      console.log(colors.fg.whitestrong,
        "\n\nListar Todas as Contas\n\n", colors.reset);    
      
      keyPress();
      break;

    case 3:
      console.log(colors.fg.whitestrong,
        "\n\nBuscar Conta por Numero\n\n", colors.reset);    
      
      keyPress();
      break;

    case 4:
      console.log(colors.fg.whitestrong,
        "\n\Atualizar Dados da Conta\n\n", colors.reset);    
      
      keyPress();
      break;

    case 5:
      console.log(colors.fg.whitestrong,
        "\n\nApagar Conta\n\n", colors.reset);    
      
      keyPress();
      break;

    case 6:
      console.log(colors.fg.whitestrong,
        "\n\nSacar\n\n", colors.reset);    
      
      keyPress();
      break;

    case 7:
      console.log(colors.fg.whitestrong,
        "\n\nDepositar\n\n", colors.reset);    
      
      keyPress();
      break;

    case 8:
      console.log(colors.fg.whitestrong,
        "\n\nTransferir Valores Entre Contas\n\n", colors.reset);    
      
      keyPress();
      break;

    default:
      console.log(colors.fg.whitestrong,
        "\n\nCriar Conta\n\n", colors.reset);    
      
      keyPress();
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
import readlinesync = require("readline-sync");
import { colors } from "./src/util/Colors";
import { Conta } from "./src/model/Conta";

export function main() {

  let opcao: number;
// instanciando os objs com a clas Conta
  const conta0: Conta = new Conta(0,1,1,'Douglas Santos',2500);
  conta0.visualizar();
  conta0.sacar(1000);
  conta0.visualizar();
  conta0.depositar(500);
  conta0.visualizar();
  
  const conta1: Conta = new Conta(1,2,1,"Edvania Maria", 5200);
  conta1.visualizar();
  conta1.sacar(350);
  conta1.visualizar();  

  const conta2: Conta = new Conta(2,1,1,"Clove Aparecido", 5000);
  conta2.visualizar(); 
  conta2.depositar(1200);
  conta2.visualizar();


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
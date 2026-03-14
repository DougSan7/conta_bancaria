import { Conta } from "../model/Conta";
import { ContaRepository } from "../Repository/ContaReposity";
import { colors } from "../util/Colors";


export class ContaController implements ContaRepository{
  
  private listaContas: Array<Conta> = new Array<Conta>;
  numero:number = 0;



  buscarPorNumero(numero: number): void {
    
    let buscaConta = this.buscarNoArray(numero);

    if (buscaConta != null){
        buscaConta.visualizar();
    }else{
      console.log(colors.fg.red, `\nA Conta de numero: ${numero} não foi encontrada!`, colors.reset);
    }
  }
  
  listarTodos(): void {
    
    console.log("Lista de todas as contas registradas!\n");
    
    let buscaConta = this.buscarNoArray(this.numero); 
    
    if (buscaConta != null){ 
      for(let conta of this.listaContas){
        conta.visualizar();
      }  
    }else{
      console.log("Não ha contas cadastradas!");
    }
  }  
  
  cadastrar(conta: Conta): void {
    
    this.listaContas.push(conta);
    console.log(colors.fg.green, "\n Conta numero:" + conta.numero + " foi criada com sucesso!", colors.reset);
    
  }

  atualizar(conta: Conta): void {

    let buscaConta = this.buscarNoArray(conta.numero); 

    if (buscaConta != null) {
      this.listaContas [this.listaContas.indexOf(buscaConta)] = conta;
        console.log(`${colors.fg.green} \nA Conta de numero: ${conta.numero} foi atualizada com sucesso! ${colors.reset}`);
    } else{
      console.log(`${colors.fg.red} \nA Conta de numero:  ${conta.numero} 
      não foi encontrada! ${colors.reset}`);
    }  
  }
  
  deletar(numero: number): void {
    let buscaConta = this.buscarNoArray(numero);

    if(buscaConta != null){
      this.listaContas.splice(this.listaContas.indexOf(buscaConta),1);
      console.log(`${colors.fg.green} \nA conta de numero: ${numero} foi apagada com sucesso! ${colors.reset}`);
    }else{
      console.log(`${colors.fg.red} \nA Conta de numero:  ${numero} 
      não foi encontrada! ${colors.reset}`);
    }
    
  }

  sacar(numero: number, valor: number): void {
    
    let conta = this.buscarNoArray(numero);
    
    if(conta != null){
      if(conta.sacar(valor) == true ){
        console.log(`${colors.fg.green} Saque da Conta: ${numero} foi efetuado com sucesso ${colors.reset}`);
      }
    }else{
      console.log(`${colors.fg.red} A conta numero: ${numero} não foi encontrado ${colors.reset}` );
    }
  }

  depositar(numero: number, valor: number): boolean {
    let conta = this.buscarNoArray(numero);

    if(valor < 0){
      console.log(`${valor} E negativo, nao e possivel realizar o saque`);
      return false;
    }
    if (conta!= null){
      conta.depositar(valor);
      console.log(`${colors.fg.green} Deposito na Conta: ${numero} foi efetuado com sucesso ${colors.reset}`);
      return true;    
    
    }else{
      console.log(`${colors.fg.red} A conta numero: ${numero} não foi encontrado${colors.reset}`);
      return false;      
    }

  }

  transferir(numeroOrigem: number, numeroDestino: number, valor: number): void {
    let contaOrigem = this.buscarNoArray(numeroOrigem);
    let contaDestino = this.buscarNoArray(numeroDestino);
    if(contaOrigem != null && contaDestino != null){
        
      if(contaOrigem.sacar(valor) == true){
          contaDestino.depositar(valor);
          console.log(`${colors.fg.green} \nTransferencia da Conta ${numeroOrigem} para a conta ${numeroDestino}, foi efetuada com sucesso!`)
        }
    }else{
      console.log(`${colors.fg.red} A conta numero: ${numeroOrigem} e/ou a conta ${numeroDestino} nao foi encontrado${colors.reset}`); 
    }
  }




  public buscarNoArray(numero: number | null): Conta | null{
    
    for (let conta of this.listaContas){
      if (conta.numero === numero)
        return conta;
    }
    return null;
  }


  public gerarNumero(): number{
    return ++ this.numero;
  }



}
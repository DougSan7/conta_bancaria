import { Conta } from "../model/Conta";
import { ContaRepository } from "../Repository/ContaReposity";
import { colors } from "../util/Colors";


export class ContaController implements ContaRepository{
  
  private listaContas: Array<Conta> = new Array<Conta>;
  numero:number = 0;

  procurarPorNumero(numero: number): void {
    

    
    throw new Error("Method not implemented.");
  }
  listarTodos(): void {
    
    console.log("Lista de todas as contas registradas!\n");
    for(let conta of this.listaContas){
      conta.visualizar();
    }
  }
  cadastrar(conta: Conta): void {
    
    this.listaContas.push(conta);
    console.log(colors.fg.green, "\n Conta numero:" + conta.numero + " foi criada com sucesso!", colors.reset);
    
  }
  atualizar(conta: Conta): void {
    throw new Error("Method not implemented.");
  }
  deletar(numero: number): void {
    throw new Error("Method not implemented.");
  }
  sacar(numero: number, valor: number): void {
    throw new Error("Method not implemented.");
  }
  depositar(numero: number, valor: number): void {
    throw new Error("Method not implemented.");
  }
  transferir(numeroOrigem: number, numeroDestino: number, valor: number): void {
    throw new Error("Method not implemented.");
  }

  public gerarNumero(): number{
    return ++ this.numero;
  }



}
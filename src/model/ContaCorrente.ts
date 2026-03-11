import { Conta } from "./Conta";

export class ContaCorrente extends Conta{

  private _limite: number;

  constructor(numero:number, agencia:number, tipo: number, titular:string, saldo:number, limite:number){
    super(numero, agencia, tipo, titular, saldo);
    this._limite = limite;
  }
 
  public get limite(){
    return this._limite;
  }
  public set limite(limite:number){
    this._limite = limite;
  }


  public sacar(valor:number): boolean {
    
    if((this.saldo + this._limite) < valor){
      console.log(`Saldo Insuficiente, o valor ${valor.toFixed(2)} supera o valor em conta`);
      return false;
    }
    this.saldo = this.saldo - valor;
    return true;
  }

  
  public visualizar(): void{
    super.visualizar();
    console.log("Limite disponivel: " + this._limite.toFixed(2))
  }
}
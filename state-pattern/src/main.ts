import { Pedido } from "./Pedido";

class Main {
  static main(): void {
    const pedido = new Pedido();
    pedido.preparar();
    pedido.iniciarEntrega();
    pedido.finalizarEntrega();

    console.log(pedido);
  }
}

Main.main();

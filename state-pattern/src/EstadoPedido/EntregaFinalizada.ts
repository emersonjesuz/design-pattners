import { Pedido } from "../Pedido";
import { EstadoPedido } from "./EstadoPedido";

export class EntregaFinalizada implements EstadoPedido {
  preparar(pedido: Pedido): void {
    throw new Error("Pedido já foi entregue ao cliente");
  }
  iniciarEntrega(pedido: Pedido): void {
    throw new Error("Pedido já foi entregue ao cliente");
  }
  finalizarEntrega(pedido: Pedido): void {
    throw new Error("Pedido já foi entregue ao cliente");
  }
}

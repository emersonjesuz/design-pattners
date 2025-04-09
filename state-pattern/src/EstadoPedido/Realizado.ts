import { Pedido } from "../Pedido";
import { EstadoPedido } from "./EstadoPedido";
import { Preparando } from "./Preparando";

export class Realizado implements EstadoPedido {
  preparar(pedido: Pedido): void {
    pedido.setEstado(new Preparando());
  }
  iniciarEntrega(pedido: Pedido): void {
    throw new Error("Pedido ainda não foi preparado.");
  }
  finalizarEntrega(pedido: Pedido): void {
    throw new Error("Pedido ainda não foi preparado.");
  }
}

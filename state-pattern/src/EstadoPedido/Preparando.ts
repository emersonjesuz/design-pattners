import { Pedido } from "../Pedido";
import { EntregaIniciada } from "./EntregaIniciada";
import { EstadoPedido } from "./EstadoPedido";

export class Preparando implements EstadoPedido {
  preparar(pedido: Pedido): void {
    throw new Error("Pedido está sendo preparado");
  }
  iniciarEntrega(pedido: Pedido): void {
    pedido.setEstado(new EntregaIniciada());
  }
  finalizarEntrega(pedido: Pedido): void {
    throw new Error(
      "Pedido não pode ser finalizado pois ainda esta sendo preparado"
    );
  }
}

import { Pedido } from "../Pedido";
import { EntregaFinalizada } from "./EntregaFinalizada";
import { EstadoPedido } from "./EstadoPedido";

export class EntregaIniciada implements EstadoPedido {
  preparar(pedido: Pedido): void {
    throw new Error("Pedido ja foi preparado");
  }
  iniciarEntrega(pedido: Pedido): void {
    throw new Error("pedido ja saiu para o cliente");
  }
  finalizarEntrega(pedido: Pedido): void {
    pedido.setEstado(new EntregaFinalizada());
  }
}

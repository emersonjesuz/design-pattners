import { Pedido } from "../Pedido";

export interface EstadoPedido {
  preparar(pedido: Pedido): void;
  iniciarEntrega(pedido: Pedido): void;
  finalizarEntrega(pedido: Pedido): void;
}

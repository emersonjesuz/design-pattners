import { EstadoPedido } from "./EstadoPedido/EstadoPedido";
import { Realizado } from "./EstadoPedido/Realizado";

export class Pedido {
  constructor(private EstadoPedido: EstadoPedido = new Realizado()) {}

  public setEstado(estado: EstadoPedido) {
    this.EstadoPedido = estado;
  }

  public preparar(): void {
    this.EstadoPedido.preparar(this);
  }

  public iniciarEntrega(): void {
    this.EstadoPedido.iniciarEntrega(this);
  }

  public finalizarEntrega(): void {
    this.EstadoPedido.finalizarEntrega(this);
  }
}

import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";


@Entity('pedido_producto')
export class PedidoProducto{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    pedidoID: string;

    @Column()
    productoID:string;

    @Column()
    cantidad:number;

    @ManyToOne(()=>Pedido,(ped)=>ped.pedidoProducto)
    pedido:Pedido

    @ManyToOne(()=>Producto,(pro)=>pro.pedidoProducto)
    producto:Producto
}
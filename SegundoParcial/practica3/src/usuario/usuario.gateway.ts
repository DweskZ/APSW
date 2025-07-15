import {
  WebSocketGateway,
  WebSocketServer,
  SubscribeMessage,
  MessageBody,
} from '@nestjs/websockets';
import { Server } from 'socket.io';
import { UsuarioService } from './usuario.service';
import { Usuario } from './entities/usuario.entity';

@WebSocketGateway({ cors: true, namespace: 'usuario' })
export class UsuarioGateway {
  @WebSocketServer() wss: Server;

  constructor(private readonly svc: UsuarioService) {}

  @SubscribeMessage('createUsuario')
  async handleCreate(@MessageBody() dto: Partial<Usuario>) {
    await this.svc.create(dto);
    const all = await this.svc.findAll();
    this.wss.emit('usuarioCreated', all);
  }

  @SubscribeMessage('listUsuarios')
  async handleList() {
    return this.svc.findAll();
  }

  @SubscribeMessage('updateUsuario')
  async handleUpdate(@MessageBody() payload: { id: string } & Partial<Usuario>) {
    const { id, ...dto } = payload;
    await this.svc.update(id, dto);
    this.wss.emit('usuarioUpdated', await this.svc.findAll());
  }

  @SubscribeMessage('deleteUsuario')
  async handleDelete(@MessageBody() id: string) {
    await this.svc.remove(id);
    this.wss.emit('usuarioDeleted', await this.svc.findAll());
  }
}

import {
  WebSocketGateway,
  WebSocketServer,
  SubscribeMessage,
  MessageBody,
} from '@nestjs/websockets';
import { Server } from 'socket.io';
import { CalificacionService } from './calificacion.service';

@WebSocketGateway({ cors: true, namespace: 'calificacion' })
export class CalificacionGateway {
  @WebSocketServer() wss: Server;

  constructor(private svc: CalificacionService) {}

  @SubscribeMessage('createCalificacion')
  async handleCreate(@MessageBody() dto: any) {
    await this.svc.create(dto);
    const all = await this.svc.findAll();
    this.wss.emit('calificacionCreated', all);
  }

  @SubscribeMessage('listCalificaciones')
  async handleList() {
    return this.svc.findAll();
  }

  @SubscribeMessage('updateCalificacion')
  async handleUpdate(@MessageBody() dto: any) {
    await this.svc.update(dto.id, dto);
    this.wss.emit('calificacionUpdated', await this.svc.findAll());
  }

  @SubscribeMessage('deleteCalificacion')
  async handleDelete(@MessageBody() id: string) {
    await this.svc.remove(id);
    this.wss.emit('calificacionDeleted', await this.svc.findAll());
  }
}

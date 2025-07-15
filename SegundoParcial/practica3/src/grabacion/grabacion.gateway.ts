import {
  WebSocketGateway,
  WebSocketServer,
  SubscribeMessage,
  MessageBody,
} from '@nestjs/websockets';
import { Server } from 'socket.io';
import { GrabacionService } from './grabacion.service';
import { Grabacion } from './entities/grabacion.entity';

@WebSocketGateway({ cors: true, namespace: 'grabacion' })
export class GrabacionGateway {
  @WebSocketServer() wss: Server;

  constructor(private readonly svc: GrabacionService) {}

  @SubscribeMessage('createGrabacion')
  async handleCreate(@MessageBody() dto: Partial<Grabacion>) {
    await this.svc.create(dto);
    const all = await this.svc.findAll();
    this.wss.emit('grabacionCreated', all);
  }

  @SubscribeMessage('listGrabaciones')
  async handleList() {
    return this.svc.findAll();
  }

  @SubscribeMessage('updateGrabacion')
  async handleUpdate(@MessageBody() payload: { id: string } & Partial<Grabacion>) {
    const { id, ...dto } = payload;
    await this.svc.update(id, dto);
    this.wss.emit('grabacionUpdated', await this.svc.findAll());
  }

  @SubscribeMessage('deleteGrabacion')
  async handleDelete(@MessageBody() id: string) {
    await this.svc.remove(id);
    this.wss.emit('grabacionDeleted', await this.svc.findAll());
  }
}

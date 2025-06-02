import { Entity, PrimaryGeneratedColumn, Column} from 'typeorm';

@Entity('Serie')
export class Serie {
  @PrimaryGeneratedColumn()
  id: bigint;

  @Column('text', { unique: true })
  name: string;

  @Column('text', { nullable: true })
  description: string;
}
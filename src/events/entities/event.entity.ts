import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index(['name', 'type']) // Add index for search performance
@Entity()
export class Event {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  type: string;

  @Column()
  name: string;

  @Column('json')
  payload: Record<string, any>;
}

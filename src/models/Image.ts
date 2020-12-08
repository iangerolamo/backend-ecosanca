import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import Ecorecycle from './Ecorecycle';

@Entity('images')
export default class Image {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  path: string;

  @ManyToOne(() => Ecorecycle, ecorecycle => ecorecycle.images)
  @JoinColumn({ name: 'ecorecycle_id' })
  ecorecycle: Ecorecycle;
}
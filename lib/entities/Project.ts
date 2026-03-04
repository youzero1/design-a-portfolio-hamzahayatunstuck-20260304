import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';

@Entity()
export class Project {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  imageUrl: string;

  @Column('simple-array')
  technologies: string[];

  @Column({ nullable: true })
  demoUrl: string;

  @Column({ nullable: true })
  githubUrl: string;

  @CreateDateColumn()
  createdAt: Date;
}
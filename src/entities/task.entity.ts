import { Column, Entity, Unique } from "typeorm";
import { BaseEntity } from '../config/base.entity';

@Entity({ name: 'task' })
@Unique(['title'])
export class TaskEntity extends BaseEntity {

    @Column()
    title!: string;

    @Column()
    description!: string;
}
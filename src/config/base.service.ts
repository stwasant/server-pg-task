import { BaseEntity } from './base.entity';
import { ConfigServer } from './config';
import { EntityTarget, ObjectLiteral, Repository } from 'typeorm';

export class BaseService<T extends BaseEntity> extends ConfigServer {

    public execRepository: Promise<Repository<T>>;

    constructor(private getEntity: EntityTarget<T>) {
        super();
        this.execRepository = this. initRepository(getEntity);
    }

     /**
      * Obtenmos de forma dinámica las entidade
      *
      * @template T
      * @param {EntityTarget<T>} entity
      * @return {*}  {Promise<Repository<T>>}
      * @memberof BaseService
      * */
    async initRepository<T extends ObjectLiteral>(entity: EntityTarget<T>): Promise<Repository<T>> {
        const getConnection = await this.dbConnection();
        return getConnection.getRepository(entity);

    }
}
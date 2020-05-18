import {DefaultCrudRepository} from '@loopback/repository';
import {Person, PersonRelations} from '../models';
import {Identity1DataSource} from '../datasources';
import {inject} from '@loopback/core';

export class PersonRepository extends DefaultCrudRepository<Person, typeof Person.prototype.id, PersonRelations> {
    constructor(
        @inject('datasources.identity1') dataSource: Identity1DataSource,
    ) {
        super(Person, dataSource);
    }
}

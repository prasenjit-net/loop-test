import {Entity, model, property} from '@loopback/repository';

@model({
    settings: {
        mysql: {
            table: 'person'
        }
    }
})
export class Person extends Entity {
    @property({
        type: 'number',
        id: true,
        generated: true,
    })
    id?: number;

    @property({
        type: 'string',
        required: true,
        mysql: {
            columnName: 'first_name',
        }
    })
    firstName: string;

    @property({
        type: 'string',
        mysql: {
            columnName: 'last_name',
        }
    })
    lastName?: string;


    constructor(data?: Partial<Person>) {
        super(data);
    }
}

export interface PersonRelations {
    // describe navigational properties here
}

export type PersonWithRelations = Person & PersonRelations;

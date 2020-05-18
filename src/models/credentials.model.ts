import {model, property} from '@loopback/repository';

/**
 * The model class is generated from OpenAPI schema - Credentials
 * Credentials
 */
@model({name: 'Credentials'})
export class Credentials {
    constructor(data?: Partial<Credentials>) {
        if (data != null && typeof data === 'object') {
            Object.assign(this, data);
        }
    }

    /**
     *
     */
    @property({
        required: true, jsonSchema: {
            type: 'string',
        }
    })
    username: string;

    /**
     *
     */
    @property({
        required: true, jsonSchema: {
            format: 'password',
            type: 'string',
        }
    })
    password: string;

}

export interface CredentialsRelations {
    // describe navigational properties here
}

export type CredentialsWithRelations = Credentials & CredentialsRelations;



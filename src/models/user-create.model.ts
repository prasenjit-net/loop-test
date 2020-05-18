import {model, property} from '@loopback/repository';

/**
 * The model class is generated from OpenAPI schema - UserCreate
 * UserCreate
 */
@model({name: 'UserCreate'})
export class UserCreate {
    constructor(data?: Partial<UserCreate>) {
        if (data != null && typeof data === 'object') {
            Object.assign(this, data);
        }
    }

    /**
     * Username to use for login
     */
    @property({
        required: true, jsonSchema: {
            description: 'Username to use for login',
            type: 'string',
        }
    })
    username: string;

    /**
     * Email address for communication
     */
    @property({
        required: true, jsonSchema: {
            description: 'Email address for communication',
            type: 'string',
        }
    })
    email: string;

    /**
     * Password for login
     */
    @property({
        required: true, jsonSchema: {
            description: 'Password for login',
            type: 'string',
        }
    })
    password: string;

    /**
     * First name of the user
     */
    @property({
        jsonSchema: {
            description: 'First name of the user',
            type: 'string',
        }
    })
    firstName?: string;

    /**
     * Last name of the user
     */
    @property({
        jsonSchema: {
            description: 'Last name of the user',
            type: 'string',
        }
    })
    lastName?: string;

}

export interface UserCreateRelations {
    // describe navigational properties here
}

export type UserCreateWithRelations = UserCreate & UserCreateRelations;



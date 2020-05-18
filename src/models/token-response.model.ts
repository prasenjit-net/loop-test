import {model, property} from '@loopback/repository';

/**
 * The model class is generated from OpenAPI schema - TokenResponse
 * A response which contains a login success token
 */
@model({name: 'TokenResponse'})
export class TokenResponse {
    constructor(data?: Partial<TokenResponse>) {
        if (data != null && typeof data === 'object') {
            Object.assign(this, data);
        }
    }

    /**
     * JWT token to be passed in further requests for getting access
     */
    @property({
        required: true, jsonSchema: {
            description: 'JWT token to be passed in further requests for getting access',
            type: 'string',
        }
    })
    token: string;

}

export interface TokenResponseRelations {
    // describe navigational properties here
}

export type TokenResponseWithRelations = TokenResponse & TokenResponseRelations;



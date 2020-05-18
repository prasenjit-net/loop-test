import {model, property} from '@loopback/repository';

/**
 * The model class is generated from OpenAPI schema - ErrorResponse
 * An object represents a error scenario
 */
@model({name: 'ErrorResponse'})
export class ErrorResponse {
    constructor(data?: Partial<ErrorResponse>) {
        if (data != null && typeof data === 'object') {
            Object.assign(this, data);
        }
    }

    /**
     * Http erro status code
     */
    @property({
        required: true, jsonSchema: {
            format: 'int32',
            description: 'Http erro status code',
            type: 'integer',
            minimum: -2147483648,
            maximum: 2147483647,
        }
    })
    code: number;

    /**
     * Type of the error
     */
    @property({
        jsonSchema: {
            description: 'Type of the error',
            type: 'string',
        }
    })
    type?: string;

    /**
     * Error message
     */
    @property({
        required: true, jsonSchema: {
            description: 'Error message',
            type: 'string',
        }
    })
    message: string;

}

export interface ErrorResponseRelations {
    // describe navigational properties here
}

export type ErrorResponseWithRelations = ErrorResponse & ErrorResponseRelations;



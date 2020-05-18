import {api, operation, requestBody} from '@loopback/rest';
import {UserCreate, UserSummary} from '../models';

/**
 * The controller class is generated from OpenAPI spec with operations tagged
 * by user.
 *
 * User related operations
 */
@api({
    components: {
        schemas: {
            UserCreate: {
                required: [
                    'username',
                    'email',
                    'password',
                ],
                type: 'object',
                properties: {
                    username: {
                        description: 'Username to use for login',
                        type: 'string',
                    },
                    email: {
                        description: 'Email address for communication',
                        type: 'string',
                    },
                    password: {
                        description: 'Password for login',
                        type: 'string',
                    },
                    firstName: {
                        description: 'First name of the user',
                        type: 'string',
                    },
                    lastName: {
                        description: 'Last name of the user',
                        type: 'string',
                    },
                },
                example: {
                    username: 'admin',
                    email: 'admin@prasenjit.net',
                    password: 'password',
                    firstName: 'Admin',
                    lastName: 'Admin',
                },
            },
            ErrorResponse: {
                description: 'An object represents a error scenario',
                required: [
                    'code',
                    'message',
                ],
                type: 'object',
                properties: {
                    code: {
                        format: 'int32',
                        description: 'Http erro status code',
                        type: 'integer',
                    },
                    type: {
                        description: 'Type of the error',
                        type: 'string',
                    },
                    message: {
                        description: 'Error message',
                        type: 'string',
                    },
                },
            },
            Credentials: {
                required: [
                    'username',
                    'password',
                ],
                type: 'object',
                properties: {
                    username: {
                        type: 'string',
                    },
                    password: {
                        format: 'password',
                        type: 'string',
                    },
                },
            },
            UserSummary: {
                description: 'A summary of a single user profile data',
                required: [
                    'email',
                    'username',
                ],
                type: 'object',
                properties: {
                    username: {
                        description: 'Username to use for login',
                        type: 'string',
                    },
                    email: {
                        description: 'Email address for communication',
                        type: 'string',
                    },
                    firstName: {
                        description: 'First name of the user',
                        type: 'string',
                    },
                    lastName: {
                        description: 'Last name of the user',
                        type: 'string',
                    },
                },
                example: {
                    username: 'admin',
                    email: 'admin@prasenjit.net',
                    firstName: 'Admin',
                    lastName: 'Admin',
                },
            },
            TokenResponse: {
                title: 'Root Type for TokenResponse',
                description: 'A response which contains a login success token',
                required: [
                    'token',
                ],
                type: 'object',
                properties: {
                    token: {
                        description: 'JWT token to be passed in further requests for getting access',
                        type: 'string',
                    },
                },
                example: {
                    token: 'some.jwt.token',
                },
            },
        },
        securitySchemes: {
            'token-security': {
                type: 'apiKey',
                description: 'A simple sort lived token security in the form of JWT.',
                name: 'token',
                in: 'header',
            },
        },
    },
    paths: {},
})
export class UserController {
    constructor() {
    }

    /**
     * List all available users
     *
     * @returns User list success response
     */
    @operation('get', '/user', {
        tags: [
            'user',
        ],
        responses: {
            '200': {
                content: {
                    'application/json': {
                        schema: {
                            type: 'array',
                            items: {
                                $ref: '#/components/schemas/UserSummary',
                            },
                        },
                    },
                },
                description: 'User list success response',
            },
            '400': {
                content: {
                    'application/json': {
                        schema: {
                            $ref: '#/components/schemas/ErrorResponse',
                        },
                    },
                },
                description: 'Invalid data',
            },
        },
        security: [
            {
                'token-security': [],
            },
        ],
        operationId: 'listUsers',
        summary: 'List Users',
        description: 'List all available users',
    })
    async listUsers(): Promise<UserSummary[]> {
        throw new Error('Not implemented');
    }

    /**
     * Create new user, later can be used for authentication
     *
     * @param _requestBody Create a User Request
     * @returns User successfully created
     */
    @operation('post', '/user', {
        requestBody: {
            description: 'Create a User Request',
            content: {
                'application/json': {
                    schema: {
                        $ref: '#/components/schemas/UserCreate',
                    },
                },
            },
            required: true,
        },
        tags: [
            'user',
        ],
        responses: {
            '201': {
                content: {
                    'application/json': {
                        schema: {
                            $ref: '#/components/schemas/UserSummary',
                        },
                    },
                },
                description: 'User successfully created',
            },
            '400': {
                content: {
                    'application/json': {
                        schema: {
                            $ref: '#/components/schemas/ErrorResponse',
                        },
                    },
                },
                description: 'If invalid request is provided',
            },
        },
        security: [
            {
                'token-security': [],
            },
        ],
        operationId: 'createUser',
        summary: 'Create User',
        description: 'Create new user, later can be used for authentication',
    })
    async createUser(@requestBody({
        description: 'Create a User Request',
        content: {
            'application/json': {
                schema: {
                    $ref: '#/components/schemas/UserCreate',
                },
            },
        },
        required: true,
    }) _requestBody: UserCreate): Promise<UserSummary> {
        throw new Error('Not implemented');
    }

}


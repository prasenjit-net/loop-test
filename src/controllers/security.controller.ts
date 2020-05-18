import {api, operation, requestBody} from '@loopback/rest';
import {Credentials, TokenResponse, UserSummary} from '../models';

/**
 * The controller class is generated from OpenAPI spec with operations tagged
 * by security.
 *
 * A Security related operations
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
export class SecurityController {
    constructor() {
    }

    /**
     * Return the current user who is logged in
     *
     * @returns Success Response
     */
    @operation('get', '/user/me', {
        tags: [
            'security',
        ],
        responses: {
            '200': {
                content: {
                    'application/json': {
                        schema: {
                            $ref: '#/components/schemas/UserSummary',
                        },
                    },
                },
                description: 'Success Response',
            },
            '401': {
                content: {
                    'application/json': {
                        schema: {
                            $ref: '#/components/schemas/ErrorResponse',
                        },
                        examples: {
                            'un authorized': {
                                value: {
                                    code: 401,
                                    type: 'error',
                                    message: 'Invalid Credentials',
                                },
                            },
                        },
                    },
                },
                description: 'Erro when no authentication token provided',
            },
        },
        security: [
            {
                'token-security': [],
            },
        ],
        operationId: 'getMe',
        summary: 'Get Current User',
        description: 'Return the current user who is logged in',
    })
    async getMe(): Promise<UserSummary> {
        throw new Error('Not implemented');
    }

    /**
     * Log in with user credentials and get a token
     *
     * @param _requestBody Login request body
     * @returns Login Success
     */
    @operation('post', '/login', {
        requestBody: {
            description: 'Login request body',
            content: {
                'application/json': {
                    schema: {
                        $ref: '#/components/schemas/Credentials',
                    },
                },
            },
            required: true,
        },
        tags: [
            'security',
        ],
        responses: {
            '200': {
                content: {
                    'application/json': {
                        schema: {
                            $ref: '#/components/schemas/TokenResponse',
                        },
                        examples: {
                            success: {
                                value: {
                                    token: 'valid.jwt.token',
                                },
                            },
                        },
                    },
                },
                description: 'Login Success',
            },
            '401': {
                content: {
                    'application/json': {
                        schema: {
                            $ref: '#/components/schemas/ErrorResponse',
                        },
                        examples: {
                            invalid: {
                                value: {
                                    code: 401,
                                    type: 'error',
                                    message: 'Invalid Credentials',
                                },
                            },
                            missing: {
                                value: {
                                    code: 401,
                                    type: 'error',
                                    message: 'Missing Credentials',
                                },
                            },
                        },
                    },
                },
                description: 'Login Failed',
            },
        },
        security: [
            {},
        ],
        operationId: 'login',
        summary: 'Login',
        description: 'Log in with user credentials and get a token',
    })
    async login(@requestBody({
        description: 'Login request body',
        content: {
            'application/json': {
                schema: {
                    $ref: '#/components/schemas/Credentials',
                },
            },
        },
        required: true,
    }) _requestBody: Credentials): Promise<TokenResponse> {
        throw new Error('Not implemented');
    }

    /**
     * Logout from the system
     *
     */
    @operation('delete', '/login', {
        tags: [
            'security',
        ],
        responses: {
            '200': {
                description: 'Logout Success',
            },
        },
        security: [
            {
                'token-security': [],
            },
        ],
        operationId: 'logout',
        summary: 'Logout',
        description: 'Logout from the system',
    })
    async logout(): Promise<unknown> {
        throw new Error('Not implemented');
    }

}


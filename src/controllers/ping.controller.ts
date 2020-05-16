import {get, Request, ResponseObject, RestBindings} from '@loopback/rest';
import {inject} from '@loopback/context';
import {authenticate} from "@loopback/authentication";
import {SecurityBindings, UserProfile} from '@loopback/security';
import {authorize} from '@loopback/authorization';

/**
 * OpenAPI response for ping()
 */
const PING_RESPONSE: ResponseObject = {
    description: 'Ping Response',
    content: {
        'application/json': {
            schema: {
                type: 'object',
                title: 'PingResponse',
                properties: {
                    greeting: {type: 'string'},
                    date: {type: 'string'},
                    url: {type: 'string'},
                    headers: {
                        type: 'object',
                        properties: {
                            'Content-Type': {type: 'string'},
                        },
                        additionalProperties: true,
                    },
                },
            },
        },
    },
};

/**
 * A simple controller to bounce back http requests
 */
export class PingController {
    constructor(@inject(RestBindings.Http.REQUEST) private req: Request, @inject(SecurityBindings.USER)
    private userProfile: UserProfile,) {
    }

    // Map to `GET /ping`
    @get('/ping', {
        responses: {
            '200': PING_RESPONSE,
        },
    })
    @authenticate('basic')
    @authorize({allowedRoles: ['BASIC']})
    ping(): object {
        // Reply with a greeting, the current time, the url, and request headers
        return {
            greeting: 'Hello from LoopBack',
            date: new Date(),
            url: this.req.url,
            headers: Object.assign({}, this.req.headers),
        };
    }
}

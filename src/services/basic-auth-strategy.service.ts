import {AuthenticationStrategy} from "@loopback/authentication";
import {securityId, UserProfile} from '@loopback/security';
import {HttpErrors, Request} from "@loopback/rest";

export interface Credentials {
    username: string;
    password?: string;
}

export class BasicAuthStrategyService implements AuthenticationStrategy {
    name = 'basic';
    unAuthorized: Error = {name: 'Unauthorized', message: 'Unauthorized'};

    constructor() {
    }

    async authenticate(request: Request): Promise<UserProfile | undefined> {
        const credentials: Credentials = this.extractCredentials(request);

        if (credentials.username === credentials.password) {
            return {
                [securityId]: credentials.username,
                name: credentials.username,
            };
        } else {
            throw new HttpErrors.Unauthorized(`Invalid username or password.`);
        }
    }

    extractCredentials(request: Request): Credentials {
        if (!request.headers.authorization) {
            throw new HttpErrors.Unauthorized(`Authorization header not found.`);
        }

        // for example : Basic Z2l6bW9AZ21haWwuY29tOnBhc3N3b3Jk
        const authHeaderValue = request.headers.authorization;

        if (!authHeaderValue.startsWith('Basic ')) {
            throw new HttpErrors.Unauthorized(
                `Authorization header is not of type 'Basic'.`,
            );
        }

        //split the string into 2 parts. We are interested in the base64 portion
        const encryptedCredentails = authHeaderValue.replace('Basic ', '');

        // decrypt the credentials. Should look like :   'username:password'
        const decryptedCredentails = Buffer.from(encryptedCredentails, 'base64').toString('utf8');

        //split the string into 2 parts
        const decryptedParts = decryptedCredentails.split(':');

        if (decryptedParts.length !== 2) {
            throw new HttpErrors.Unauthorized(
                `Authorization header 'Basic' value does not contain two parts separated by ':'.`,
            );
        }

        return {
            username: decryptedParts[0],
            password: decryptedParts[1],
        };
    }
}

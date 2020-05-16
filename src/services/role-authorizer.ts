import {Provider} from "@loopback/context";
import {AuthorizationContext, AuthorizationDecision, AuthorizationMetadata, Authorizer} from "@loopback/authorization"

export class MyAuthorizationProvider implements Provider<Authorizer> {
    /**
     * @returns an authorizer function
     *
     */
    value(): Authorizer {
        return this.authorize.bind(this);
    }

    async authorize(context: AuthorizationContext, metadata: AuthorizationMetadata) {
        console.log('metadata', metadata);
        console.log('context', context);
        if (context.resource === 'OrderController.prototype.cancelOrder' &&
            context.principals[0].name === 'user-01') {
            return AuthorizationDecision.DENY;
        }
        return AuthorizationDecision.ALLOW;
    }
}
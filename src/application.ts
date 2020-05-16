import {BootMixin} from '@loopback/boot';
import {ApplicationConfig} from '@loopback/core';
import {RestExplorerBindings, RestExplorerComponent,} from '@loopback/rest-explorer';
import {RepositoryMixin} from '@loopback/repository';
import {RestApplication} from '@loopback/rest';
import {ServiceMixin} from '@loopback/service-proxy';
import path from 'path';
import {MySequence} from './sequence';
import {AuthenticationComponent, registerAuthenticationStrategy} from "@loopback/authentication";
import {
    AuthorizationBindings,
    AuthorizationComponent,
    AuthorizationDecision,
    AuthorizationOptions,
    AuthorizationTags
} from "@loopback/authorization";
import {BasicAuthStrategyService, MyAuthorizationProvider} from "./services";

export class LoopTestApplication extends BootMixin(
    ServiceMixin(RepositoryMixin(RestApplication)),
) {
    constructor(options: ApplicationConfig = {}) {
        super(options);

        // Set up the custom sequence
        this.sequence(MySequence);

        // Set up default home page
        this.static('/', path.join(__dirname, '../public'));

        // Customize @loopback/rest-explorer configuration here
        this.configure(RestExplorerBindings.COMPONENT).to({
            path: '/explorer',
        });
        this.component(RestExplorerComponent);

        // configure authentication
        registerAuthenticationStrategy(this, BasicAuthStrategyService);
        this.component(AuthenticationComponent);

        // configure authorization
        const authorizationOptions: AuthorizationOptions = {
            precedence: AuthorizationDecision.ALLOW,
            defaultDecision: AuthorizationDecision.ALLOW,
        };
        this.configure(AuthorizationBindings.COMPONENT).to(authorizationOptions);
        this.component(AuthorizationComponent);
        this.bind('authorizationProviders.my-provider')
            .toProvider(MyAuthorizationProvider)
            .tag(AuthorizationTags.AUTHORIZER);

        this.projectRoot = __dirname;
        // Customize @loopback/boot Booter Conventions here
        this.bootOptions = {
            controllers: {
                // Customize ControllerBooter Conventions here
                dirs: ['controllers'],
                extensions: ['.controller.js'],
                nested: true,
            },
        };
    }
}

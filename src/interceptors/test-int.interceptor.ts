// Copyright prasenjit.net 2020. All Rights Reserved.
// Node module: loop-test
// This file is licensed under the Apache License 2.0.
// License text available at http://www.apache.org/licenses/LICENSE-2.0

import {
    globalInterceptor,
    Interceptor,
    InvocationContext,
    InvocationResult,
    Provider,
    ValueOrPromise,
} from '@loopback/context';

/**
 * This class will be bound to the application as an `Interceptor` during
 * `boot`
 */
@globalInterceptor('auth', {tags: {name: 'TestInt'}})
export class TestIntInterceptor implements Provider<Interceptor> {
    /*
    constructor() {}
    */

    /**
     * This method is used by LoopBack context to produce an interceptor function
     * for the binding.
     *
     * @returns An interceptor function
     */
    value() {
        return this.intercept.bind(this);
    }

    /**
     * The logic to intercept an invocation
     * @param invocationCtx - Invocation context
     * @param next - A function to invoke next interceptor or the target method
     */
    async intercept(
        invocationCtx: InvocationContext,
        next: () => ValueOrPromise<InvocationResult>,
    ) {
        console.log('log: before- ' + invocationCtx.toJSON());
        try {
            // Add pre-invocation logic here
            const result = await next();
            // Add post-invocation logic here
            return result;
        } catch (err) {
            // Add error handling logic here
            throw err;
        }
    }
}

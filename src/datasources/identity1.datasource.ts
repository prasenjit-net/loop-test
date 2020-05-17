// Copyright prasenjit.net 2020. All Rights Reserved.
// Node module: loop-test
// This file is licensed under the Apache License 2.0.
// License text available at http://www.apache.org/licenses/LICENSE-2.0

import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
    name: 'identity1',
    connector: 'mysql',
    // url: 'jdbc:mysql://127.0.0.1:3306/db',
    host: '127.0.0.1',
    port: 3306,
    user: 'user',
    password: 'pass',
    database: 'db'
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class Identity1DataSource extends juggler.DataSource
    implements LifeCycleObserver {
    static dataSourceName = 'identity1';
    static readonly defaultConfig = config;

    constructor(
        @inject('datasources.config.identity1', {optional: true})
            dsConfig: object = config,
    ) {
        super(dsConfig);
    }

    start(): PromiseLike<void> | void {
    }
}

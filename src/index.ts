// Copyright prasenjit.net 2020. All Rights Reserved.
// Node module: loop-test
// This file is licensed under the Apache License 2.0.
// License text available at http://www.apache.org/licenses/LICENSE-2.0

import {LoopTestApplication} from './application';
import {ApplicationConfig} from '@loopback/core';

export {LoopTestApplication};

export async function main(options: ApplicationConfig = {}) {
  const app = new LoopTestApplication(options);
  await app.boot();
  await app.start();

  const url = app.restServer.url;
  console.log(`Server is running at ${url}`);
  console.log(`Try ${url}/ping`);

  return app;
}

// Copyright prasenjit.net 2020. All Rights Reserved.
// Node module: loop-test
// This file is licensed under the Apache License 2.0.
// License text available at http://www.apache.org/licenses/LICENSE-2.0

import {Client, expect} from '@loopback/testlab';
import {LoopTestApplication} from '../..';
import {setupApplication} from './test-helper';

describe('PingController', () => {
  let app: LoopTestApplication;
  let client: Client;

  before('setupApplication', async () => {
    ({app, client} = await setupApplication());
  });

  after(async () => {
    await app.stop();
  });

  it('invokes GET /ping', async () => {
    /*const res = */await client.get('/ping?msg=world').expect(401);
    // expect(res.body).to.containEql({greeting: 'Hello from LoopBack'});
  });
});

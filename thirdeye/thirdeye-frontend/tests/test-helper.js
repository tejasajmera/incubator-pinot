import Application from 'thirdeye-frontend/app';
import config from 'thirdeye-frontend/config/environment';
import { setApplication } from '@ember/test-helpers';
import { start } from 'ember-qunit';

setApplication(Application.create(config.APP));

start();

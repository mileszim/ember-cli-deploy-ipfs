'use strict';

const DeployPluginBase = require('ember-cli-deploy-plugin');

const RSVP = require('rsvp');
const IPFS = require('ipfs-core');

module.exports = {
  name: 'ember-cli-deploy-ipfs',

  createDeployPlugin: (options) => {
    const DeployPlugin = DeployPluginBase.extend({
      name: options.name,
    });
    return new DeployPlugin();
  }
};

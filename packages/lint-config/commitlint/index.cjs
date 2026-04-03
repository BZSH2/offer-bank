const fs = require('node:fs');
const path = require('node:path');

function readWorkspaceScopes(dirName) {
  const dir = path.resolve(__dirname, '..', '..', '..', dirName);
  if (!fs.existsSync(dir)) {
    return [];
  }

  return fs
    .readdirSync(dir, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name)
    .sort();
}

const scopes = [...readWorkspaceScopes('apps'), ...readWorkspaceScopes('packages')];

module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'scope-enum': [2, 'always', scopes],
    'subject-case': [0],
    'header-max-length': [2, 'always', 100]
  },
  prompt: {
    scopes
  }
};

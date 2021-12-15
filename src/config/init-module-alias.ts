const moduleAlias = require('module-alias');
const path = require('path');

const src = path.join(__dirname, '..');

moduleAlias.addAliases({
	'@src': src,
});

export {};

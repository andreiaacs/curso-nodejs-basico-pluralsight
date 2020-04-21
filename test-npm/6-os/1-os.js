const os = require('os');

console.log('\n\nOS plataform: ', os.platform());

console.log('\n\nOS CPU architecture: ', os.arch());

console.log('\n\n# of logical CPU cores: ', os.cpus().length);

console.log('\n\nHome directory for current user: ', os.homedir());

console.log('line 1 ' + os.EOL + ' line 2 ' + os.EOL + ' line 3 ');
const fs = require('fs')


process.argv.slice(2).forEach(function(argument){
	fs.mkdirSync(argument);
});

const fs = require('fs')

const fileList = ["app.js", "app.css", "index.html"];
fileList.forEach (function (file) {
	//console.log(file);
	fs.writeFileSync(file);
});

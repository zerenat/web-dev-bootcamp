const fs = require('fs')

const fileList = ["app.js", "app.css", "index.html"];
fileList.forEach (function (file) {
	fs.writeFileSync(file);
});

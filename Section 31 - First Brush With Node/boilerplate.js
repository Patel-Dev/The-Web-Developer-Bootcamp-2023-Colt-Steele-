const fs = require('fs')
const folderName = process.argv[2]

try {
    fs.mkdirSync(`${folderName}`)
    fs.writeFileSync(`${folderName}/index.html`, '')
    fs.writeFileSync(`${folderName}/app.js`, '')
    fs.writeFileSync(`${folderName}/styles.css`, '')
} catch (e) {
    console.log("ERROR OCCURED!")
    console.log(e)
}
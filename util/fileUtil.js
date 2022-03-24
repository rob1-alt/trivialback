const fs = require('fs')
const util = require('util')
const Duration = require('duration-js')

isFileTooOld = async function(filePath) {
    if (!fs.existsSync(filePath)) {
        return true
    }

    fs.stat(filePath, (err, stats) => {
        if (err) {
            throw err;
        }

        const fileDate = new Date(util.inspect(stats.mtime))
        const parsed = Duration.parse('1m')
        console.log(fileDate)
        console.log(parsed)
        console.log(new Date() - parsed > fileDate)
        return new Date() - parsed > fileDate
    })
}

module.exports = isFileTooOld;
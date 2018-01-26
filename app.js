var infectedDir = 'C:\\Users\\Mimi_en\\Desktop\\infected';
var cleanDir = 'C:\\Users\\Mimi_en\\Desktop\\clean';
var infectedFiles = [];
var cleanFiles = [];
var targetsMap = new Map();

var fs = require('fs');

//find infected files
var dirFiles = fs.readdirSync(infectedDir);
for (var i = 0; i < dirFiles.length; i++) {
    var file = dirFiles[i];
    if (fs.lstatSync(infectedDir + "\\" + file).isDirectory()) {
        var subInfectedDirs = [];
        subInfectedDirs.push(infectedDir + "\\" + file);
        while (subInfectedDirs.length > 0) {
            var subInfectedDir = subInfectedDirs[0];
            var subDirFiles = fs.readdirSync(subInfectedDir);
            for (var y = 0; y < subDirFiles.length; y++) {
                var subFile = subDirFiles[y];
                if (fs.lstatSync(subInfectedDir + "\\" + subFile).isDirectory()) {
                    subInfectedDirs.push(subInfectedDir + "\\" + subFile);
                } else {
                    if (String(subFile).endsWith('.wallet')) {
                        infectedFiles.push(subInfectedDir + "\\" + subFile);
                    }
                }
            }
            subInfectedDirs.shift();
        }
    } else {
        if (String(file).endsWith('.wallet')) {
            infectedFiles.push(infectedDir + "\\" + file);
        }
    }
}

console.log('Infected files: ');
console.log(infectedFiles);
console.log('============================');

var cleanDirFiles = fs.readdirSync(cleanDir);
for (var i = 0; i < cleanDirFiles.length; i++) {
    var file = cleanDirFiles[i];
    if (fs.lstatSync(cleanDir + "\\" + file).isDirectory()) {
        var subCleanDirs = [];
        subCleanDirs.push(cleanDir + "\\" + file);
        while (subCleanDirs.length > 0) {
            var subCleanDir = subCleanDirs[0];
            var subDirFiles = fs.readdirSync(subCleanDir);
            for (var y = 0; y < subDirFiles.length; y++) {
                var subFile = subDirFiles[y];
                if (fs.lstatSync(subCleanDir + "\\" + subFile).isDirectory()) {
                    subCleanDirs.push(subCleanDir + "\\" + subFile);
                } else {
                    cleanFiles.push(subCleanDir + "\\" + subFile);
                }
            }
            subCleanDirs.shift();
        }
    } else {
        cleanFiles.push(cleanDir + "\\" + file);
    }
}

//find targets files
infectedFiles.forEach(function (infectedFile) {
    cleanFiles.forEach(function (cleanFile, index) {
        var tempInfectedIndex = infectedFile.lastIndexOf("\\");
        var tempCleanIndex = cleanFile.lastIndexOf("\\");
        if (String(infectedFile).substring(tempInfectedIndex + 1).startsWith(String(cleanFile).substring(tempCleanIndex + 1))) {
            targetsMap.set(cleanFile, infectedFile);
            cleanFiles.splice(index, 1);
        }
    })
});
//
//copy clean files
console.log("cleaning" + targetsMap.size);
for (var [cleanFile, infectedFile] of targetsMap.entries()) {
    var tempInfectedIndex = String(infectedFile).lastIndexOf("\\");
    var tempCleanIndex = String(cleanFile).lastIndexOf("\\");
    var cleanFileNewPath = infectedFile.substring(0, tempInfectedIndex + 1) + cleanFile.substring(tempCleanIndex + 1);
    // console.log("==============================");
    // console.log("key: " + cleanFile);
    // console.log(cleanFileNewPath);
    // console.log("==============================");
    fs.createReadStream(cleanFile).pipe(fs.createWriteStream(cleanFileNewPath));
}

//delete infected files
for (var [cleanFile, infectedFile] of targetsMap.entries()) {
    fs.unlinkSync(infectedFile);
}

//list infected dir







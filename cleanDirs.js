var fs = require('fs');
var infectedDir = 'C:\\Users\\Mimi_en\\Desktop\\infected\\';
var infectedDirSub = 'C:\\Users\\Mimi_en\\Desktop\\infected\\subdir\\';
var infectedDirSubSub = 'C:\\Users\\Mimi_en\\Desktop\\infected\\subdir\\subsubdir\\';
var cleanDir = 'C:\\Users\\Mimi_en\\Desktop\\clean\\';
var cleanSubDir = 'C:\\Users\\Mimi_en\\Desktop\\clean\\subdir\\';
var cleanSubSubDir = 'C:\\Users\\Mimi_en\\Desktop\\clean\\subdir\\subsubdir\\';

var infectedFiles = [];
var cleanFiles = [];

if (!fs.existsSync(infectedDir)) {
    fs.mkdirSync(infectedDir);
}

if (!fs.existsSync(infectedDirSub)) {
    fs.mkdirSync(infectedDirSub);
}

if (!fs.existsSync(infectedDirSubSub)) {
    fs.mkdirSync(infectedDirSubSub);
}

if (!fs.existsSync(cleanDir)) {
    fs.mkdirSync(cleanDir);
}

if (!fs.existsSync(cleanSubDir)) {
    fs.mkdirSync(cleanSubDir);
}

if (!fs.existsSync(cleanSubSubDir)) {
    fs.mkdirSync(cleanSubSubDir);
}

fs.readdirSync(infectedDir).forEach(function (file) {
    if (fs.lstatSync(infectedDir + file).isFile()) {
        fs.unlinkSync(infectedDir + file);
    }
});

fs.readdirSync(infectedDirSub).forEach(function (file) {
    if (fs.lstatSync(infectedDirSub + file).isFile()) {
        fs.unlinkSync(infectedDirSub + file);
    }
});

fs.readdirSync(infectedDirSubSub).forEach(function (file) {
    if (fs.lstatSync(infectedDirSubSub + file).isFile()) {
        fs.unlinkSync(infectedDirSubSub + file);
    }
});

fs.readdirSync(cleanDir).forEach(function (file) {
    if (fs.lstatSync(cleanDir + file).isFile()) {
        fs.unlinkSync(cleanDir + file);
    }
});

fs.readdirSync(cleanSubDir).forEach(function (file) {
    if (fs.lstatSync(cleanSubDir + file).isFile()) {
        fs.unlinkSync(cleanSubDir + file);
    }
});

fs.readdirSync(cleanSubSubDir).forEach(function (file) {
    if (fs.lstatSync(cleanSubSubDir + file).isFile()) {
        fs.unlinkSync(cleanSubSubDir + file);
    }
});
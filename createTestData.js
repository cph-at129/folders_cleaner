var fs = require('fs');
var infectedDir = 'C:\\Users\\Mimi_en\\Desktop\\infected\\';
var infectedDirSub = 'C:\\Users\\Mimi_en\\Desktop\\infected\\subdir\\';
var infectedDirSubSub = 'C:\\Users\\Mimi_en\\Desktop\\infected\\subdir\\subsubdir\\';
var cleanDir = 'C:\\Users\\Mimi_en\\Desktop\\clean\\';
var cleanSubDir = 'C:\\Users\\Mimi_en\\Desktop\\clean\\subdir\\';
var cleanSubSubDir = 'C:\\Users\\Mimi_en\\Desktop\\clean\\subdir\\subsubdir\\';


var a = [1, 2, 3, 4];

a.forEach(function (x) {
    fs.writeFileSync(infectedDir + 'infected' + x + '.exe.wallet', '');
    fs.writeFileSync(infectedDir + 'other' + x + '.exe.wallet', '');
    fs.writeFileSync(infectedDirSub + 'subdir_infected' + x + '.exe.wallet', '');
    fs.writeFileSync(infectedDirSub + 'subdir_other' + x + '.exe.wallet', '');
    fs.writeFileSync(infectedDirSubSub + 'subsubdir_infected' + x + '.exe.wallet', '');
    fs.writeFileSync(infectedDirSubSub + 'subsubdir_other' + x + '.exe.wallet', '');
    fs.writeFileSync(cleanDir + 'infected' + x + '.exe', '');
    fs.writeFileSync(cleanSubDir + 'subdir_infected' + x + '.exe', '');
    fs.writeFileSync(cleanSubSubDir + 'subsubdir_infected' + x + '.exe', '');
});

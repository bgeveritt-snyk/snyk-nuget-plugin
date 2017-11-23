var parser = require('./lib');
var fs = require('fs');

parser
  .inspect(null, './test/stubs/dummy_project_2/obj/project.assets.json', {
    packageManager: 'nuget',
    packagesFolder: './test/stubs/dummy_project_2/_packages',
  })
  .then(function (result) {
    if (!result) {
      console.log('Error parsing ' + targetFile);
      process.exit(1);
    }
    console.log(JSON.stringify(result, '', 2));
    process.exit(0);
  })['catch'](function (err) {
    console.error(err);
  });
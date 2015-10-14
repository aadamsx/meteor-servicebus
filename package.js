Package.describe({
  summary: "Distrubuted service communication via servicebus architecture",
  version: "0.0.9",
  git: "https://github.com/electronifie/meteor-servicebus.git"
});

Npm.depends({
  "servicebus": "1.0.17"
});

Package.onUse(function(api) {
  api.addFiles('electronifiejs:servicebus.js', 'server');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('electronifiejs:servicebus');
  api.addFiles('electronifiejs:servicebus-tests.js', 'server');
});


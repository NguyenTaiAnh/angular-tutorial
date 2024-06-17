// karma.conf.js
module.exports = function(config) {
    config.set({
      // ... các cấu hình khác ...
  
      // Cấu hình framework
      frameworks: ['jasmine'],
  
      // Cấu hình file test cần chạy
      files: [
        'node_modules/@angular/core/testing.js',
        'node_modules/@angular/testing-zone.js',
        'node_modules/rxjs/bundles/rxjs.umd.min.js',
        'node_modules/@angular/platform-browser-dynamic/testing.js',
        // ... các file component và spec ...
      ],
  
      // Cấu hình preprocessors
      preprocessors: {
        '**/*.ts': ['ts-loader'],
      },
  
      // Cấu hình reporter
      reporters: ['progress'],
  
      // Cấu hình trình duyệt để test
      browsers: ['Chrome'],
  
      // Cấu hình single-run (chạy test một lần)
      singleRun: true,
    });
  };
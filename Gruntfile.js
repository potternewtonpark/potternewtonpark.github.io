module.exports = function (grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"),
    sass: {
      dist: {
        files: {
          "assets/css/styles.css": "assets/sass/styles.scss",
        },
      },
    },
    jshint: {
      options: {
        curly: true,
        eqeqeq: true,
        globals: {
          jQuery: true,
        },
      },
      files: {
        src: ["assets/js/*.js"],
      },
    },
    watch: {
      css: {
        files: "assets/sass/*.scss",
        tasks: ["sass"],
      },
      scripts: {
        files: "<%= jshint.files.src %>",
        tasks: ["jshint"],
      },
    },
    browserSync: {
      bsFiles: {
        src: "assets/css/*.css",
      },
      options: {
        server: {
          baseDir: "./",
        },
      },
    },
  });

  // Load plugins
  grunt.loadNpmTasks("grunt-contrib-sass");
  grunt.loadNpmTasks("grunt-contrib-jshint");
  grunt.loadNpmTasks("grunt-contrib-watch");
  grunt.loadNpmTasks("grunt-browser-sync");

  // Register tasks
  grunt.registerTask("default", ["browserSync", "watch"]);
};

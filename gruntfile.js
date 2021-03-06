module.exports = function(grunt) {
    require('load-grunt-tasks')(grunt, {
        pattern: ['grunt-*', '!grunt-template-jasmine-istanbul']
    });

    grunt.initConfig({
        express: require('./tasks/express')().target,
        connect: require('./tasks/connect')().target,
        uglify: require('./tasks/uglify')().target,
        compress: require('./tasks/compress')().target,
        watch: require('./tasks/watch')().target,
        eslint: require('./tasks/eslint')().target,
        jasmine: require('./tasks/jasmine')().target,
        coveralls: require('./tasks/coverall')().target
    });

    grunt.registerTask('travis', ['express:dev', 'jasmine', 'coveralls', 'compress']);
    grunt.registerTask('test', ['express:dev','eslint', 'uglify', 'compress', 'jasmine']);
    grunt.registerTask('default', ['express:dev', 'watch']);

};
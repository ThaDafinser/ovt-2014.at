// Generated on 2014-02-19 using generator-webapp 0.4.6
'use strict';

// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// use this if you want to recursively match all subfolders:
// 'test/spec/**/*.js'

module.exports = function(grunt) {
    // Load grunt tasks automatically
    require('load-grunt-tasks')(grunt);

    // Time how long tasks take. Can help when optimizing build times
    require('time-grunt')(grunt);

    var config = {

	// Project settings
	project : {
	    bowerPath : 'app/_bower_components',

	    applicationPath : 'app',
	    deployPath : 'dist',

	    assetsBuildPath : 'app/_build/assets',
	    assetsDeployPath : 'dist/assets'
	},

	/*
	 * install all vendor dependencies
	 */
	bower : {
	    install : {}
	},

	/*
	 * clean folders to start fresh :-)
	 */
	clean : {

	    build : {
		files : [ {
		    dot : true,
		    force : true,
		    src : [ '<%= project.assetsBuildPath %>/**/*',
			    '<%= project.assetsBuildPath %>/*' ]
		} ]
	    },

	    dist : {
		files : [ {
		    dot : true,
		    force : true,
		    src : [ '<%= project.deployPath %>/**/**/*',
			    '<%= project.deployPath %>/**/*',
			    '<%= project.deployPath %>/*' ]
		} ]
	    }
	},

	copy : {
	    build : {

		files : [

		// custom
		{
		    expand : true,
		    nonull : true,
		    cwd : '<%= project.applicationPath %>/_css',
		    dest : '<%= project.assetsBuildPath %>/css',
		    src : [ '*.css' ]
		},

		// jquery
		{
		    expand : true,
		    nonull : true,
		    cwd : '<%= project.bowerPath %>/jquery',
		    dest : '<%= project.assetsBuildPath %>/js/jquery',
		    src : [ '*.js' ]
		},

		{
		    expand : true,
		    nonull : true,
		    cwd : '<%= project.bowerPath %>/holder',
		    dest : '<%= project.assetsBuildPath %>/js/holder',
		    src : [ 'holder.js' ]
		},

		// bootstrap - JS
		{
		    expand : true,
		    nonull : true,
		    cwd : '<%= project.bowerPath %>/bootstrap/js',
		    dest : '<%= project.assetsBuildPath %>/js/bootstrap',
		    src : [ '*.js' ]
		},

		// bootstrap - LESS
		{
		    expand : true,
		    nonull : true,
		    cwd : '<%= project.bowerPath %>/bootstrap/less',
		    dest : '<%= project.assetsBuildPath %>/less/bootstrap',
		    src : [ '*.less' ]
		},

		// bootstrap - fonts
		{
		    expand : true,
		    nonull : true,
		    cwd : '<%= project.bowerPath %>/bootstrap/dist/fonts',
		    dest : '<%= project.assetsBuildPath %>/fonts',
		    src : [ '*' ]
		},

		// lightbox2 - CSS
		{
		    expand : true,
		    nonull : true,
		    cwd : '<%= project.bowerPath %>/lightbox2/css',
		    dest : '<%= project.assetsBuildPath %>/css/lightbox2',
		    src : [ '*.css' ]
		},

		// lightbox2 - JS
		{
		    expand : true,
		    nonull : true,
		    cwd : '<%= project.bowerPath %>/lightbox2/js',
		    dest : '<%= project.assetsBuildPath %>/js/lightbox2',
		    src : [ '*.js' ]
		},

		// lightbox2 - IMG
		{
		    expand : true,
		    nonull : true,
		    cwd : '<%= project.bowerPath %>/lightbox2/img',
		    dest : '<%= project.assetsBuildPath %>/img/lightbox2',
		    src : [ '*.gif', '*.png' ]
		}, ]
	    },

	    dist : {

		files : [

		// bootstrap - fonts
		{
		    expand : true,
		    nonull : true,
		    cwd : '<%= project.assetsBuildPath %>/fonts',
		    dest : '<%= project.assetsDeployPath %>/fonts',
		    src : [ '*' ]
		},

		// lightbox2 - IMG
		{
		    expand : true,
		    nonull : true,
		    cwd : '<%= project.assetsBuildPath %>/img/lightbox2',
		    dest : '<%= project.assetsDeployPath %>/img',
		    src : [ '*' ]
		}, ]
	    }
	},

	less : {
	    vendor : {
		files : {
		    '<%= project.assetsBuildPath %>/css/bootstrap/bootstrap.css' : '<%= project.applicationPath %>/_less/bootstrap.less',
		}
	    }
	},

	jekyll : {
	    options : {
		// bundleExec: true,
		src : '<%= project.applicationPath %>'
	    },

	    dist : { // Target
		options : { // Target options
		    dest : '<%= project.deployPath %>',
		    config : '<%= project.applicationPath %>/_config.yml',
		}
	    },

	    serve : {
		options : {
		    dest : '<%= project.deployPath %>'
		}
	    }

	},

	shell : {
	    jekyll : {
		command : [ 'cd <%= project.applicationPath %>', 'jekyll build' ]
			.join('&&')
	    }
	},

	useminPrepare : {

	    src : [ '<%= project.deployPath %>/index.html' ],

	    options : {
		root : 'app/_build',
		dest : '<%= project.deployPath %>',
		staging : '<%= project.assetsBuildPath %>/.tmp',
	    },
	},

	usemin : {
	    options : {
		assetsDirs : [ '<%= project.deployPath %>' ]
	    },

	    html : [ '<%= project.deployPath %>/index.html',
		    '<%= project.deployPath %>/**/index.html',
		    '<%= project.deployPath %>/jekyll/**/*.html'

	    ],

	    css : [ '<%= project.assetsDeployPath %>/css/*.css' ]
	},

	// Renames files for browser caching purposes
	rev : {
	    build : {
		files : {
		    src : [ '<%= project.assetsDeployPath %>/js/*.js',
			    '<%= project.assetsDeployPath %>/css/{,*/}*.css', ]
		}
	    }
	},

	watch : {
	    scripts : {
		files : [ '<%= project.applicationPath %>/*.html',
			'<%= project.applicationPath %>/css/*',
			'<%= project.applicationPath %>/**/*.html',
			'<%= project.applicationPath %>/**/*.markdown' ],
		tasks : [ 'build' ],
		options : {
		    spawn : false,
		},
	    },
	},
    };

    grunt.initConfig(config);

    grunt.event.on('watch', function(action, filepath) {
	var config = grunt.config.get();
	console.log(config.usemin);
    });

    grunt.registerTask('build', [
    // 'bower:install',
    'clean:build', 'clean:dist',

    'copy:build', 'less',

    'shell:jekyll',

    'useminPrepare',

    'concat', 'cssmin', 'uglify',

    'rev', 'usemin',

    'copy:dist' ]);

    grunt.registerTask('default', [ 'build' ]);

};

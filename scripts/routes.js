'use strict';
/**
 * Definition of the flows within the application.
 */
angular.module('ubicity').config([ '$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    // ------------------------------------------------------------------------------------------------------
    $stateProvider.state("home", {
	url : "/",
	views : {
	    '' : {
		templateUrl : 'views/home.html'
	    }
	}
    })
    // ------------------------------------------------------------------------------------------------------
    .state("resources", {
	url : "/resources",
	templateUrl : 'views/resources.html'
    })
    // ------------------------------------------------------------------------------------------------------
    .state("demo", {
	abstract : true,
	url : "/demo",
	views : {
	    '' : {
		templateUrl : 'views/parent.html'
	    }
	}
    }).state("demo.dashboard", {
	url : "/dashboard",
	templateUrl : 'views/demo.dashboard.html'
    }).state("demo.twitter-geo", {
	url : "/twitter-geo",
	templateUrl : 'views/demo.twitter-geo.html'
    }).state("demo.twitter-topic", {
	url : "/twitter-topic",
	templateUrl : 'views/demo.twitter-topic.html'
    }).state("demo.rss", {
	url : "/rss",
	templateUrl : 'views/demo.rss.html'
    });
} ]);
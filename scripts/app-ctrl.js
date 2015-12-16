'use strict';

angular.module('ubicity', [ 'ui.router', 'ui.bootstrap' ]).run([ '$rootScope', '$state', function($rootScope, $scope, $state) {
} ]).run(function($state, $rootScope) {
    $rootScope.$state = $state;
})
// ------------------------------------------------------------------------------------------------------
.controller('AppCtrl', function($rootScope, $scope) {
    $scope.init = function() {
    };

    $rootScope.$on('$stateChangeStart', function(event, toState) {
	if (toState) {
	    ga('set', 'page', toState.url);
	    ga('send', 'pageview');
	}
    });
});
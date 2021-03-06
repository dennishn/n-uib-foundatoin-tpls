(function() {
	'use strict';

	/**
	 * @name config
	 * @description
	 *
	 * Glboal Configuration Module
	 */
	var core = angular.module('config', [
		'DEBUG_ENV',
		'nEmailNStackValidator',
		'APPLICATION_SETTINGS',
		'angular-loading-bar',
		'cgBusy',
		'ngTouch'
	]);

	core.value('cgBusyDefaults', {
		message:'Loading Stuff',
		backdrop: true,
		templateUrl: '../common/core/loadingindicator/loadingindicator.template.html'
	});

	core.config(configure);

	/* @ngInject */
	function configure(DEBUG_ENV,
					   APPLICATION_SETTINGS,
					   nEmailNStackValidatorProvider,
					   $logProvider,
					   $stateProvider,
					   $urlRouterProvider,
					   $locationProvider,
					   cfpLoadingBarProvider,
					   $touchProvider,
					   $httpProvider) {

		$touchProvider.ngClickOverrideEnabled(true);

		if($logProvider.debugEnabled && DEBUG_ENV) {
			$logProvider.debugEnabled(true);
		} else {
			$logProvider.debugEnabled(false);
		}

		nEmailNStackValidatorProvider.configure(APPLICATION_SETTINGS.nStack);
		
		cfpLoadingBarProvider.includeSpinner = false;
		cfpLoadingBarProvider.latencyThreshold = 100;

		$locationProvider.html5Mode(true);
		$urlRouterProvider.otherwise('/404');

		$stateProvider
			.state('application.notfound', {
				url: '/404',
				views: {
					'application@': {
						templateUrl: '404.html'
					}
				}
			})
			.state('error', {
				url: '/503',
				views: {
					'application@': {
						templateUrl: '503.html'
					}
				}
			});
	}

})();

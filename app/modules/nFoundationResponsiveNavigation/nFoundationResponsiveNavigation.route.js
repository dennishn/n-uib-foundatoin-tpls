(function() {
	'use strict';

	/**
	 * @name
	 * @author
	 * @description
	 *
	 */
	angular.module('nFoundationResponsiveNavigationModule')
		/* @ngInject */
		.config(function($stateProvider) {

			var NFoundationResponsiveNavigation = {
				name: 'application.nfoundationresponsivenavigation',
				url: '/nfoundationresponsivenavigation',
				views: {
					'application@application': {
						templateUrl: 'modules/nFoundationResponsiveNavigation/nfoundationresponsivenavigation.template.html',
						controller: 'NFoundationResponsiveNavigationController',
						controllerAs: 'nfoundationresponsivenavigation'
					}
				}
			};

			$stateProvider.state(NFoundationResponsiveNavigation);
		});
})();

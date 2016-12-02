(function() {
	'use strict';

	/**
	 * @name
	 * @author
	 * @description
	 *
	 */
	angular.module('openColorColors')
		/* @ngInject */
		.config(function($stateProvider) {

			var OpenColorColors = {
				name: 'application.opencolors',
				url: '/open-color-colors',
				views: {
					'application@application': {
						templateUrl: 'modules/open-color-colors/open-color-colors.template.html',
						controller: 'OpenColorColorsController',
						controllerAs: 'openColors'
					}
				}
			};

			$stateProvider.state(OpenColorColors);
		});
})();

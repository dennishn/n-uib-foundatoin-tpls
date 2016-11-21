(function() {
	'use strict';

	/**
	 * @name
	 * @author
	 * @description
	 *
	 */
	angular.module('progressbar')
		/* @ngInject */
		.config(function($stateProvider) {

			var Progressbar = {
				name: 'application.progressbar',
				url: '/progressbar',
				views: {
					'application@application': {
						templateUrl: 'modules/progressbar/progressbar.template.html',
						controller: 'ProgressbarController',
						controllerAs: 'progressbarCtrl'
					}
				}
			};

			$stateProvider.state(Progressbar);
		});
})();

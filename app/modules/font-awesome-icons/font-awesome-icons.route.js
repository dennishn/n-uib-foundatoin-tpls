(function() {
	'use strict';

	/**
	 * @name
	 * @author
	 * @description
	 *
	 */
	angular.module('fontAwesomeIcons')
		/* @ngInject */
		.config(function($stateProvider) {

			var OpenIconicIcons = {
				name: 'application.fontawesome',
				url: '/font-awesome-icons',
				views: {
					'application@application': {
						templateUrl: 'modules/font-awesome-icons/font-awesome-icons.template.html',
						controller: 'FontAwesomeIconsController',
						controllerAs: 'fontAweseome'
					}
				}
			};

			$stateProvider.state(OpenIconicIcons);
		});
})();

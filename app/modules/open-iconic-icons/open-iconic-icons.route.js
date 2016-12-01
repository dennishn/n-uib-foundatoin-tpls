(function() {
	'use strict';

	/**
	 * @name
	 * @author
	 * @description
	 *
	 */
	angular.module('openIconicIcons')
		/* @ngInject */
		.config(function($stateProvider) {

			var OpenIconicIcons = {
				name: 'application.openiconicicons',
				url: '/open-iconic-icons',
				views: {
					'application@application': {
						templateUrl: 'modules/open-iconic-icons/open-iconic-icons.template.html',
						controller: 'OpenIconicIconsController',
						controllerAs: 'openIcons'
					}
				}
			};

			$stateProvider.state(OpenIconicIcons);
		});
})();

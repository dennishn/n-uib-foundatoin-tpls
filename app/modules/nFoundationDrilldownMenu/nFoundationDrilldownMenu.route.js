(function() {
	'use strict';

	/**
	 * @name
	 * @author
	 * @description
	 *
	 */
	angular.module('nFoundationDrilldownMenuModule')
		/* @ngInject */
		.config(function($stateProvider) {

			var NFoundationDrilldownMenu = {
				name: 'application.nfoundationdrilldownmenu',
				url: '/nfoundationdrilldownmenu',
				views: {
					'application@application': {
						templateUrl: 'modules/nFoundationDrilldownMenu/nfoundationdrilldownmenu.template.html',
						controller: 'NFoundationDrilldownMenuController',
						controllerAs: 'nfoundationdrilldownmenu'
					}
				}
			};

			$stateProvider.state(NFoundationDrilldownMenu);
		});
})();

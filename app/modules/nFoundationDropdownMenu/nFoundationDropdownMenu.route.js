(function() {
	'use strict';

	/**
	 * @name
	 * @author
	 * @description
	 *
	 */
	angular.module('nFoundationDropdownMenuModule')
		/* @ngInject */
		.config(function($stateProvider) {

			var NFoundationDropdownMenu = {
				name: 'application.nfoundationdropdownmenu',
				url: '/nfoundationdropdownmenu',
				views: {
					'application@application': {
						templateUrl: 'modules/nFoundationDropdownMenu/nfoundationdropdownmenu.template.html',
						controller: 'NFoundationDropdownMenuController',
						controllerAs: 'nfoundationdropdownmenu'
					}
				}
			};

			$stateProvider.state(NFoundationDropdownMenu);
		});
})();

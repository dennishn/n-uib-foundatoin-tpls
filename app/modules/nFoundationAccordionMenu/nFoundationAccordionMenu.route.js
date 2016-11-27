(function() {
	'use strict';

	/**
	 * @name
	 * @author
	 * @description
	 *
	 */
	angular.module('nFoundationAccordionMenuModule')
		/* @ngInject */
		.config(function($stateProvider) {

			var NFoundationAccordionMenu = {
				name: 'application.nfoundationaccordionmenu',
				url: '/nfoundationaccordionmenu',
				views: {
					'application@application': {
						templateUrl: 'modules/nFoundationAccordionMenu/nfoundationaccordionmenu.template.html',
						controller: 'NFoundationAccordionMenuController',
						controllerAs: 'nfoundationaccordionmenu'
					}
				}
			};

			$stateProvider.state(NFoundationAccordionMenu);
		});
})();

(function() {
	'use strict';

	/**
	 * @name
	 * @author
	 * @description
	 *
	 */
	angular.module('popover')
		/* @ngInject */
		.config(function($stateProvider) {

			var Popover = {
				name: 'application.popover',
				url: '/popover',
				views: {
					'application@application': {
						templateUrl: 'modules/popover/popover.template.html',
						controller: 'PopoverController',
						controllerAs: 'popoverCtrl'
					}
				}
			};

			$stateProvider.state(Popover);
		});
})();

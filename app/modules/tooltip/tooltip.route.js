(function() {
	'use strict';

	/**
	 * @name
	 * @author
	 * @description
	 *
	 */
	angular.module('tooltip')
		/* @ngInject */
		.config(function($stateProvider) {

			var Tooltip = {
				name: 'application.tooltip',
				url: '/tooltip',
				views: {
					'application@application': {
						templateUrl: 'modules/tooltip/tooltip.template.html',
						controller: 'TooltipController',
						controllerAs: 'tooltipCtrl'
					}
				}
			};

			$stateProvider.state(Tooltip);
		});
})();

(function() {
	'use strict';

	/**
	 * @name
	 * @author
	 * @description
	 *
	 */
	angular.module('collapse')
		/* @ngInject */
		.config(function($stateProvider) {

			var Collapse = {
				name: 'application.collapse',
				url: '/collapse',
				views: {
					'application@application': {
						templateUrl: 'modules/collapse/collapse.template.html',
						controller: 'CollapseController',
						controllerAs: 'collapseCtrl'
					}
				}
			};

			$stateProvider.state(Collapse);
		});
})();

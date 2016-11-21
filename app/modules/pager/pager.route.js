(function() {
	'use strict';

	/**
	 * @name
	 * @author
	 * @description
	 *
	 */
	angular.module('pager')
		/* @ngInject */
		.config(function($stateProvider) {

			var Pager = {
				name: 'application.pager',
				url: '/pager',
				views: {
					'application@application': {
						templateUrl: 'modules/pager/pager.template.html',
						controller: 'PagerController',
						controllerAs: 'pagerCtrl'
					}
				}
			};

			$stateProvider.state(Pager);
		});
})();

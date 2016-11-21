(function() {
	'use strict';

	/**
	 * @name
	 * @author
	 * @description
	 *
	 */
	angular.module('pagination')
		/* @ngInject */
		.config(function($stateProvider) {

			var Pagination = {
				name: 'application.pagination',
				url: '/pagination',
				views: {
					'application@application': {
						templateUrl: 'modules/pagination/pagination.template.html',
						controller: 'PaginationController',
						controllerAs: 'paginationCtrl'
					}
				}
			};

			$stateProvider.state(Pagination);
		});
})();

(function() {
	'use strict';

	/**
	 * @name
	 * @author
	 * @description
	 *
	 */
	angular.module('rating')
		/* @ngInject */
		.config(function($stateProvider) {

			var Rating = {
				name: 'application.rating',
				url: '/rating',
				views: {
					'application@application': {
						templateUrl: 'modules/rating/rating.template.html',
						controller: 'RatingController',
						controllerAs: 'ratingCtrl'
					}
				}
			};

			$stateProvider.state(Rating);
		});
})();

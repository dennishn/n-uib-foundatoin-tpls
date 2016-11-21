(function() {
	'use strict';

	/**
	 * @name
	 * @author
	 * @description
	 *
	 */
	angular.module('typeahead')
		/* @ngInject */
		.config(function($stateProvider) {

			var Typeahead = {
				name: 'application.typeahead',
				url: '/typeahead',
				views: {
					'application@application': {
						templateUrl: 'modules/typeahead/typeahead.template.html',
						controller: 'TypeaheadController',
						controllerAs: 'typeaheadCtrl'
					}
				}
			};

			$stateProvider.state(Typeahead);
		});
})();

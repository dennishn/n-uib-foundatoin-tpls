(function() {
	'use strict';

	/**
	 * @name
	 * @author
	 * @description
	 *
	 */
	angular.module('dropdown')
		/* @ngInject */
		.config(function($stateProvider) {

			var Dropdown = {
				name: 'application.dropdown',
				url: '/dropdown',
				views: {
					'application@application': {
						templateUrl: 'modules/dropdown/dropdown.template.html',
						controller: 'DropdownController',
						controllerAs: 'dropdownCtrl'
					}
				}
			};

			$stateProvider.state(Dropdown);
		});
})();

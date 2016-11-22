(function() {
	'use strict';

	/**
	 * @name
	 * @author
	 * @description
	 *
	 */
	angular.module('nFormFieldModule')
		/* @ngInject */
		.config(function($stateProvider) {

			var NFormField = {
				name: 'application.nformfield',
				url: '/nformfield',
				views: {
					'application@application': {
						templateUrl: 'modules/nFormField/nformfield.template.html',
						controller: 'NFormFieldController',
						controllerAs: 'nformfield'
					}
				}
			};

			$stateProvider.state(NFormField);
		});
})();

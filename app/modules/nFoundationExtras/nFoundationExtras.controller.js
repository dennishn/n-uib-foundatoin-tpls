(function() {
	'use strict';

	/**
	 * @name
	 * @author
	 * @description
	 *
	 */
	angular
		.module('nFoundationExtras')
		.controller('NFoundationExtrasController', NFoundationExtras);

	/* @ngInject */
	function NFoundationExtras() {
		/*jshint validthis: true */
		var vm = this;

		vm.colorClasses = [
			'primary',
			'secondary',
			'info',
			'success',
			'warning',
			'alert',
			'light-gray',
			'medium-gray',
			'dark-gray',
			'black',
			'white'
		]
	}

})();

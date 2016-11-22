(function() {
	'use strict';

	/**
	 * @name
	 * @author
	 * @description
	 *
	 */
	angular
		.module('nFormFieldModule')
		.controller('NFormFieldController', NFormField);

	/* @ngInject */
	function NFormField() {
		/*jshint validthis: true */
		var vm = this;

		vm.fooModel = 'bar baz jazz';
	}

})();

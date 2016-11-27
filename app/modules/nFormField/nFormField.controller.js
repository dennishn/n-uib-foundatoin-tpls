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

		vm.fooModel = 'abcd@ef.com';
		vm.state = {
			isError: false,
			isWarning: false,
			isSuccess: false,
			isLoading: false
		};
		vm.onSetState = function(key) {
			for(var k in vm.state) {
				if(vm.state.hasOwnProperty(k)) {
					vm.state[k] = false;
				}
			}
			if(key) {
				vm.state[key] = true;
			}
		}
	}

})();

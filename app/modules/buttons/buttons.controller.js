(function() {
	'use strict';

	/**
	 * @name
	 * @author
	 * @description
	 *
	 */
	angular
		.module('buttons')
		.controller('ButtonsController', Buttons);

	/* @ngInject */
	function Buttons($scope) {
		/*jshint validthis: true */
		var vm = this;
		
		vm.singleModel = 1;
		
		vm.radioModel = 'Middle';
		console.warn(vm.radioModel)
		
		vm.checkBoxModel = {
			default: false,
			success: true,
			warning: false,
			alert: false,
			secondary: true,
			defaultHollow: false,
			successHollow: false,
			warningHollow: false,
			alertHollow: false,
			secondaryHollow: false
		};
		
		vm.checkResults = [];
		
		$scope.$watchCollection(function() {
			return vm.checkBoxModel
		}, function () {
			vm.checkResults = [];
			angular.forEach(vm.checkBoxModel, function (value, key) {
				if (value) {
					vm.checkResults.push(key);
				}
			});
		});
	}

})();

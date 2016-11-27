(function() {
	'use strict';

	/**
	 * @name
	 * @author
	 * @description
	 *
	 */
	angular
		.module('nFoundationSwitch')
		.component('nFoundationSwitch', {
			bindings: {},
			require: {
				ngModel: 'ngModel'
			},
			replace: true,
			/* @ngInject */
			template: function($element, $attrs) {
				return [
					'<div class="switch">',
						'<input ng-model="$ctrl.model"',
								$attrs.ngTrueValue ? 'ng-true-value="' +  $attrs.ngTrueValue + '"' : '',
								$attrs.ngFalseValue ? 'ng-false-value="' +  $attrs.ngFalseValue + '"' : '',
								'class="switch-input"',
								'id="' + $attrs.name + '"',
								'type="checkbox"',
								'name="' + $attrs.name + '">',
						'<label class="switch-paddle" for="' + $attrs.name + '">',
							'<span class="show-for-sr">Download Kittens</span>',
						'</label>',
					'</div>'
				].join('');
			},
			controller: nFoundationSwitchController
		});

	/* @ngInject */
	function nFoundationSwitchController($scope, $element, $attrs) {
		/*jshint validthis: true */
		var vm = this;

		vm.$onInit = _initSwitchComponent;
	
		function _initSwitchComponent() {
			vm.ngModel.$render = _viewToModel;
			
			vm.ngModel.$isEmpty = function(value) {
				return value === false;
			};
			
			$scope.$watch(function() {return vm.model;}, _modelToView);
		}
		
		function _viewToModel() {
			vm.model = vm.ngModel.$viewValue;
		}
		
		function _modelToView(value) {
			vm.ngModel.$setViewValue(value);
		}
	}

})();

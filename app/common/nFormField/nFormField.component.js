(function() {
	'use strict';

	/**
	 * @name
	 * @author
	 * @description
	 *
	 */
	angular
		.module('nFormField')
		.component('nFormField', {
			controller: nFormFieldController,
			bindings: {
				isSuccess: '<',
				isWarning: '<',
				isError: '<'
			},
			require: {
				form: '^form'
			}
		});

	/* @ngInject */
	function nFormFieldController($scope, $element, $interpolate, $exceptionHandler) {
		/*jshint validthis: true */
		var vm = this;
		
		var CLASSES = {
			error: {
				'label': 'is-invalid-label',
				'input': 'is-invalid-input',
				'text': 'is-visible'
			},
			warning: {
				'label': 'is-warning-label',
				'input': 'is-warning-input',
				'text': 'is-visible'
			},
			success: {
				'label': 'is-success-label',
				'input': 'is-success-input',
				'text': 'is-visible'
			}
		};
		
		var $label = $element.find('label');
		var $input = $element.find('input');
		
		var inputName = $interpolate($input.attr('name') || '')($scope);
		if(!inputName) {
			throw new $exceptionHandler('attribute name is required');
		}
		
		vm.$onInit = function() {
			$scope.$watch(function() {
				// return vm.form[inputName] && vm.form[inputName].$invalid;
				return vm.isError;
			}, onValidityChanged);
			
			$scope.$watch(function() {
				return vm.isSuccess;
			}, onSuccessChanged);
			
			$scope.$watch(function() {
				return vm.isWarning;
			}, onWarningChanged);
		};
		
		function onValidityChanged(newVal) {
			// _clearClasses();
			console.warn(newVal, vm.isError);
			
			var $errorTxt = $element.find('.form-error');
			console.info($errorTxt)
			
			$label.toggleClass(CLASSES.error['label'], newVal);
			$input.toggleClass(CLASSES.error['input'], newVal);
			$errorTxt.toggleClass(CLASSES.error['text'], newVal);
		}
		
		function onSuccessChanged(newVal) {
			// _clearClasses();
			
			var $successTxt = $element.find('.form-success');
			
			$label.toggleClass(CLASSES.success['label'], newVal);
			$input.toggleClass(CLASSES.success['input'], newVal);
			$successTxt.toggleClass(CLASSES.success['text'], newVal);
		}
		
		function onWarningChanged(newVal) {
			
			var $warningTxt = $element.find('.form-warning');
			
			$label.toggleClass(CLASSES.warning['label'], newVal);
			$input.toggleClass(CLASSES.warning['input'], newVal);
			$warningTxt.toggleClass(CLASSES.warning['text'], newVal);
		}
		
		function _clearClasses() {
			for(var key in CLASSES) {
				if(CLASSES.hasOwnProperty(key)) {
					$label.removeClass(CLASSES[key]['label']);
					$input.removeClass(CLASSES[key]['input']);
					$errorTxt.removeClass(CLASSES[key]['text']);
				}
			}
		}
		
		
	};

})();

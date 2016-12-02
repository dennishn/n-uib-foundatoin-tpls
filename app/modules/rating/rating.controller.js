(function() {
	'use strict';

	/**
	 * @name
	 * @author
	 * @description
	 *
	 */
	angular
		.module('rating')
		.controller('RatingController', Rating);

	/* @ngInject */
	function Rating() {
		/*jshint validthis: true */
		var vm = this;
		
		vm.rate = 7;
		vm.max = 10;
		vm.isReadonly = false;
		
		vm.hoveringOver = function(value) {
			vm.overStar = value;
			vm.percent = 100 * (value / vm.max);
		};
		
		vm.ratingStates = [
			{stateOff: 'fa fa-microchip'},
			{stateOn: 'fa fa-ravelry', stateOff: 'fa fa-user-o'},
			{stateOn: 'fa fa-female', stateOff: 'fa fa-male'},
			{stateOn: 'fa fa-film'},
			{stateOn: 'fa fa-close', stateOff: 'fa fa-fire'}
		];
		
	}

})();

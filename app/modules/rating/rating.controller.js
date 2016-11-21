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
			{stateOff: 'sentiment_very_dissatisfied'},
			{stateOn: 'local_pizza', stateOff: 'local_bar'},
			{stateOn: 'spa', stateOff: 'pool'},
			{stateOn: 'whatshot'},
			{stateOn: 'train', stateOff: 'tram'}
		];
	}

})();

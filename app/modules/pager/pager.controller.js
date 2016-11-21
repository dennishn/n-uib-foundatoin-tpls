(function() {
	'use strict';

	/**
	 * @name
	 * @author
	 * @description
	 *
	 */
	angular
		.module('pager')
		.controller('PagerController', Pager);

	/* @ngInject */
	function Pager() {
		/*jshint validthis: true */
		var vm = this;
		
		vm.pagerTotal = 64;
		vm.pagerCurrent = 4;
		
		vm.paginationTotal = 177;
		vm.paginationCurrent = 1;
		vm.paginationMaxSize = 5;
	}

})();

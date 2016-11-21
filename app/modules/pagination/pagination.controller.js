(function() {
	'use strict';

	/**
	 * @name
	 * @author
	 * @description
	 *
	 */
	angular
		.module('pagination')
		.controller('PaginationController', Pagination);

	/* @ngInject */
	function Pagination($log) {
		/*jshint validthis: true */
		var vm = this;
		
		vm.totalItems = 64;
		vm.currentPage = 4;
		
		vm.setPage = function (pageNo) {
			vm.currentPage = pageNo;
		};
		
		vm.pageChanged = function() {
			$log.log('Page changed to: ' + vm.currentPage);
		};
		
		vm.maxSize = 5;
		vm.bigTotalItems = 175;
		vm.bigCurrentPage = 1;
		
	}

})();

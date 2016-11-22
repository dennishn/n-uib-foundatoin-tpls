(function() {
	'use strict';

	/**
	 * @name APPLICATION_SETTINGS
	 * @description
	 *
	 * Common Application wide configuration settings ie. api keys or disabled features.
	 */
	angular
			.module('APPLICATION_SETTINGS', [])
			.constant('APPLICATION_SETTINGS', {
				nStack: {
					appId: 'BmZHmoKuU99A5ZnOByOiRxMVSmAWC2yBz3OW',
					apiKey: 'yw9go00oCWt6zPhfbdjRYXiHRWmkQZQSuRke'
				}
			});

})();
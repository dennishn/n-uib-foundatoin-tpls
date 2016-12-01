(function() {
	
	/**
	 * @name
	 * @author
	 * @description
	 *
	 */
	angular
		.module('nFoundationAnimationExperiment')
		.animation('.anim-exp-modal', AnimExpModal);

	/* @ngInject */
	function AnimExpModal() {
		/*jshint validthis: true */
		var animationDefinition = {
			enter: enter,
			leave: leave
		};

		return animationDefinition;

		function enter($element, done) {

			var innerEl = $element.find('.reveal').first()[0];
			var contentEl = $element.find('.anim-exp-modal__content').first()[0];

			var refId = $(contentEl).attr('anim-exp-modal-referrer-id');
			var refEl = $('[anim-exp-modal-id="' + refId + '"]')[0];
			
			_set(innerEl, {
				position: 'absolute'
			});
			var LAST = innerEl.getBoundingClientRect();
			var FIRST = refEl.getBoundingClientRect();
			
			_set(innerEl, {
				top: FIRST.top,
				right: FIRST.right,
				bottom: FIRST.bottom,
				left: FIRST.left,
				width: FIRST.width,
				height: FIRST.height
			});
			_set(contentEl, {
				width: LAST.width,
				height: LAST.height
			});
			
			var t = TweenMax.to(innerEl, 0.8, {
				ease: Bounce.easeOut,
				css: {
					top: LAST.top + 'px',
					right: LAST.right + 'px',
					bottom: LAST.bottom + 'px',
					left: LAST.left + 'px',
					width: LAST.width + 'px',
					height: LAST.height + 'px'
				},
				onComplete: done
			});

		}

		function leave($element, done) {
			
			var innerEl = $element.find('.reveal').first()[0];
			var contentEl = $element.find('.anim-exp-modal__content').first()[0];
			
			var refId = $(contentEl).attr('anim-exp-modal-referrer-id');
			var refEl = $('[anim-exp-modal-id="' + refId + '"]')[0];
			
			var LAST = refEl.getBoundingClientRect();
			
			var t = TweenMax.to(innerEl, 0.8, {
				ease: Bounce.easeOut,
				css: {
					top: LAST.top + 'px',
					right: LAST.right + 'px',
					bottom: LAST.bottom + 'px',
					left: LAST.left + 'px',
					width: LAST.width + 'px',
					height: LAST.height + 'px'
				},
				onComplete: done
			});
			
		}
		
		function _set(el, rect) {
			el.style.position = rect.position;
			el.style.top = rect.top + 'px';
			el.style.right = rect.right + 'px';
			el.style.bottom = rect.bottom + 'px';
			el.style.left = rect.left + 'px';
			el.style.width = rect.width + 'px';
			el.style.height = rect.height + 'px';
			el.style.marginRight = rect.marginRight || null;
			el.style.marginLeft = rect.marginLeft || null;
			el.style.opacity = rect.opacity;
		}

		function _cleanUpStyles(el) {
			el.style.top = null;
			el.style.right = null;
			el.style.bottom = null;
			el.style.left = null;
			el.style.width = null;
			el.style.height = null;
			el.style.opacity = null;
		}
	}

})();

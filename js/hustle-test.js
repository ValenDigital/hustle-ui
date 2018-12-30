( function( $ ) {

	// Enable strict mode.
	'use strict';

	// Define global SUI object if it doesn't exist.
	if ( 'object' !== typeof window.SUI ) {
		window.HUI = {};
	}

	HUI.showHidePassword = function() {

		$( 'SUI_BODY_CLASS .sui-form-field' ).each( function() {

			var $this = $( this );

			if ( 0 !== $this.find( 'input[type="password"]' ).length ) {

				$this.find( '[class*="sui-button"], .sui-password-toggle' ).on( 'click', function() {

					var $button = $( this ),
						$input  = $button.parent().find( 'input' ),
						$icon   = $button.find( 'i' )
						;

					$button.parent().toggleClass( 'sui-password-visible' );
					$button.find( '.sui-password-text' ).toggleClass( 'sui-hidden' );

					if ( $button.parent().hasClass( 'sui-password-visible' ) ) {
						$input.prop( 'type', 'text' );
						$icon.removeClass( 'sui-icon-eye' ).addClass( 'sui-icon-eye-hide' );
					} else {
						$input.prop( 'type', 'password' );
						$icon.removeClass( 'sui-icon-eye-hide' ).addClass( 'sui-icon-eye' );
					}

				});

			}

		});

	};

	HUI.showHidePassword();

}( jQuery ) );

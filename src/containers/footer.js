import React, { Component } from 'react';

export default class Footer extends Component {
	render() {
		return (
			<React.Fragment>

				<div className="sui-footer">
					Made with <i className="sui-icon-heart"></i> by WPMU DEV
				</div>

				<ul className="sui-footer-nav">
					<li><a href="https://premium.wpmudev.org/hub/" target="_blank" rel="noopener noreferrer">The Hub</a></li>
					<li><a href="https://premium.wpmudev.org/projects/category/plugins/" target="_blank" rel="noopener noreferrer">Plugins</a></li>
					<li><a href="https://premium.wpmudev.org/roadmap/" target="_blank" rel="noopener noreferrer">Roadmap</a></li>
					<li><a href="https://premium.wpmudev.org/hub/support/" target="_blank" rel="noopener noreferrer">Support</a></li>
					<li><a href="https://premium.wpmudev.org/docs/" target="_blank" rel="noopener noreferrer">Docs</a></li>
					<li><a href="https://premium.wpmudev.org/hub/community/" target="_blank" rel="noopener noreferrer">Community</a></li>
					<li><a href="https://premium.wpmudev.org/academy/" target="_blank" rel="noopener noreferrer">Academy</a></li>
					<li><a href="https://premium.wpmudev.org/terms-of-service/" target="_blank" rel="noopener noreferrer">Terms of Service</a></li>
					<li><a href="https://incsub.com/privacy-policy/" target="_blank" rel="noopener noreferrer">Privacy Policy</a></li>
				</ul>

				<ul className="sui-footer-social">
					<li><a href="https://www.facebook.com/wpmudev" target="_blank" rel="noopener noreferrer">
						<i className="sui-icon-social-facebook" aria-hidden="true"></i>
						<span className="sui-screen-reader-text">Facebook</span>
					</a></li>
					<li><a href="https://twitter.com/wpmudev" target="_blank" rel="noopener noreferrer">
						<i className="sui-icon-social-twitter" aria-hidden="true"></i></a>
						<span className="sui-screen-reader-text">Twitter</span>
					</li>
					<li><a href="https://www.instagram.com/wpmu_dev/" target="_blank" rel="noopener noreferrer">
						<i className="sui-icon-instagram" aria-hidden="true"></i>
						<span className="sui-screen-reader-text">Instagram</span>
					</a></li>
				</ul>

			</React.Fragment>
		);
	}
}

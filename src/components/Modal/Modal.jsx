import PropTypes from 'prop-types';
import React from 'react';
import './Modal.css';

class Modal extends React.PureComponent {
	handleCloseButtonClick = () => {
		this.props.onCloseButtonClick();
	};

	render() {
		return (
			<div className="modal">
				<div className="modal__wrapper">
					<div className="modal__top-panel">
						<h2 className="modal__name">{this.props.name}</h2>
						<button className="modal__close-button" onClick={this.handleCloseButtonClick} />
					</div>
					{this.props.children}
				</div>
				<div className="modal__overlay" onClick={this.handleCloseButtonClick} />
			</div>
		);
	}
}

Modal.propTypes = {
	onCloseButtonClick: PropTypes.func,
	children: PropTypes.object,
	name: PropTypes.string,
};

Modal.defaultProps = {
	onCloseButtonClick: null,
	children: {},
	name: null,
};

export default Modal;

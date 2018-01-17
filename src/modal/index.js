import React, { PureComponent } from 'react';
import { Modal, ModalBody } from 'reactstrap';

export default class ModalWrapper extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: props.defaultOpen
        };
        this.toggle = this.toggle.bind(this);
    }

    render() {

        const {
            title,
            icon,
            toggle = _isOpen => this.toggle(_isOpen)
        } = this.props;

        const {
            isOpen
        } = this.state;

        return (
            <Modal isOpen={isOpen} toggle={toggle}>
                <ModalBody>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-xs-12">
                                {this.props.children}
                            </div>
                        </div>
                    </div>
                </ModalBody>
            </Modal>
        );
    }

    toggle (isOpen = false) {
        this.setState('isOpen', !isOpen);
    }
}

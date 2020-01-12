import React from "react";

import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Popover from '@material-ui/core/Popover';
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';
import ValidationEmpForm from "./ValidationEmpForm";

import { Modal, ModalHeader, ModalBody , ModalFooter} from "reactstrap";


class PopUpValidation extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            modal: false
        };
        this.toggle = this.toggle.bind(this);
    };

    toggle() {
        this.setState({modal: !this.state.modal});
    }


    render() {
        return (
            <div>
                <div className="ui basic center aligned segment">
                <button className="ui teal icon left labeled button" ariant="primary" onClick={ this.toggle}>
                <i aria-hidden="true" className="add icon"></i>
                    Exprimez Vous
                    </button>
                    </div>
                <Modal isOpen={this.state.modal} fade={false}
                       toggle={this.toggle} >
                    <ModalHeader className="mx-auto modal-header">
                        Ajouter Avis/Validation
                        {this.props.other}
                    </ModalHeader>
                    <ModalBody className="bg-light">
                        <ValidationEmpForm validation = {this.props.validation } close = {this.toggle } />
                    </ModalBody>
                    <ModalFooter>
                        <Button onClick={this.toggle}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}

export default PopUpValidation ;
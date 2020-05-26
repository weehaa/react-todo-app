import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const ModalExample = (props) => {
  const [modal, setModal] = useState(true);

  const toggle = () => {
    setModal(!modal);
    onDismiss();
  }

  const {
    className,
    title = 'Confirm',
    body = 'Please confirm',
    footer = (
      <>
        <Button color="primary" onClick={toggle}>Ok</Button>
        <Button color="secondary" onClick={toggle}>Cancel</Button>
      </>
    ),
    onDismiss = () => {}
  } = props;



  return (
    <div>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>{title}</ModalHeader>
        <ModalBody>{body}</ModalBody>
        <ModalFooter>{footer}</ModalFooter>
      </Modal>
    </div>
  );
}

export default ModalExample;
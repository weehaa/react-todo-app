import React, { useState } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const ModalExample = (props) => {
  const {
    className,
    title,
    body,
    footer,
    onDismiss
  } = props;

  const [modal, setModal] = useState(true);

  const toggle = () => {
    setModal(!modal);
    onDismiss();
  }

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
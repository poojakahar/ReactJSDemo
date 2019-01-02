import React from 'react';
import Modal from 'react-modal';

const CustomModal = (props) => {
  return(
    <Modal isOpen={props.modalIsOpen}
           onRequestClose={props.closeModal}
           style={customStyles}
           contentLabel="Example Modal"
           ariaHideApp={false}>
      {props.children}
    </Modal>
  )
};

export default CustomModal;

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

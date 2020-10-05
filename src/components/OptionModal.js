import React from "react";
import Modal from "react-modal";

const OptionModal = (props) => {
  return (
    <Modal
      isOpen={!!props.selectedOption}
      onRequestClose={props.changemodal}
      contentLabel="selectedOption"
      ariaHideApp={false}
      closeTimeoutMS={400}
      className="modal"
    >
      <h3 className="modal__title">Selected Option</h3>
      {props.selectedOption && (
        <p className="modal__option">{props.selectedOption}</p>
      )}
      <button className="button" onClick={props.changemodal}>
        Close
      </button>
    </Modal>
  );
};

export default OptionModal;

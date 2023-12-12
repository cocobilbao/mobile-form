import React, {useRef, useEffect } from "react";

import "./InputSave.scss";

const InputSave = (props) => {
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div className="input-save-content">
      <span className="save-text">Guarda tus respuestas</span>
      <div className="save-action-group">
      <input ref={inputRef} type="text" placeholder="Teléfono" className="input-save"/>
        <button type="button" className="confirm-button button-active position-relative">
          Finalizar
        </button>
      </div>
    </div>
  );
};

export default InputSave;

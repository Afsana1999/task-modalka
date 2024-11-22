import React, {  useState } from "react";
import useOutsideClick from "../hooks/useOutsideClick";


function Modal() {
  const [isOpen, setIsOpen] = useState(false);
  const getClose = () => setIsOpen(false);
  const { ref } = useOutsideClick(getClose);

  return (
    <div ref={ref}>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <button onClick={() => setIsOpen(true)}>modali ac</button>
      </div>

      {isOpen && (
        <div
          style={{
          
            border: "1px solid black",
            padding: "2rem",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: "20",
            backgroundColor: "white",
          }}
        >
          <button onClick={getClose}>cixis</button>
          <h2>register</h2>
          <div>
            <label>name </label>
            <input type="text" placeholder="ad daxil edin.." />
          </div>
          <div>
            <label>surname </label>
            <input type="text" placeholder="soyad daxil edin.." />
          </div>
          <div>
            <button>okk</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Modal;

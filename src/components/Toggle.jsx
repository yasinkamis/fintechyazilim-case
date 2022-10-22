import React from "react";
import styled from "styled-components";

const Toggle = ({
  toggleButtonController,
  navigate,
  setToggleButtonController,
}) => {
  const handlerOnChange = () => {
    setToggleButtonController((p) => !p);
    navigate({
      pathname: "",
    });
  };

  return (
    <div className="form-check form-switch">
      <ToggleButton
        className="form-check-input"
        type="checkbox"
        role="switch"
        id="flexSwitchCheckDefault"
        checked={toggleButtonController}
        onChange={handlerOnChange}
      />
      <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
        {toggleButtonController
          ? "Başkente Göre Arama Yapmak İçin Kaydır"
          : "Genel Arama Yapmak İçin Kaydır"}
      </label>
    </div>
  );
};

export default Toggle;

const ToggleButton = styled.input`
  cursor: pointer;
`;

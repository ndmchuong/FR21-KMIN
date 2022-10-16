import { useState } from "react";
import "../../sass/style.scss";
import { UIRegister } from "./UIRegister";

export const RequirementForm = () => {
  const [statusRegister, setStatusRegister] = useState(true);
  const handleSetStatus = () => {
    setStatusRegister(false);
  };
  return (
    <>
      <UIRegister status={statusRegister}>
        <button className="btn-register" onClick={handleSetStatus}>
          Đăng kí thông tin
        </button>
      </UIRegister>
    </>
  );
};

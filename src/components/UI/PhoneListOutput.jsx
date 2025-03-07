import React from "react";
import Input from "./Input";
import RemoveButtonIcon from "./RemoveButtonIcon";

import { firstLetterUpper, maskPhone } from "../../util/validations";
import { useDispatch, useSelector } from "react-redux";
import { removePhone } from "../../slices/formSlice";

export default function PhoneListOutput() {
  const form = useSelector((state) => state.form);
  const { phoneList } = form;
  const dispatch = useDispatch();

  function handleRemovePhone(index) {
    const id = phoneList[index].type + phoneList[index].phone;
    dispatch(removePhone(id));
  }

  return (
    <>
      {phoneList.length > 0 &&
        phoneList.map((obj, index) => {
          const phoneType = firstLetterUpper(obj.type);
          const output = phoneType + ": " + maskPhone(obj.phone);
          return (
            <p className="p-2 flex gap-2" key={obj.phone}>
              <Input value={output} id={obj.phone} readOnly />
              <RemoveButtonIcon onClick={() => handleRemovePhone(index)} />
            </p>
          );
        })}
    </>
  );
}

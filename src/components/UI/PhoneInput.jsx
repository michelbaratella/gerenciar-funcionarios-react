import Input from "./Input";

import { phoneTypeList } from "../../util/constants";
import { maskPhone } from "../../util/validations";

export default function PhoneInput({
  enteredPhone,
  enteredPhoneType,
  onChange,
  ...props
}) {
  return (
    <>
      <label
        htmlFor="enteredPhoneType"
        className="text-stone-800 flex-shrink-0"
      >
        Telefone
      </label>
      <select
        name="enteredPhoneType"
        id="enteredPhoneType"
        value={enteredPhoneType}
        className="border-1 border-solid rounded border-stone-400"
        onChange={onChange}
      >
        {phoneTypeList.map((obj) => (
          <option key={obj.value} value={obj.value}>
            {obj.label}
          </option>
        ))}
      </select>
      <Input
        id="enteredPhone"
        name="enteredPhone"
        type="tel"
        value={maskPhone(enteredPhone)}
        onChange={onChange}
        {...props}
      />
    </>
  );
}

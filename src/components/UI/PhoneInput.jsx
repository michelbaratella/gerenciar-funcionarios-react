import Input from "./Input";

export default function PhoneInput({
  enteredPhone,
  enteredPhoneType,
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
        {...props}
        name="enteredPhoneType"
        id="enteredPhoneType"
        value={enteredPhoneType}
        className="border-1 border-solid rounded border-stone-400"
      >
        <option value="residencial">Residencial</option>
        <option value="celular">Celular</option>
        <option value="outro">Outro</option>
      </select>
      <Input
        id="enteredPhone"
        name="enteredPhone"
        required
        {...props}
        type="tel"
        value={enteredPhone}
      />
    </>
  );
}

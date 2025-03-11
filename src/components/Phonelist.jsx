import RemoveButtonIcon from "./UI/RemoveButtonIcon";
import Input from "./UI/Input";

export default function Phonelist({ phoneList, onRemovePhone }) {
  return (
    <>
      {phoneList.length > 0 &&
        phoneList.map((phone) => {
          return (
            <span className="p-2 flex gap-2" key={phone}>
              <Input value={phone} readOnly />
              <RemoveButtonIcon onClick={() => onRemovePhone(phone)} />
            </span>
          );
        })}
    </>
  );
}

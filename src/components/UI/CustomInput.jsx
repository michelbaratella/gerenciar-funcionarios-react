import AddButtonIcon from "../UI/AddButtonIcon";

export default function CustomInput({ labelRef, inputRef }) {
  const classes = `border-solid m-1 rounded p-1 shadow flex justify-between`;

  return (
    <>
      <p className={classes}>
        <input ref={labelRef} className="w-full" placeholder="Nome do campo" />
        <input ref={inputRef} className="w-full" placeholder="Valor do campo" />
      </p>
    </>
  );
}

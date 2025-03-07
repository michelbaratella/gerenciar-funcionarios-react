export default function Input({ label, errors, ...props }) {
  const classes = `border-solid m-1 rounded p-1 shadow flex justify-between`;
  const inputClass = `${!label && "w-full"}`;
  return (
    <>
      <p className={classes}>
        {label && <label className=" text-stone-500">{label}</label>}
        <input {...props} className={inputClass} />
      </p>
      <p className="text-red-500 text-sm">{errors}</p>
    </>
  );
}

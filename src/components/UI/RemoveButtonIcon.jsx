export default function RemoveButtonIcon({ ...props }) {
  return (
    <button type="button" {...props} className="cursor-pointer">
      <i className="fa-solid fa-trash text-stone-600 mr-1"></i>
    </button>
  );
}

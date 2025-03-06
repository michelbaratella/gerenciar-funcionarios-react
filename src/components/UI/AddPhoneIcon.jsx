export default function AddPhoneIcon({ ...props }) {
  return (
    <button type="button" {...props} className="cursor-pointer">
      <i className="fa-solid fa-plus text-stone-600 mr-1"></i>
    </button>
  );
}

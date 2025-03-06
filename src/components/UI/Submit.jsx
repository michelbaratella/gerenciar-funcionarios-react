import { useFormStatus } from "react-dom";

export default function Submit({ ...props }) {
  const { pending } = useFormStatus();
  return (
    <p className="p-2 flex flex-col w-full">
      <button
        disabled={pending}
        {...props}
        className="text-blue-600 border-1 border-solid rounded cursor-pointer hover:bg-blue-600 hover:text-stone-300 disabled:bg-stone-300 disabled:text-stone-700"
      >
        {pending ? "Salvando..." : "Salvar"}
      </button>
    </p>
  );
}

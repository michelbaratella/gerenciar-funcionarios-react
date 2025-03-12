import { useSelector } from "react-redux";

export default function ListEmployees() {
  const { existingEmployees } = useSelector((state) => state.employees);
  return (
    <ul>
      {existingEmployees.map((person) => (
        <li key={person.document} className="m-4 text-sm">
          {JSON.stringify(person)}
        </li>
      ))}
    </ul>
  );
}

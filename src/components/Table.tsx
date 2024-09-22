import { useNavigate } from "react-router-dom";
import { User } from "../../redux/reducers/usersReducer";
import Saperator from "./Saperator";

const Table: React.FC<{ users: User[] }> = ({ users }) => {
  const navigate = useNavigate();
  return (
    <div className="overflow-x-auto px-5">
      <table className="min-w-full bg-white border border-gray-200 table-fixed">
        <thead>
          <tr className="bg-gray-100">
            <th className="py-2 px-4 border-b">ID</th>
            <Saperator />
            <th className="py-2 px-4 border-b">Name</th>
            <Saperator />
            <th className="py-2 px-4 border-b">Email</th>
            <Saperator />
            <th className="py-2 px-4 border-b">Age</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, idx) => (
            <tr
              key={user.id}
              className="hover:bg-gray-50"
              onClick={() => {
                navigate(`/users/${user.id}`);
              }}
            >
              <td className="py-2 px-4 border-b text-center">{idx + 1}</td>
              <Saperator />
              <td className="py-2 px-4 border-b">{user.name}</td>
              <Saperator />
              <td className="py-2 px-4 border-b">{user.email}</td>
              <Saperator />
              <td className="py-2 px-4 border-b">{user.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;

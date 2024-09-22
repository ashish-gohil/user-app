import Table from "../components/Table";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import "../index.css";
import { fetchUsers } from "../../redux/reducers/usersReducer";
import Loader from "../components/TableLoader";

const UsersTable: React.FC = () => {
  const dispatch = useAppDispatch();
  const { users, loading, error, errorMessage } = useAppSelector(
    (state) => state.users
  );

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  if (loading) {
    return <Loader />;
  }
  if (error) {
    return <div>{errorMessage}</div>;
  }

  return <Table users={users} />;
};

export default UsersTable;

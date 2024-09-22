import React, { useEffect } from "react";
import UserLoader from "../components/UserLoader";
import { fetchUserById } from "../../redux/reducers/usersReducer";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { useParams } from "react-router-dom";
// import Loader from "./Loader";

const UserData: React.FC = () => {
  const dispatch = useAppDispatch();
  const { userId } = useParams();

  useEffect(() => {
    dispatch(fetchUserById(userId || "dummy"));
  }, [dispatch, userId]);

  const { user, loading, error } = useAppSelector((state) => ({
    user: state?.users?.curUser,
    loading: state?.users?.loading,
    error: state?.users?.error,
  }));
  if (error) {
    return <div>Something went wrong!</div>;
  }
  return (
    <div className="max-w-md mx-auto p-4 bg-white shadow-md rounded-md">
      <h2 className="text-lg font-bold mb-4">User Details</h2>
      {loading ? (
        <UserLoader />
      ) : (
        user && (
          <div>
            <p className="mb-2">
              <span className="font-bold">Name:</span> {user.name}
            </p>
            <p className="mb-2">
              <span className="font-bold">Email:</span> {user.email}
            </p>
            <p>
              <span className="font-bold">Age:</span> {user.age}
            </p>
          </div>
        )
      )}
    </div>
  );
};

export default UserData;

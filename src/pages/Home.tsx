import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { createUser, User } from "../../redux/reducers/usersReducer";
import { useNavigate } from "react-router-dom";

const Home: React.FC = () => {
  const [formData, setFormData] = useState<Partial<User>>({
    name: null,
    email: null,
    age: null,
  });
  const dispatch = useAppDispatch();
  const userId = useAppSelector((state) => state?.users?.userId);
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    console.log(value);
    setFormData({
      ...formData,
      [name]: name === "age" ? Number(value) : value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(createUser(formData));
    console.log("Form Data:", formData);
  };
  if (userId && userId.length > 0) {
    console.log(userId);
    navigate(`/users/${userId}`);
  }
  return (
    <div className="max-w-md mx-auto p-4 bg-white shadow-md rounded-md">
      <h2 className="text-lg font-bold mb-4">User Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            className="block mb-2 text-sm font-medium text-gray-700"
            htmlFor="name"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name as string}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block mb-2 text-sm font-medium text-gray-700"
            htmlFor="email"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email as string}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block mb-2 text-sm font-medium text-gray-700"
            htmlFor="age"
          >
            Age
          </label>
          <input
            type="number"
            id="age"
            name="age"
            value={formData.age as number}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Home;

import React from "react";

const UserLoader: React.FC = () => {
  return (
    <div className="animate-pulse space-y-4">
      {/* Skeleton loader for Name */}
      <div className="h-4 bg-slate-400 rounded w-3/4"></div>

      {/* Skeleton loader for Email */}
      <div className="h-4 bg-slate-400 rounded w-5/6"></div>

      {/* Skeleton loader for Age */}
      <div className="h-4 bg-slate-400 rounded w-1/2"></div>
    </div>
  );
};

export default UserLoader;

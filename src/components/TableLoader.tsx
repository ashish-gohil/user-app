const Loader: React.FC = () => {
  return (
    <div className="animate-pulse overflow-x-auto px-5 w-full">
      <div>
        {Array.from({ length: 5 }).map((_, index) => (
          <div key={index} className="flex space-x-4 mb-4">
            <div className="h-6 w-[10%] bg-slate-400 rounded"></div>
            <div className="h-6 w-[30%] bg-slate-400 rounded"></div>
            <div className="h-6 w-[45%] bg-slate-400 rounded "></div>
            <div className="h-6 w-[15%] bg-slate-400 rounded "></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Loader;

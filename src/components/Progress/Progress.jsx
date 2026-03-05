import "./Progress.css";

const Progress = ({ task, resolvedTask }) => {
  return (
    <div className="flex flex-col lg:flex-row w-full px-2 lg:w-11/12 mx-auto gap-4 mt-10">
      <div className="hero min-h-60 w=full lg:w-1/2">
        <div
          className="hero-overlay rounded-xl mirrored-background blue"
          //   style={{
          //     backgroundImage: `url(${img})`,
          //   }}
        ></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <p className="text-2xl">In-progress</p>
            <h1 className="mb-5 text-5xl font-bold">{task.length}</h1>
          </div>
        </div>
      </div>
      <div className="hero min-h-50 w-full lg:w-1/2">
        <div
          className="hero-overlay rounded-xl mirrored-background green"
          //   style={{
          //     backgroundImage: `url(${img})`,
          //   }}
        ></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <p className="text-2xl">Resolved</p>
            <h1 className="mb-5 text-5xl font-bold">{resolvedTask.length}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Progress;

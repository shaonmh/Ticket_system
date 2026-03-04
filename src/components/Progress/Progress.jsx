import "./Progress.css";

const Progress = () => {
  return (
    <div className="flex w-11/12 mx-auto gap-4 mt-10">
      <div className="hero min-h-60 w-1/2">
        <div
          className="hero-overlay rounded-xl mirrored-background blue"
          //   style={{
          //     backgroundImage: `url(${img})`,
          //   }}
        ></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <p>In-progress</p>
            <h1 className="mb-5 text-5xl font-bold">0</h1>
          </div>
        </div>
      </div>
      <div className="hero min-h-50 w-1/2">
        <div
          className="hero-overlay rounded-xl mirrored-background green"
          //   style={{
          //     backgroundImage: `url(${img})`,
          //   }}
        ></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <p>In-progress</p>
            <h1 className="mb-5 text-5xl font-bold">0</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Progress;

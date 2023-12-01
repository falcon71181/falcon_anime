import Image from "next/image";

const unknown = () => {
  return (
    <div className='min-h-screen pt-28 px-10 flex flex-row text-center justify-center'>
      <span>
        <div
          style={{
            height: "300px",
            width: "300px",
            borderRadius: "50%",
            border: "2px solid transparent",
            ":hover": { borderColor: "gray-400" },
            backgroundImage: "url('/pp.png')",
            backgroundSize: "cover",
            transition: "all 500ms",
          }}
        />
      </span>
      <span className="text-white text-5xl pt-24">COMING SOON...</span>
    </div>
  );
};

export default unknown;

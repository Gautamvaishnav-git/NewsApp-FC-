import { Dna } from "react-loader-spinner";
const Loader = (props) => {
  return (
    <>
      <div
        className="w-full h-[100vh] fixed top-0 items-center justify-center z-[100] bg-gray-900"
        style={{ display: `${props.loader ? "flex" : "none"}` }}
      >
        <Dna
          visible={props.loader}
          height="80"
          width="80"
          ariaLabel="dna-loading"
          wrapperClass="dna-wrapper"
        />
      </div>
    </>
  );
};

export default Loader;

import { Dna } from "react-loader-spinner";
const Loader = (props) => {
  return (
    <>
      <div
        className=""
        style={{ display: `${props.loader ? "block" : "none"}` }}
      >
        <div className="loader">
          <Dna
            visible={props.loader}
            height="80"
            width="80"
            ariaLabel="dna-loading"
            wrapperStyle={{}}
            wrapperClass="dna-wrapper"
          />
        </div>
      </div>
    </>
  );
};

export default Loader;

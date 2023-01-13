import ErrorPage from "../assets/ErrorPage.webp";

const FetchingError = () => {
  return (
    <>
      <img className="w-1/2 mx-auto hue-rotate-[90deg]" src={ErrorPage} alt="404 Error" />
    </>
  );
};

export default FetchingError;

const NewsItem = (props) => {
  const { author, urlToImage, publishedAt, url, title, description } =
    props.data;
  return (
    <>
      <div className="max-w-auto grow w-full sm:w-60 h-auto hover:shadow-xl hover:scale-[1.01]  duration-200 ease-in">
        <div className="flex flex-wrap h-full">
          <div className="h-full w-full">
            <div className="h-full border border-gray-500/25 rounded-lg overflow-hidden">
              <img
                className="lg:h-48 md:h-36 w-full object-cover object-center"
                src={
                  urlToImage !== null
                    ? urlToImage
                    : "https://www.thermaxglobal.com/wp-content/uploads/2020/05/image-not-found-300x169.jpg"
                }
                alt="blog"
              />
              <div className="md:p-6 p-3">
                <h2 className="tracking-widest text-xs title-font font-medium text-gray-500 mb-1">
                  {new Date(publishedAt).toUTCString()}
                </h2>
                <h1 className="title-font text-lg font-medium text-current mb-3">
                  {title.slice(0, 30)}
                </h1>
                <p className="leading-relaxed mb-3 text-gray-300 opacity-70">
                  {description ? description.slice(0, 100) : "Description"}...
                </p>
                <div className="flex items-center flex-wrap">
                  <a href={url} className="WebButton" target="blank">
                    Read More
                    <svg
                      className="w-4 h-4 ml-2 arrow"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14"></path>
                      <path d="M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsItem;

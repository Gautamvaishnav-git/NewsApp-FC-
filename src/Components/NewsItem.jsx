import { Link } from "react-router-dom";
import { AiOutlineArrowRight } from "react-icons/ai";
import { BsArrowUpRight } from "react-icons/bs";
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
                <h2 className="tracking-widest text-xs title-font text-gray-400 mb-1">
                  {new Date(publishedAt).toUTCString()}
                </h2>
                <p className="tracking-widest text-xs title-font text-gray-300 bg-teal-400/10 p-2 inline-block my-1 rounded">
                  Author:{" "}
                  <span className="text-teal-400">
                    {author ? author : "N/A"}
                  </span>
                </p>
                <h1 className="title-font text-lg font-medium text-current mb-3">
                  {title.slice(0, 30)}
                </h1>
                <p className="leading-relaxed mb-3 text-gray-200 opacity-70">
                  {description ? description.slice(0, 100) : "Description"}...
                </p>
                <div className="flex items-center flex-wrap gap-x-1">
                  <Link
                    to={`/News/${title}`}
                    className="WebButton my-1 grow px-3"
                  >
                    Read More
                    <AiOutlineArrowRight className="mx-1" />
                  </Link>
                  <a
                    href={url}
                    className="WebButton my-1 grow px-2"
                    target={"blank"}
                  >
                    Visit News
                    <BsArrowUpRight className="mx-1" />
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

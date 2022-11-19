import { useState } from "react";

const NewsItem = (props) => {
  const { author, urlToImage, publishedAt, url, title, description } =
    props.data;
  const publishDate = new Date(publishedAt);

  return (
    <>
      <section
        className="card shadow-lg rounded primaryBg w-full sm:w-2/5 md:w-1/4 xl:w-1/5 grow h-100"
        key={author}
      >
        <div className="img w-full h-fit overflow-hidden border-b border-current">
          <img
            src={
              urlToImage !== null
                ? urlToImage
                : "https://www.thermaxglobal.com/wp-content/uploads/2020/05/image-not-found-300x169.jpg"
            }
            alt=""
            draggable="false"
            className="w-full"
          />
        </div>
        <div className="bottom px-2 py-2 flex flex-col gap-1">
          <p>
            <span>{`${publishDate.getDate()}/${publishDate.getMonth()}/${publishDate.getFullYear()}`}</span>
            <span></span>
          </p>
          <h3 className="title text-md font-medium">{title.slice(0, 30)}...</h3>
          <p className="text-sm">
            {description ? description.slice(0, 90) : "Description"}...
          </p>
          <a href={url} target="_blank" className="btn text-center">
            read more..
          </a>
        </div>
      </section>
    </>
  );
};

export default NewsItem;

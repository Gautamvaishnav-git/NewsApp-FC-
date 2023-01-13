import axios from "axios";
import React, { useReducer, useEffect, useCallback } from "react";
import { BsArrowUpRight } from "react-icons/bs";
import { useParams } from "react-router-dom";
import FetchingError from "./FetchingError";

const NewsDetail = (props) => {
  const { apiKey } = props;
  const params = useParams();
  const [newsData, updateData] = useReducer(
    (prev, next) => {
      return { ...prev, ...next };
    },
    { articles: [], fetchingError: false }
  );
  const uri = `https://newsapi.org/v2/everything?q=${params.title}&apiKey=${apiKey}`;

  const getNewsData = useCallback(
    async (URL) => {
      try {
        let { data } = await axios(URL);
        updateData({ articles: data.articles });
      } catch (error) {
        updateData({ fetchingError: true });
      }
    },
    [uri]
  );

  useEffect(() => {
    getNewsData(uri);
  }, [props, uri]);

  if (newsData.fetchingError) return <FetchingError />;

  return (
    <>
      <div className=" flex flex-col gap-8 py-4 sm:px-2">
        {newsData.articles.length > 0 ? (
          newsData.articles.map((article, index) => {
            return (
              <div
                key={article.author ? article.author : index}
                className="sm:px-4 flex sm:flex-row flex-col items-center justify-center px-0 w-full gap-4  bg-teal-500/5 shadow-md rounded py-2"
              >
                <div className="newsImg w-full h-1/2">
                  <img
                    className="w-full h-full object-contain"
                    draggable="false"
                    src={
                      article.urlToImage
                        ? article.urlToImage
                        : "https://www.thermaxglobal.com/wp-content/uploads/2020/05/image-not-found-300x169.jpg"
                    }
                    alt="News Image"
                  />
                </div>
                <div className="content w-full p-2">
                  <h3 className="text-gray-200 font-medium text-lg py-4">
                    {article.title}
                  </h3>
                  <h3 className="text-gray-300 bg-gray-500/30 inline-block px-3 py-1 my-2 rounded">
                    {article.author ? article.author : "N/A"}
                  </h3>
                  <p className="text-gray-300">{article.content}</p>
                  <a
                    href={article.url}
                    className="WebButton my-4"
                    target="_blank"
                  >
                    Visit News
                    <BsArrowUpRight className="mx-1" />
                  </a>
                </div>
              </div>
            );
          })
        ) : (
          <div className="w-full h-[80vh] flex items-center justify-center text-center">
            <h1 className="text-3xl text-amber-500">
              - Sorry No News Found about - <br />{" "}
              <span className="text-xl text-teal-100">{params.title}</span>
            </h1>
          </div>
        )}
      </div>
    </>
  );
};

export default NewsDetail;

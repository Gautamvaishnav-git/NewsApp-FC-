import { useEffect, useState, useCallback, useReducer } from "react";
import NewsItem from "./NewsItem";
import Loader from "./Loader";
import FetchingError from "./FetchingError";
import axios from "axios";

const News = (props) => {
  const { country, category, apiKey } = props;
  const [states, updateState] = useReducer(
    (prev, next) => {
      return { ...prev, ...next };
    },
    {
      loading: false,
      NewsData: [],
      query: "",
      Search: "",
      fetchErr: "",
    }
  );

  const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&q=${states.Search}&pageSize=20&apiKey=${apiKey}`;

  const getData = useCallback(
    async (URL) => {
      try {
        updateState({ loading: true });
        let { data } = await axios(URL);
        updateState({ NewsData: data.articles });
        updateState({ loading: false });
      } catch (error) {
        updateState({ fetchErr: true });
      }
    },
    [URL]
  );

  useEffect(() => {
    document.title = `Next-News - ${category.toUpperCase()}`;
    getData(url);
  }, [props, url]);

  if (states.fetchErr) return <FetchingError />;
  return (
    <>
      <div className="search w-full sm:flex flex-col sm:flex-row justify-center gap-3  items-stretch my-2 py-2 hidden">
        <input
          type="text"
          className="px-3 bg-transparent border-b border-gray-400 focus:border-teal-500 duration-150 outline-none text-current text-md placeholder:italic placeholder:text-slate-400"
          placeholder="Search..."
          onChange={(e) => {
            updateState({ query: e.target.value });
          }}
        />
        <button
          className="WebButton px-4"
          onClick={() => {
            updateState({ Search: states.query });
          }}
        >
          Search
        </button>
        <button
          className="WebButton px-4"
          onClick={() => {
            updateState({ Search: "" });
          }}
        >
          Clear
        </button>
      </div>
      <Loader loader={states.loading} />
      <div className="cards flex gap-5 flex-wrap px-3 py-4 w-full 2xl:w-3/4 2xl:mx-auto">
        {states.NewsData &&
          states.NewsData.map((element, index) => {
            return <NewsItem data={element} key={index} />;
          })}
      </div>
    </>
  );
};

export default News;

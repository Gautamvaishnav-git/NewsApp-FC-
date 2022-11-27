import { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import Loader from "./Loader";

const News = (props) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [query, setQuery] = useState(props.country);
  const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&q=${query}&apiKey=${props.apikey}`;

  useEffect(() => {
    document.title = `Next-News - ${props.category.toUpperCase()}`;
    const getdata = async (URL) => {
      setLoading(true);
      let response = await fetch(URL);
      let getData = await response.json();
      if (getData.articles) {
        setData(getData.articles);
      } else {
        setData("sorry news are not available");
      }
      setLoading(false);
    };
    getdata(url);
  }, [props, url]);
  return (
    <>
      <div className="search w-full sm:flex flex-col sm:flex-row justify-center gap-3  items-streach primaryBg my-2 py-2 hidden">
        <input
          type="text"
          className="px-3 bg-transparent border-b border-current outline-none text-current text-md placeholder:italic placeholder:text-slate-400"
          placeholder="Search..."
          onChange={(e) => {
            setQuery(e.target.value);
          }}
        />
        {/* <button className="search capitalize px-4 btn">
          search
        </button> */}
      </div>
      <Loader loader={loading} />
      <div className="cards flex gap-5 flex-wrap px-3 py-4 w-full 2xl:w-3/4 2xl:mx-auto">
        {data.map((element, index) => {
          return <NewsItem data={element} key={index} />;
        })}
      </div>
    </>
  );
};

export default News;

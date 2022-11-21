import { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import Loader from "./Loader";

const News = (props) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}`;

  useEffect(() => {
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
  }, [props]);
  return (
    <>
      <Loader loader={loading} />
      <div className="cards flex gap-3 flex-wrap px-3 py-4 w-full 2xl:w-3/4 2xl:mx-auto">
        {data.map((element, index) => {
          return <NewsItem data={element} key={index} />;
        })}
      </div>
    </>
  );
};

export default News;

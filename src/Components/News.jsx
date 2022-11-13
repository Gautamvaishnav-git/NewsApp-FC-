import { useEffect, useState } from "react";
import NewsItem from "./NewsItem";

const News = (props) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=${props.API_KEY}&pageSize=8`;

  useEffect(() => {
    const getdata = async (URL) => {
      setLoading(true);
      let response = await fetch(URL);
      let getData = await response.json();
      if (getData.articles) {
        setData(getData.articles);
      } else {
        setData("sorry news are not available");
        setLoading(true);
      }
    };
    getdata(url);
  });

  return (
    <>
      <div className="cards flex gap-3 flex-wrap px-3 py-4 w-full 2xl:w-3/4 2xl:mx-auto">
        {data.map((element) => {
          return (
            <>
              <NewsItem data={element} loader={loading} />
            </>
          );
        })}
      </div>
    </>
  );
};

export default News;

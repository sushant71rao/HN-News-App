import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { Link, useSearchParams } from "react-router-dom";
import Loading from "./Loading";

interface ApiDataType {
  hits: [
    {
      _highlightResult: {
        author: {
          value: String;
        };
        title: {
          value: String;
        };
      };
      url: {
        value: String;
      };
      _tags: [String];
      author: String;
      children: [Number];
      created_at: string;
      created_at_i: number;
      num_comments: number;
      objectID: string;
      points: number;
      title: string;
      updated_at: string;
    }
  ];
}

const HomePage = () => {
  const [searchParams] = useSearchParams();
  let [loading, setLoading] = useState(true);
  let queryParam = searchParams.get("searchquery");
  queryParam == null && (queryParam = "");
  let [FetchedData, setfetchedData] = useState<ApiDataType>();
  useEffect(() => {
    setLoading(true);
    fetch(`https://hn.algolia.com/api/v1/search?query=${queryParam}`)
      .then((res) => res.json())
      .then((data) => {
        setfetchedData(data);
        setLoading(false);
      });
  }, []);
  return (
    <>
      <Navbar></Navbar>
      {loading ? (
        <Loading></Loading>
      ) : (
        <>
          <div>
            <div className="grid md:grid-cols-3 gap-8 p-10 cursor-pointer">
              {FetchedData?.hits?.map((el) => {
                return (
                  <Link to={`/postdetail/${el?.objectID}`}>
                    <div
                      className="bg-[#393E46] p-5 rounded-xl text-[#EEEEEE]"
                      key={el?.objectID}
                    >
                      <div className="text-2xl  text-center  ">
                        "{el?.title}"
                      </div>
                      <div className="text-sm text-left text-[#00ADB5]">
                        -{el?.author}
                      </div>
                      <div className="text-sm text-left text-[#00ADB5]">
                        Created At :{el?.created_at}
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default HomePage;

import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import Loading from "./Loading";
import Comments from "./Comments";

export interface Comment {
  author: string;
  children: Comment[];
  created_at: string;
  created_at_i: number;
  id: number;
  options: any[]; // You can replace "any" with more specific types if needed
  parent_id: number;
  points: number | null;
  story_id: number;
  text: string;
  title: string | null;
  type: string;
  url: string | null;
}

export interface Post {
  author: string;
  children: Comment[];
  created_at: string;
  created_at_i: number;
  num_comments: number;
  objectID: string;
  points: number;
  title: string;
  updated_at: string;
  url: string | null;
}

const PostDetail = () => {
  let { id } = useParams();
  let [loading, setLoading] = useState(true);
  let [Id, setId] = useState<Number>(0);
  const navigate = useNavigate();
  let [FetchedPostData, setfetchedPostData] = useState<Post>();
  useEffect(() => {
    fetch(`https://hn.algolia.com/api/v1/items/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setfetchedPostData(data);
        setLoading(false);
      });
  }, []);
  // console.log(FetchedPostData);

  return (
    <div>
      {loading ? (
        <Loading></Loading>
      ) : (
        <>
          <div className=" bg-[#393E46] text-4xl text-white pl-16 p-6 flex justify-between">
            <div>{FetchedPostData?.title}</div>
            <div>
              <div className="text-2xl">-{FetchedPostData?.author}d</div>
              <div className="text-2xl">
                Points : {FetchedPostData?.points || 0}
              </div>
            </div>
          </div>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#00ADB5",
              ":hover": {
                backgroundColor: "#00ADB5",
              },
            }}
            onClick={() => {
              navigate(-1);
            }}
          >
            Back
          </Button>
          <div className="flex flex-col ml-20 mr-20 gap-2 max-h-[80vh] overflow-scroll mt-10">
            {FetchedPostData?.children?.map((elem) => {
              return (
                <>
                  <div className="bg-[#393E46] text-white rounded-md p-5 flex justify-between">
                    <div className="flex flex-col gap-3">
                      <div className="text-[#00ADB5] italic">
                        "{elem?.text}"
                      </div>
                      <div className="text-xl ">-{elem?.author}</div>
                    </div>
                    {elem?.children?.length != 0 && (
                      <div
                        className=" flex flex-col justify-between "
                        onClick={() => {
                          Id == elem?.id ? setId(0) : setId(elem?.id);
                        }}
                      >
                        <div>{elem?.points}</div>
                        <ArrowDownwardIcon></ArrowDownwardIcon>
                      </div>
                    )}
                  </div>
                  {Id == elem?.id && (
                    <div className={`pl-14 bg-slate-100`}>
                      <Comments
                        children={elem?.children}
                        head={elem?.author}
                      ></Comments>
                    </div>
                  )}
                </>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
};

export default PostDetail;

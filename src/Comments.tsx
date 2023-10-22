import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { useState } from "react";
export interface Comment {
  author: string;
  children: Comment[];
  created_at: string;
  created_at_i: number;
  id: number;
  options: any[];
  parent_id: number;
  points: number | null;
  story_id: number;
  text: string;
  title: string | null;
  type: string;
  url: string | null;
}
interface inputProp {
  children: Comment[];
  head: String;
}

const Comments = (Props: inputProp) => {
  let [Id, setId] = useState<Number>(0);
  return (
    <div className="flex flex-col gap-1">
      {Props.children?.map((elem) => {
        return (
          <>
            <div className="bg-[#393E46] text-white rounded-md p-3 flex justify-between ">
              <div className="flex flex-col gap-3">
                <div className="text-[13px] text-slate-100">
                  Replying to {Props?.head}
                </div>
                <div className="text-[#00ADB5] italic">"{elem?.text}"</div>
                <div className="text-xl ">-{elem?.author}</div>
              </div>
              {elem?.children?.length != 0 && (
                <div
                  className=""
                  onClick={() => {
                    Id == elem?.id ? setId(0) : setId(elem?.id);
                  }}
                >
                  <ArrowDownwardIcon></ArrowDownwardIcon>
                </div>
              )}
            </div>
            <div className="pl-14">
              {Id == elem?.id && (
                <div className={`pl-14 bg-slate-100`}>
                  <Comments
                    children={elem?.children}
                    head={elem?.author}
                  ></Comments>
                </div>
              )}
            </div>
          </>
        );
      })}
      <div></div>
    </div>
  );
};

export default Comments;

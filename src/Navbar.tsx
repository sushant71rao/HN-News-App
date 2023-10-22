import { Button } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";

const Navbar = () => {
  let [text, setText] = useState<string>("");
  return (
    <div
      className="flex justify-around items-center bg-[#30475E] p-2
    "
    >
      <div className="text-1xl text-white ">HACKERNEWS</div>
      <form>
        <div className="flex justify-center items-center gap-2">
          <input
            type="text"
            placeholder="search"
            name="searchquery"
            value={text}
            style={{
              backgroundColor: "white",
              borderRadius: "3px",
              padding: "2px",
            }}
            onChange={(e) => {
              setText(e?.target?.value);
            }}
          ></input>
          <Button
            variant="contained"
            type="submit"
            className="absolute"
            sx={{
              height: "1.8rem",
              backgroundColor: "#F05454",
              ":hover": {
                backgroundColor: "#F05454",
              },
            }}
          >
            <SearchIcon></SearchIcon>
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Navbar;

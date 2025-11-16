import { useState } from "react";
import { HiChevronDown, HiChevronUp } from "react-icons/hi";
import { sideBarList, type ISideBar } from "./SideBar";

type SideBarType = {
  curPage: number;
  setCurPage: (id: number) => void;
};

const SideBar: React.FC<SideBarType> = ({ setCurPage }) => {
  const [currentId, setCurrentId] = useState(0);
  const [currentChildId, setCurrentChildId] = useState(0);

  const chooseBar = (bar: ISideBar, type?: "child") => {
    setCurPage(bar.id);
    if (type) {
      setCurrentChildId(bar.id);
    } else {
      setCurrentId(bar.id);
      if (bar?.children) {
        setCurPage(bar.children[0].id);
        setCurrentChildId(bar.children[0].id);
      }
    }
  };

  return (
    <div className="bg-[#f8fffe] h-screen">
      {/* 导航 */}
      {sideBarList &&
        sideBarList.map((item) => (
          <div key={item.id} onClickCapture={() => chooseBar(item)}>
            <div
              className={`flex justify-center items-center py-2 px-4 cursor-pointer ${
                currentId === item.id ? "text-[#0a4c42]" : "text-[#5fbcae]"
              } `}
            >
              {<item.icon />}
              <span className="ml-1 mr-2"> {item.text}</span>
              {item.children &&
                (currentId === item.id ? <HiChevronDown /> : <HiChevronUp />)}
            </div>

            {item.children &&
              currentId === item.id &&
              item.children.map((child) => (
                <div
                  key={child.id}
                  className={`flex justify-center items-center py-2 px-4 cursor-pointer ${
                    currentChildId === child.id
                      ? "text-[#0a4c42]" : "text-[#5fbcae]"
                  } `}
                  onClickCapture={() => chooseBar(child, "child")}
                >
                  {<child.icon />}
                  <span className="ml-1 mr-2"> {child.text}</span>
                </div>
              ))}
          </div>
        ))}
    </div>
  );
};

export default SideBar;

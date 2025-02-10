import { useState } from "react";
import st from "./Header.module.scss";
import ModalPortal from "../../common/helpers/ModalPortal";
import CreatePost from "../CreatePost";

const Header = () => {
  const [isClick, setIsClick] = useState(false);

  return (
    <>
      <header className={st.container}>
        <div className={st.wrapper}>
          <h2>제목</h2>
          <span style={{ cursor: "pointer" }} onClick={() => setIsClick(true)}>
            글 작성하기
          </span>
        </div>
      </header>
      {isClick && (
        <ModalPortal>
          <CreatePost setIsClick={setIsClick} />
        </ModalPortal>
      )}
    </>
  );
};

export default Header;

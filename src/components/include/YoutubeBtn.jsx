import React from "react";

const YoutubeBtn = ({ onSearch }) => {
  const onClick1 = () => {
    onSearch("언제나 가을");
  };
  const onClick2 = () => {
    onSearch("뭉치");
  };
  const onClick3 = () => {
    onSearch("몽자");
  };
  const onClick4 = () => {
    onSearch("haha ha");
  };
  const onClick5 = () => {
    onSearch("탐탕이네");
  };

  return (
    <div className="youtube__btn">
      <div className="container">
        <button type="submit" onClick={onClick1}>
          언제나 가을
        </button>
        <button type="submit" onClick={onClick2}>
          뭉치
        </button>
        <button type="submit" onClick={onClick3}>
          몽자
        </button>
        <button type="submit" onClick={onClick4}>
          haha ha
        </button>
        <button type="submit" onClick={onClick5}>
          탐탕이네
        </button>
      </div>
    </div>
  );
};

export default YoutubeBtn;

import React from "react";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="footer__inner">
        <div>
          <h3>email</h3>
          <a href="mailto:hjkang306@naver.com">hjkang306@naver.com</a>
        </div>
        <div>
          <h3>kakao</h3>
          <a href="/">hjkang306</a>
        </div>
        <div>
          <h3>social</h3>
          <ul>
            <li>
              <a href="/">Youtube</a>
            </li>
            <li>
              <a href="/">Instargram</a>
            </li>
            <li>
              <a href="/">Github</a>
            </li>
            <li>
              <a href="/">Tistory</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

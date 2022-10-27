import React from "react";
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from "react-html-parser";

const HtmlComponent = ({ tag = "div", html, ...rest }) => {
  const Tag = tag;
  return <Tag {...rest}>{ReactHtmlParser(html)}</Tag>;
};

export default HtmlComponent;

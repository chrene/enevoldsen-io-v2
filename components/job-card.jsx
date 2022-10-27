import Card from "./card";
import classNames from "classnames";
import HtmlParser from "react-html-parser";
import HtmlComponent from "./html";

const JobCard = ({ job, featured }) => {
  const { title, company, description, url, start, end = "present", tags } = job;
  const mainTextClassNames = classNames({
    "text-neutral-content": featured,
    "text-base-content  ": !featured,
  });
  return (
    <Card backgroundColor={featured ? "primary" : "white"}>
      <Card.Body>
        <div className="w-full space-y-2 relative flex flex-col items-start justify-space-between">
          <div className="flex flex-row w-full items-center justify-space-between max-w-full">
            <a
              href={url}
              rel="noopener noreferrer"
              target="_blank"
              className={classNames(`uppercase text-xs break-words overflow-hidden mr-4`, {
                "text-neutral-content": featured,
                "text-base-content": !featured,
              })}
            >
              {company}
            </a>
            <div
              className={classNames("badge border-none ml-auto", {
                "text-neutral-content bg-black bg-opacity-10": featured,
                "text-base-content text-opacity-70 bg-black bg-opacity-10 ": !featured,
              })}
            >
              {start} - {end}
            </div>
          </div>
          <div
            className={classNames(
              mainTextClassNames,
              "break-words overflow-hidden mr-4 font-extrabold text-2xl max-w-full"
            )}
          >
            {title}
          </div>
        </div>
        <HtmlComponent html={description} className={mainTextClassNames} />
        {/* <div className="flex flex-wrap gap-2">
          {tags?.map(tag => (
            <div
              key={tag}
              className={classNames("badge border-none", {
                "text-primary-content bg-black bg-opacity-10": featured,
                "text-base-content bg-black bg-opacity-10": !featured,
              })}
            >
              {tag}
            </div>
          ))}
        </div> */}
      </Card.Body>
    </Card>
  );
};

export default JobCard;

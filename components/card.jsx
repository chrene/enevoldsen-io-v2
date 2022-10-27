import React from "react";
import classnames from "classnames";

const Card = props => {
  const { children, meta, backgroundColor = "white", className, ...rest } = props;

  const backgroundColors = {
    white: "bg-base-100",
    primary: "bg-primary",
    secondary: "bg-secondary",
  };

  return (
    <div
      className={classnames(
        ["rounded-3xl", "shadow-xl", "shadow-dark-100/5", "w-full", backgroundColors[backgroundColor], className].join(
          " "
        )
      )}
      {...rest}
    >
      {children}
    </div>
  );
};

export const CardHeader = props => {
  const { children, className, ...rest } = props;
  return (
    <div
      className={classnames(
        className,
        "border-b border-px border-base-100 text-center p-4 bg-base-200 bg-opacity-20 overflow-hidden"
      )}
      {...rest}
    >
      {children}
    </div>
  );
};

export const CardBody = props => {
  const { children, className, ...rest } = props;
  return (
    <div className={classnames("relative p-4 sm:p-6 space-y-4", className)} {...rest}>
      {children}
    </div>
  );
};

Card.Header = CardHeader;
Card.Body = CardBody;

export default Card;

const Button = ({ children, textOnly, className, ...props }) => {
  let cssclasses = textOnly ? "text-button" : "button";
  cssclasses += " " + className;
  return (
    <button className={cssclasses} {...props}>
      {children}
    </button>
  );
};

export default Button;

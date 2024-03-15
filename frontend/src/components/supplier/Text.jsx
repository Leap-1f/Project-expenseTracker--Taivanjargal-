import { jsx } from "react/jsx-runtime";

const Text = ({text, addClass}) => {
    return (
      <div>
        <p className={`${addClass}`}>{text}</p>
      </div>
    );
};

export default Text
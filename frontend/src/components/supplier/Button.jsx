const Button = ({ text, addClass, onClick }) => {
  return (
    <div>
      <button
        className={`btn w-full rounded-[20px] hover:bg-blue-700 text-white bg-[#0166FF] text-lg font-normal ${addClass}`}
        onClick={onClick}>
        {text}
      </button>
    </div>
  );
};

export default Button;

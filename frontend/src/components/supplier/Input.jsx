const Input = ({ addClass, placeholder, type, text, value, onChange }) => {
  // const InputValue = (event) => {
  //   setState(event.target.value);
  // };
  return (
    <div>
      <input
        value={value}
        type={type}
        placeholder={placeholder}
        className={`input input-bordered bg-gray-100 border-1 border-base-300 ${addClass}`} onChange={onChange}>
        {text}
      </input>
    </div>
  );
};
export default Input;

const Logo = ({ addClass }) => {
  return (
    <div className={`flex ${addClass} items-center`}>
      <img src="./Vector.svg" alt="" />
      <img src="./Geld.svg" alt="" />
    </div>
  );
};

export default Logo;

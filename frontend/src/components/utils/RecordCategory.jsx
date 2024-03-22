import {
  CaretDown,
  PlusCircle,
  House,
  Gift,
  ForkKnife,
  Wine,
  Taxi,
  TShirt,
} from "@phosphor-icons/react";

export const RecordCategory = () => {
  const category = [
    { icon: <House size={22} color="#2861e6" weight="fill" />, text: "Home" },
    { icon: <Gift size={22} color="#e82626" weight="fill" />, text: "Gift" },
    {
      icon: <ForkKnife size={22} color="#e8ce26" weight="fill" />,
      text: "Food",
    },
    { icon: <Wine size={22} color="#a923e7" weight="fill" />, text: "Drink" },
    { icon: <Taxi size={22} color="#e7e023" weight="fill" />, text: "Taxi" },
    {
      icon: <TShirt size={22} color="#23d9e7" weight="fill" />,
      text: "Shopping",
    },
  ];

  return (
    <div>
      <label className="form-control w-full max-w-[400px]">
        <div className="label">
          <span className="label-text">Category</span>
        </div>
        <div className="dropdown dropdown-bottom relative">
          <div
            tabIndex={0}
            role="button"
            className="btn m-1 w-[400px] flex justify-between"
          >
            <p>Find and choose category</p> <CaretDown />
          </div>
          <ul className="dropdown-content z-10 menu p-2 shadow bg-base-100 rounded-box w-[400px] max-h-[195px] overflow-y-auto">
            <div>
              <div className="flex px-3 py-3 gap-x-3 border-b-2">
                <PlusCircle size={22} color="#3457e5" weight="fill" />
                <p className="text-[17px]">Add Category</p>
              </div>
              {category.map((el, index) => (
                <div
                  key={index}
                  className="flex px-3 py-3 gap-x-3 hover:bg-zinc-200 hover:rounded-xl"
                >
                  {el.icon}
                  <p className="text-[17px]">{el.text}</p>
                </div>
              ))}
            </div>
          </ul>
        </div>
      </label>
    </div>
  );
};

import { createContext } from "react";
export const Context = createContext([]);

export const ContextProvider = ({ children }) => {
  const data = {
    labels: ["Bills", "Food", "Shopping", "Insurance", "Clothing"],
    datasets: [
      {
        label: "My First Dataset",
        data: [50, 50, 70, 50, 70],
        backgroundColor: [
          "rgb(28, 100, 242)",
          "rgb(242, 144, 28)",
          "rgb(22, 189, 202)",
          "rgb(253, 186, 140)",
          "rgb(231, 70, 148)",
        ],
        hoverOffset: 4,
      },
    ],
  };
  const dataBar = {
    labels: ["Jul", "Jul", "Jul", "Jul", "Jul", "Jul", "Jul"],
    datasets: [
      {
        data: [100, 100, 100, 100, 100, 100, 100],
        backgroundColor: [
          "rgb(132, 204, 22)",
          "rgb(132, 204, 22)",
          "rgb(132, 204, 22)",
          "rgb(132, 204, 22)",
          "rgb(132, 204, 22)",
        ],
        hoverOffset: 4,
        borderRadius: 50,
      },
      {
        data: [75, 75, 75, 75, 75, 75, 75],
        backgroundColor: [
          "rgb(249, 115, 22)",
          "rgb(249, 115, 22)",
          "rgb(249, 115, 22)",
          "rgb(249, 115, 22)",
          "rgb(249, 115, 22)",
        ],
        hoverOffset: 4,
        borderRadius: 50,
      },
    ],
  };
  const options = {
    plugins: {
      legend: {
        position: "right",
        labels: {
          usePointStyle: true,
          pointStyle: "circle",
          padding: 30,
        },
      },
    },
  };
  const optionsBar = {
    plugins: {
      legend: {
        position: "right",
        display: false,
      },
    },
    elements: {
      bar: {
        borderRadius: 50,
        barSpacing: 10,
      },
      point: {
        borderRadius: 10,
      },

      categorySpacing: 0,
    },
  };
  return (
    <Context.Provider value={{ data, options, optionsBar, dataBar }}>
      {children}
    </Context.Provider>
  );
};

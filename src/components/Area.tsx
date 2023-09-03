import { useState, useEffect } from "react";

interface AreaItems {
  strArea: string;
  btnHover: string;
}

let AreaArray: Array<AreaItems> = [
  {
    strArea: "American",
    btnHover: "#ffae25",
  },
  {
    strArea: "British",
    btnHover: "#ff002a",
  },
  {
    strArea: "Canadian",
    btnHover: "#fc16a8",
  },
  {
    strArea: "Chinese",
    btnHover: "#ff4f00",
  },
  {
    strArea: "Croatian",
    btnHover: "#7fc61b",
  },
  {
    strArea: "Dutch",
    btnHover: "#ff002a",
  },
  {
    strArea: "Egyptian",
    btnHover: "#61CE70",
  },
  {
    strArea: "Filipino",
    btnHover: "#077a6e",
  },
  {
    strArea: "French",
    btnHover: "#cc5b06",
  },
  {
    strArea: "Greek",
    btnHover: "#52a815",
  },
  {
    strArea: "Indian",
    btnHover: "#00baff",
  },
  {
    strArea: "Irish",
    btnHover: "#007bff",
  },
  {
    strArea: "Italian",
    btnHover: "#E53E3E",
  },
  {
    strArea: "Jamaican",
    btnHover: "#DD6B20",
  },
  {
    strArea: "Japanese",
    btnHover: "#38A169",
  },
  {
    strArea: "Kenyan",
    btnHover: "#319795",
  },
  {
    strArea: "Malaysian",
    btnHover: "#3182CE",
  },
  {
    strArea: "Mexican",
    btnHover: "#086F83",
  },
  {
    strArea: "Moroccan",
    btnHover: "#805AD5",
  },
  {
    strArea: "Polish",
    btnHover: "#D53F8C",
  },
  {
    strArea: "Portuguese",
    btnHover: "#22543D",
  },
  {
    strArea: "Russian",
    btnHover: "#702459",
  },
  {
    strArea: "Spanish",
    btnHover: "#9C4221",
  },
  {
    strArea: "Thai",
    btnHover: "#C53030",
  },
  {
    strArea: "Tunisian",
    btnHover: "#ECC94B",
  },
  {
    strArea: "Turkish",
    btnHover: "#0BC5EA",
  },
  {
    strArea: "Vietnamese",
    btnHover: "#702459",
  },
];

export default function Area({ areaProps }: { areaProps: string }) {
  const [color, setColor] = useState<string>("");

  useEffect(() => {
    // Assuming 'area' is an array of AreaItems
    let filteredItems = AreaArray.filter(
      (item) => item.strArea.toLowerCase() === areaProps.toLowerCase()
    )[0];
    // console.log(filteredItems);
    setColor(filteredItems.btnHover);
  }, []);

  return (
    <div className="site-category">
      <button
        type="button"
        style={{
          backgroundColor: color,
        }}
      >
        {areaProps}
      </button>
    </div>
  );
}

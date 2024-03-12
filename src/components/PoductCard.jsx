import React from "react";
import Terminal1 from "../assets/image 1.png";
import Terminal2 from "../assets/image 2.png";
import Terminal3 from "../assets/image 3.png";

const ProductCard = ({ product }) => {
  const { Product, Specs, image } = product;
  console.log(product);

  const handleViewClick = () => {
    window.location.href =
      "https://ecatalog.corning.com/optical-communications/US/en/Fiber-Optic-Hardware/Terminals/Ruggedized-Terminal/OptiSheath%C2%AE-MultiPort-Terminal%2C-Single-Tube-Gel-Filled-Cable%2C-Toneable%2C-Stubbed%2C-4-port/p/optisheath-multiport-terminal-single-tube-gel-filled-cable-toneable-stubbed-4-port";
  };
  return (
    <div className="card_product">
      <div>
        <img
          src={image}
          alt={`Product: ${Product}`}
          style={{ width: "100%" }}
        />
      </div>
      <div style={{ fontSize: "16px", fontWeight: "bold" }}>{Product}</div>
      <div style={{ marginTop: "10px" }}>{Specs}</div>
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <button
          className="view-button"
          onClick={() => {
            handleViewClick();
          }}
        >
          View
        </button>
      </div>
    </div>
  );
};

const ProductCardList = ({ device }) => {
  const productData = {
    Corning: [
      {
        Product: "OptiSheath® MultiPort Terminal",
        Specs:
          "OptiTip® Multifiber Jumper, Toneable, Single-Tube Cable, 4 port Single-mode (OS2), 50 ft.",
        PartNumber: "345678987654",
        image: Terminal1,
      },
      {
        Product: "OptiConnect® MultiPort Terminal",
        Specs:
          "OptiTip® Multifiber Jumper, Bend Insensitive, 8 port Multi-mode (OM4), 75 ft.",
        PartNumber: "123456789012",
        image: Terminal2,
      },
    ],
    Comscope: [
      {
        Product: "NOVUX™ Hardened Multi-fiber Terminal",
        Specs:
          "OptiTip® Multifiber Jumper, Toneable, Single-Tube Cable, 4 port Single-mode (OS2), 50 ft.",
        PartNumber: "345678987654",
        image: Terminal1,
      },
      {
        Product: "FiberXpress™ Multi-fiber Terminal",
        Specs:
          "OptiTip® Multifiber Jumper, Armored, 6 port Single-mode (OS2), 60 ft.",
        PartNumber: "789012345678",
        image: Terminal3,
      },
    ],
    Panduit: [
      {
        Product: "Fiber Distribution Hub",
        Specs:
          "OptiLink® Multifiber Jumper, Bend Insensitive, 12 port Single-mode (OS2), 80 ft.",
        PartNumber: "987654321098",
        image: Terminal3,
      },
      {
        Product: "OptiCore™ Hardened Fiber Enclosure",
        Specs:
          "OptiTip® Multifiber Jumper, Toneable, Single-Tube Cable, 8 port Multi-mode (OM3), 70 ft.",
        PartNumber: "567890123456",
        image: Terminal2,
      },
    ],
  };

  return (
    <div>
      <div style={{ display: "flex", width: "100%", marginLeft: "45px" }}>
        {device.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductCardList;

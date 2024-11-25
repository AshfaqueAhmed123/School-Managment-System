import AreaCard from "./AreaCard";
import "./AreaCards.scss";

const AreaCards = () => {
  return (
    <section className="content-area-cards">
      {/* <AreaCard
        // colors={["#e4e8ef", "#475be8"]}
        colors={["transparent"]}
        percentFillValue={80}
        cardInfo={{
          title: "your total subjects",
          value: "= 8 subjects",
          text: ""
        }}
      /> */}
      <div className="flex items-center justify-center">
          <h1 className="text-2xl font-sans font-bold capitalize text-white bg-[#2E2E48] p-5 rounded-md">your total subjects = <span className="text-blue-500 text-6xl">8</span></h1>
      </div>
      <AreaCard
        colors={["#e4e8ef", "#4ce13f"]}
        percentFillValue={50}
        cardInfo={{
          title: "your assignments",
          value: "= 10 total",
          text: "your assignments report",
        }}
      />
      <AreaCard
        colors={["#e4e8ef", "#f29a2e"]}
        percentFillValue={40}
        cardInfo={{
          title: "your resources",
          value: " = 20 total",
          text: "your resources report",
        }}
      />
    </section>
  );
};

export default AreaCards;

import AreaCard from "./AreaCard";
import "./AreaCards.scss";

const AreaCards = () => {
  return (
    <section className="content-area-cards">
      <AreaCard
        colors={["#e4e8ef", "#475be8"]}
        percentFillValue={80}
        cardInfo={{
          title: "All Teachers",
          value: "= 45 Teachers",
          text: "total teachers in our college",
        }}
      />
      <AreaCard
        colors={["#e4e8ef", "#4ce13f"]}
        percentFillValue={50}
        cardInfo={{
          title: "All Students",
          value: "= 500 students",
          text: "total students in our college",
        }}
      />
      <AreaCard
        colors={["#e4e8ef", "#f29a2e"]}
        percentFillValue={40}
        cardInfo={{
          title: "Non-Academic Staff",
          value: " = 20 peoples",
          text: "total non-academic staff in our college",
        }}
      />
    </section>
  );
};

export default AreaCards;

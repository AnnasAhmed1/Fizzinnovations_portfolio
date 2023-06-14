import { H1 } from "@/components/helper";
import PlanCard from "@/components/plan_card";
import TextWithBackground from "@/components/text_with_background";
import React from "react";
import Styles from "../styles/Home.module.css";

const Plans = () => {
  return (
    <section
      className={`
      ${Styles.grayBackground}
        px-[10%]
        py-[5%]
        max-sm:py-[15%]
        bg-[#EEF3F7
        items-center
        flex-col
        justify-center
        flex
        `}
    >
      <TextWithBackground text="Pricing Plans" />
      <H1
        initialText="Our"
        colouredText=" Awesome "
        endText="Pricing Plans"
        className="mt-[20px] mb-[40px] text-center"
      />

      <div
        className="
        grid
        grid-cols-3
        gap-8
        max-md:grid-cols-2
        max-sm:grid-cols-1
        "
      >
        <PlanCard />
        <PlanCard />
        <PlanCard />
      </div>
    </section>
  );
};

export default Plans;

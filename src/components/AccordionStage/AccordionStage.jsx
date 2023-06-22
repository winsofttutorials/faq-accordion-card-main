import React, { useState } from "react";
import "./AccordionStage.css";
import data from "../../utils/data.json";
import { arrow } from "../../components";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
  AccordionItemState,
} from "react-accessible-accordion";

const AccordionStage = () => {
  // state = { click: false };
  const [className, setClassName] = useState(null);

  return (
    <Accordion
      className="accordion"
      allowMultipleExpanded={false}
      preExpanded={[0]}
    >
      <h1 className="title">FAQ</h1>
      <AccordionItemState>
        {({ expanded }) =>
          expanded
            ? setClassName("accordionPanel active")
            : setClassName("accordionPanel")
        }
      </AccordionItemState>
      {data.map((item, i) => (
        <AccordionItem className="accordionItem" key={i}>
          <AccordionItemHeading>
            <AccordionItemButton style={{ display: "flex" }}>
              <span className="accordionPanel">{item.Header}</span>
              <div>
                <img src={arrow} alt="drop" className="arrowImg" />
              </div>
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel className="accordionText">
            <p>{item.Text}</p>
          </AccordionItemPanel>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default AccordionStage;

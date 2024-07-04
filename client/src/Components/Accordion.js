import React, { useState, useEffect } from 'react';
import AccordionList from './AccordionList';
import './styles.css';

const Accordion = ({ data, mode = 'multiple', defaultOpen = [], renderHeader, renderContent }) => {
  const [openItems, setOpenItems] = useState([]);

  useEffect(() => {
    setOpenItems(defaultOpen);
  }, [defaultOpen]);

  const handleItemClick = (index) => {
    if (mode === 'allOpen') return;

    if (mode === 'single') {
      setOpenItems([index]);
    } else if (mode === 'multiple') {
      setOpenItems((prevOpenItems) =>
        prevOpenItems.includes(index)
          ? prevOpenItems.filter((item) => item !== index)
          : [...prevOpenItems, index]
      );
    }
  };

  return (
    <div className="accordion">
      {data.map((item, index) => (
        <AccordionList
          key={index}
          isOpen={mode === 'allOpen' || openItems.includes(index)}
          onClick={() => handleItemClick(index)}
          header={renderHeader(item, index)}
          content={renderContent(item, index)}
        />
      ))}
    </div>
  );
};

export default Accordion;

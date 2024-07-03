import React from 'react';

const AccordionItem = ({ isOpen, onClick, header, content }) => {
  return (
    <div className={`accordion-item ${isOpen ? 'open' : ''}`}>
      <div className="accordion-header" onClick={onClick}>
        <div>{header}</div>
        <div className="arrow">{isOpen ? '▼' : '▶'}</div>
      </div>
      {isOpen && <div className="accordion-content">{content}</div>}
    </div>
  );
};

export default AccordionItem;

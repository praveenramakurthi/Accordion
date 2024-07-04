import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleRight, faArrowAltCircleDown } from '@fortawesome/free-regular-svg-icons';

const AccordionItem = ({ isOpen, onClick, header, content, direction }) => {
  return (
    <div className={`accordion-item ${isOpen ? 'open' : ''}`}>
      <div className="accordion-header" onClick={onClick}>
        <div>{header}</div>
        <div className="arrow">
          <FontAwesomeIcon
            icon={isOpen ? faArrowAltCircleDown : faArrowAltCircleRight}
            style={{ color: '#6ba1ff' }}
          />
        </div>
      </div>
      {isOpen && <div className={`accordion-content ${direction ? direction : ''}`}>{content}</div>}
    </div>
  );
};

export default AccordionItem;

import React from 'react';
import Accordion from './Components/Accordion';

const App = () => {
  const accordionData = [
    {
      Question: "What is your name",
      Answer: "Praveen Kumar"
    },
    {
      Question: "Where do you live",
      Answer: "Chennai, India"
    },
    {
      Question: "What do you do",
      Answer: "I am a software developer"
    }
  ];

  const renderHeader = (item) => (
    <div>
      {item.Question}
    </div>
  );

  const renderContent = (item) => (
    <div>
      {item.Answer}
    </div>
  );

  return (
    <div className="App">
      <Accordion
        data={accordionData}
        mode="single"
        defaultOpen={[0]}
        renderHeader={renderHeader}
        renderContent={renderContent}
      />
    </div>
  );
};

export default App;

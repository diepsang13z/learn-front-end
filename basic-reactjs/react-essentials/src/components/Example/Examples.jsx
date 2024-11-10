import { useState } from 'react';

import { EXAMPLES } from '../../data.js';

import Section from '../Section.jsx';
import TabButton from './Tab/TabButton.jsx';
import Tabs from './Tab/Tabs.jsx';

import './Examples.css';

export default function Examples() {
  const [selectedTopic, setSelectedTopic] = useState();

  function selectHandler(selectedButton) {
    // selectedButton: 'components', 'jsx', 'props', 'state'
    setSelectedTopic(selectedButton);
  }

  let tabContent = <p>Plase select a topic.</p>;

  if (selectedTopic) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
    );
  }

  return (
    <Section title={'Example'} id={'examples'}>
      <Tabs
        ButtonsContainer={'menu'}
        buttons={
          <>
            <TabButton
              isSelected={selectedTopic === 'components'}
              onClick={() => selectHandler('components')}
            >
              Components
            </TabButton>
            <TabButton
              isSelected={selectedTopic === 'jsx'}
              onClick={() => selectHandler('jsx')}
            >
              JSX
            </TabButton>
            <TabButton
              isSelected={selectedTopic === 'props'}
              onClick={() => selectHandler('props')}
            >
              Pros
            </TabButton>
            <TabButton
              isSelected={selectedTopic === 'state'}
              onClick={() => selectHandler('state')}
            >
              State
            </TabButton>
          </>
        }
      >
        {tabContent}
      </Tabs>
    </Section>
  );
}

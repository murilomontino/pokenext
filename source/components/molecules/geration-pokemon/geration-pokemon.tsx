import { Tab } from '@headlessui/react';
import React, { useState } from 'react';

type TabPokemons = {
  children: React.ReactNode
}

export default function MyTabs ({ children }: TabPokemons) {
  const [currentTab, setCurrentTab] = useState(0);

  return (
    <Tab.Group>
      <Tab.List className='flex space-x-1 '>
        <Tab className={`bg-blue-900/20 p-1 rounded-lg ${currentTab === 0 ? 'bg-blue-900' : ''}`} onClick={() => setCurrentTab(0)}>Primeira Geração</Tab>
        <Tab className={`bg-blue-900/20 p-1 rounded-lg ${currentTab === 1 ? 'bg-blue-900' : ''}`} onClick={() => setCurrentTab(1)}>Segunda Geração</Tab>
        <Tab className={`bg-blue-900/20 p-1 rounded-lg ${currentTab === 2 ? 'bg-blue-900' : ''}`} onClick={() => setCurrentTab(2)}>Terceira Geração</Tab>
      </Tab.List>
      <Tab.Panels className='mt-2'>
        {React.Children.toArray(children).map((child, index) => (
          <Tab.Panel className={currentTab === index ? 'block' : 'hidden'}>
            {child}
          </Tab.Panel>
        ))}
      </Tab.Panels>
    </Tab.Group>
  )
}

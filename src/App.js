import React, { useState } from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";
import Translate from "./components/Translate";
import Route from "./components/Route";
import Header from "./components/Header";

const items = [
    {
        title: 'What is React?',
        content: 'React is a frontend Js framework',
    },
    {
        title: 'Why use React?',
        content: 'React is a favourite Js library among Engineers'
    },
    {
        title: 'How do you use React?',
        content: 'We use React by creating components',
    },
];
const options = [
    {
        label: 'A color of Green',
        value: 'green',
    },
    {
        label: 'A color of red',
        value: 'red',
    },
    {
        label: 'A shade of blue',
        value: 'blue',
    }
];


export default () => {
    const [selected, setSelected] = useState(options[0]);
    return (
        <div>
            <Header />
            <Route path="/"><Accordion items={items} /></Route>
            <Route path="/list"><Search /></Route>
            <Route path="/dropdown">
                <Dropdown
                    options={options}
                    selected={selected}
                    onSelectedChange={setSelected}
                    label="Select a color"
                />
            </Route>
            <Route path="/translate"><Translate /></Route>
        </div>
    );
};
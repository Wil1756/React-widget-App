import React, { useState } from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";
import Translate from "./components/Translate";

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
    return (
        <div>
            <Translate />
        </div>
    );
};
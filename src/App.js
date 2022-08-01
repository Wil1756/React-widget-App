import React from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";

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
export default () => {
    return (
        <div>
            <Search />
        </div>
    );
};
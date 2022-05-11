import React from "react";
import "./index.css";

const test = {
   kek: 'kek',
   bottle: 2,
   object: {
      asd: '123',
   }
}

const { kek } = test;

export const Button = ({ title }) => {
   const handleClick = () => {
      console.log('Перивет');
   }

   return (
      <button id="13" className="button" onClick={handleClick}>
         {title}
      </button>
   )
}

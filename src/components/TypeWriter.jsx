import React, { useState, useEffect } from "react";

const Typewriter = ({ texts, typingSpeed = 100, deletingSpeed = 50, delay = 1000 }) => {
   const [index, setIndex] = useState(0);      // which text we are typing
   const [subIndex, setSubIndex] = useState(0); // typing progress
   const [deleting, setDeleting] = useState(false);

   useEffect(() => {
      if (index === texts.length) return; // safety

      // When full text typed → wait → start deleting
      if (!deleting && subIndex === texts[index].length) {
         setTimeout(() => setDeleting(true), delay);
         return;
      }

      // When deleted completely → move to next word
      if (deleting && subIndex === 0) {
         setDeleting(false);
         setIndex((prev) => (prev + 1) % texts.length);
         return;
      }

      const timeout = setTimeout(() => {
         setSubIndex((prev) => prev + (deleting ? -1 : 1));
      }, deleting ? deletingSpeed : typingSpeed);

      return () => clearTimeout(timeout);
   }, [subIndex, deleting]);

   return (
      <span className="text-slate-900 font-bold border-r-2 border-slate-900 pr-1 animate-pulse">
         {texts[index].substring(0, subIndex)}
      </span>
   );
};

export default Typewriter;

import React from "react";

const renderLinks = (links, setStateDependingOnUrl) => {
  if (!links) return;

  return links.map((element, index) => {
    return (
      <a 
        className="modal__link" 
        key={index} 
        onClick={() => setStateDependingOnUrl(element.url)}
      >
        {element.name || element.title}
      </a>
    );
  });
}

export default renderLinks;
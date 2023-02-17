import React from "react";

export default function Collapse(content_collape) {
  return (
    <li className="collapse">
        <div className="collapse__title">
            <p>{content_collape.titre}</p>
            <i class="fa-solid fa-chevron-down"></i>
        </div>
        <div className="collapse__content">
            <p>{content_collape.content}</p>
        </div>
    </li>
  );
}
import Link from "next/link";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

const SubNavItems = ({ subItem = {} }) => {
  const [expand, setExpand] = useState(false);

  const handleExpand = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setExpand((preExpand) => !preExpand);
  };

  const { href, subItems, name } = subItem;
  return (
    <li>
      <Link href={href} className={expand ? " expanded" : ""}>
        {name}
        {subItems?.length && (
          <button
            onClick={handleExpand}
            aria-label='dropdown toggler'
            className={expand ? "expanded" : ""}
          >
            <FontAwesomeIcon icon={faAngleDown} />
          </button>
        )}
      </Link>
      <ul
        style={{
          display: expand ? "block" : "none",
        }}
      >
        {subItems?.map((item) => (
          <li key={item.id}>
            <Link href={item.href}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </li>
  );
};

export default SubNavItems;

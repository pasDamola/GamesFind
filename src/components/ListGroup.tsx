import { useState } from "react";
import produce from "immer";

interface ListGroupProps {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: ListGroupProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [bugs, setBugs] = useState([
    { id: 1, title: "Bug 1", fixed: false },
    { id: 2, title: "Bug 2", fixed: false },
  ]);

  const handleClick = (item: number) => {
    setSelectedIndex(item);
  };

  const handleUpdate = () => {
    setBugs([...bugs, { id: 3, title: "Bug 4", fixed: true }]);
  };

  const handleBugFix = () => {
    setBugs(bugs.map((bug) => (bug.id === 1 ? { ...bug, fixed: true } : bug)));
  };

  const handleBugFixImmer = () => {
    setBugs(
      produce((draft) => {
        const bugToUpdate = draft.find((bug) => bug.id === 1);
        if (bugToUpdate) bugToUpdate.fixed = true;
      })
    );
  };

  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              handleClick(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
      <ul className="list-group">
        {bugs.map((bug) => (
          <li key={bug.id} onClick={handleBugFix}>
            {bug.title} - {bug.fixed ? "Fixed" : "Not Fixed"}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;

import Button from "./components/Button";
import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import { useState } from "react";
import Like from "./components/Like";
import Game from "./components/Game";

function App() {
  const items = ["US", "Nigeria", "London"];
  const [isAlertOpen, setIsAlertOpen] = useState(false);
  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  const handleButtonClick = () => setIsAlertOpen(true);
  return (
    <div>
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      />
      {isAlertOpen && <Alert onCloseAlert={() => setIsAlertOpen(false)} />}
      <Button onButtonClick={handleButtonClick} color="success">
        My Button
      </Button>
      <Like onLikeButtonClicked={() => console.log("Like button clicked")} />
      <Game />
    </div>
  );
}

export default App;

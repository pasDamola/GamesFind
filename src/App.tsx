import Button from "./components/Button";
import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import { useState } from "react";
import Like from "./components/Like";
import Game from "./components/Game";
import ExpandableText from "./components/ExpandableText";

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
      <ExpandableText>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex dolor
        voluptate quas architecto reiciendis excepturi quaerat, voluptatem
        officia eos, aspernatur, labore temporibus. Velit veniam illo eum?
        Dolores eligendi mollitia ratione. Lorem ipsum dolor sit amet
        consectetur, adipisicing elit. Eaque praesentium magni odit! Amet
        dignissimos eligendi officiis unde inventore, possimus voluptatibus
        doloribus ab accusamus rem voluptatum veniam error soluta libero
        consequatur? Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        Quo quasi rerum deserunt repellat doloribus sint quae, earum consectetur
        quia, voluptatum distinctio. Recusandae reprehenderit reiciendis dolor
        ut minima quas ea repudiandae. Lorem ipsum dolor sit amet consectetur,
        adipisicing elit. Harum recusandae explicabo dolorem nemo aut nisi
        itaque commodi ipsa velit, maiores, est alias tempore ipsam eum nulla
        quia libero nostrum voluptatibus.
      </ExpandableText>
    </div>
  );
}

export default App;

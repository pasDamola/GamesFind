import Button from "./components/Button";
import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import { useState } from "react";
import Like from "./components/Like";
import Game from "./components/Game";
import ExpandableText from "./components/ExpandableText";
import Form from "./components/Form";

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
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, esse!
        Voluptate molestias similique placeat explicabo quos, molestiae, illum
        perferendis possimus esse, sed sint tenetur? Veritatis sunt
        necessitatibus saepe dolore, quasi eius quod. Numquam at, dolorem
        quaerat facilis, omnis fuga quam dignissimos inventore quas fugit
        quibusdam, delectus nam cupiditate impedit deserunt! Blanditiis alias
        tempore explicabo facilis hic ullam sed quibusdam culpa quos eos!
        Doloribus recusandae quaerat quam accusantium sapiente dolore culpa fuga
        debitis, repellat molestiae reiciendis voluptatem blanditiis veritatis
        non libero iste dolorum amet, explicabo vero? Quisquam eum quis fugit
        aspernatur magni architecto, adipisci saepe asperiores, neque esse
        dolore? Magni, quidem?
      </ExpandableText>
      <Form />
    </div>
  );
}

export default App;

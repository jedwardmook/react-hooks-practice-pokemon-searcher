import React, {useState} from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({pokemon}) {
  const [isClicked, setIsClicked] = useState(true)
  const {hp, name, sprites} = pokemon
  const {back, front} = sprites

  function handleClick(){
    setIsClicked(!isClicked)
  }
  return (
    <Card>
      <div>
        <div onClick={handleClick} className="image">
         {isClicked? (<img src={front} alt="oh no!" />) :
          (<img src={back} alt="oh no!" />) }
        </div>
        <div className="content">
          <div className="header">{name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {hp} hp
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;

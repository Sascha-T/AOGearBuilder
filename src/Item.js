import React, { useState, useEffect, useRef } from 'react';
import './styles.css';
import Itemstat from './Itemstat';
import { playCorrect } from './playAudioUtil';
import { playWrong } from './playAudioUtil';


function Item({ item, handleClose, setButtonImgSrc, category, setAccessory1, setAccessory2, setAccessory3, setChestplate1, setPants1, accessory1, accessory2, accessory3, chestplate1, pants1, setEnchant1, setEnchant2, setEnchant3, setEnchant4, setEnchant5, enchant1, enchant2, enchant3, enchant4, enchant5, setAcc1Gem1, setAcc1Gem2, setAcc2Gem1, setAcc2Gem2, setAcc3Gem1, setAcc3Gem2, setChest1Gem1, setChest1Gem2, setPants1Gem1, setPants1Gem2, acc1gem1, acc1gem2, acc2gem1, acc2gem2, acc3gem1, acc3gem2, chest1gem1, chest1gem2, pants1gem1, pants1gem2, acc1gem3, acc2gem3, acc3gem3, chest1gem3, pants1gem3, setAcc1Gem3, setAcc2Gem3, setAcc3Gem3, setChest1Gem3, setPants1Gem3, setModifier1, setModifier2, setModifier3, setModifier4, setModifier5, modifier1, modifier2, modifier3, modifier4, modifier5}) {

  
  const [isHovering, setIsHovering] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const itemStatRef = useRef(null)

  

    


  

  const handleMouseOver = (event) => {
    setIsHovering(true);
    setMousePosition({ x: event.clientX, y: event.clientY });
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  const handleImageChange = () => {

    setButtonImgSrc(item.imageId);
  }

  

  const handleMouseMove = (event) => {
    const boxWidth = 300; // Change this to the width of your box
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    const x = event.clientX;
    const y = event.clientY;

    if (x + boxWidth > windowWidth - 50) {
      setMousePosition({ x: x - boxWidth - 40 , y });
    } else{
      setMousePosition({ x, y });
    }

    if (y > windowHeight / 2) {
      setMousePosition({ x , y : y - 400 });
    } else{
      setMousePosition({ x, y });
    }

    
  };

  const handleStatChange = (category) => {

    switch (category) {
      case 'accessories1':
        setAccessory1(item);
        setAcc1Gem1({ name: "None", legend: "Nothing Lol", defense: 0, power: 0, agility: 0, attackSize: 0, attackSpeed: 0, intensity: 0, insanity: 0, drawback: 0, warding: 0, levelMultiplier: 0, imageId: "https://i.imgur.com/PzIWvMv.jpg" });
        setAcc1Gem2({ name: "None", legend: "Nothing Lol", defense: 0, power: 0, agility: 0, attackSize: 0, attackSpeed: 0, intensity: 0, insanity: 0, drawback: 0, warding: 0, levelMultiplier: 0, imageId: "https://i.imgur.com/PzIWvMv.jpg" });
        setAcc1Gem3({ name: "None", legend: "Nothing Lol", defense: 0, power: 0, agility: 0, attackSize: 0, attackSpeed: 0, intensity: 0, insanity: 0, drawback: 0, warding: 0, levelMultiplier: 0, imageId: "https://i.imgur.com/PzIWvMv.jpg" });
        break;
    
      case 'accessories2':
        setAccessory2(item);
        setAcc2Gem1({ name: "None", legend: "Nothing Lol", defense: 0, power: 0, agility: 0, attackSize: 0, attackSpeed: 0, intensity: 0, insanity: 0, drawback: 0, warding: 0, levelMultiplier: 0, imageId: "https://i.imgur.com/PzIWvMv.jpg" });
        setAcc2Gem2({ name: "None", legend: "Nothing Lol", defense: 0, power: 0, agility: 0, attackSize: 0, attackSpeed: 0, intensity: 0, insanity: 0, drawback: 0, warding: 0, levelMultiplier: 0, imageId: "https://i.imgur.com/PzIWvMv.jpg" });
        setAcc2Gem3({ name: "None", legend: "Nothing Lol", defense: 0, power: 0, agility: 0, attackSize: 0, attackSpeed: 0, intensity: 0, insanity: 0, drawback: 0, warding: 0, levelMultiplier: 0, imageId: "https://i.imgur.com/PzIWvMv.jpg" });
        break;
    
      case 'accessories3':
        setAccessory3(item);
        setAcc3Gem1({ name: "None", legend: "Nothing Lol", defense: 0, power: 0, agility: 0, attackSize: 0, attackSpeed: 0, intensity: 0, insanity: 0, drawback: 0, warding: 0, levelMultiplier: 0, imageId: "https://i.imgur.com/PzIWvMv.jpg" });
        setAcc3Gem2({ name: "None", legend: "Nothing Lol", defense: 0, power: 0, agility: 0, attackSize: 0, attackSpeed: 0, intensity: 0, insanity: 0, drawback: 0, warding: 0, levelMultiplier: 0, imageId: "https://i.imgur.com/PzIWvMv.jpg" });
        setAcc3Gem3({ name: "None", legend: "Nothing Lol", defense: 0, power: 0, agility: 0, attackSize: 0, attackSpeed: 0, intensity: 0, insanity: 0, drawback: 0, warding: 0, levelMultiplier: 0, imageId: "https://i.imgur.com/PzIWvMv.jpg" });
        break;
    
      case 'chestplates':
        setChestplate1(item);
        setChest1Gem1({ name: "None", legend: "Nothing Lol", defense: 0, power: 0, agility: 0, attackSize: 0, attackSpeed: 0, intensity: 0, insanity: 0, drawback: 0, warding: 0, levelMultiplier: 0, imageId: "https://i.imgur.com/PzIWvMv.jpg" });
        setChest1Gem2({ name: "None", legend: "Nothing Lol", defense: 0, power: 0, agility: 0, attackSize: 0, attackSpeed: 0, intensity: 0, insanity: 0, drawback: 0, warding: 0, levelMultiplier: 0, imageId: "https://i.imgur.com/PzIWvMv.jpg" });
        setChest1Gem3({ name: "None", legend: "Nothing Lol", defense: 0, power: 0, agility: 0, attackSize: 0, attackSpeed: 0, intensity: 0, insanity: 0, drawback: 0, warding: 0, levelMultiplier: 0, imageId: "https://i.imgur.com/PzIWvMv.jpg" });
        break;
    
      case 'pants':
        setPants1(item);
        setPants1Gem1({ name: "None", legend: "Nothing Lol", defense: 0, power: 0, agility: 0, attackSize: 0, attackSpeed: 0, intensity: 0, insanity: 0, drawback: 0, warding: 0, levelMultiplier: 0, imageId: "https://i.imgur.com/PzIWvMv.jpg" });
        setPants1Gem2({ name: "None", legend: "Nothing Lol", defense: 0, power: 0, agility: 0, attackSize: 0, attackSpeed: 0, intensity: 0, insanity: 0, drawback: 0, warding: 0, levelMultiplier: 0, imageId: "https://i.imgur.com/PzIWvMv.jpg" });
        setPants1Gem3({ name: "None", legend: "Nothing Lol", defense: 0, power: 0, agility: 0, attackSize: 0, attackSpeed: 0, intensity: 0, insanity: 0, drawback: 0, warding: 0, levelMultiplier: 0, imageId: "https://i.imgur.com/PzIWvMv.jpg" });
        break;
    
      case 'enchant1':
        setEnchant1(item);
        break;
    
      case 'enchant2':
        setEnchant2(item);
        break;
    
      case 'enchant3':
        setEnchant3(item);
        break;
    
      case 'enchant4':
        setEnchant4(item);
        break;
    
      case 'enchant5':
        setEnchant5(item);
        break;

      case 'modifier1':
        setModifier1(item);
        break;
    
      case 'modifier2':
        setModifier2(item);
        break;
    
      case 'modifier3':
        setModifier3(item);
        break;
    
      case 'modifier4':
        setModifier4(item);
        break;
    
      case 'modifier5':
        setModifier5(item);
        break;
    
      default:
        // Handle any other category here, if needed.
        break;
    }
  }

  return (
  

    <div
      className={`grid-item`}
      
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      onMouseMove={handleMouseMove}
      onClick={ () => {

        if ( 
          item.name != "None" && 
          ( item.name == accessory1.name 
            || item.name == accessory2.name 
            || item.name == accessory3.name 
            || item.name == chestplate1.name 
            || item.name == pants1.name 
            || (category == 'enchant1' && item.name == enchant1.name) 
            || (category == 'enchant2' && item.name == enchant2.name) 
            || (category == 'enchant3' && item.name == enchant3.name) 
            || (category == 'enchant4' && item.name == enchant4.name) 
            || (category == 'enchant5' && item.name == enchant5.name)
            // || (((item.accessoryType == "Amulet") && (accessory1.accessoryType == "Amulet")))
            // || (((item.accessoryType == "Amulet") && (accessory2.accessoryType == "Amulet")))
            // || (((item.accessoryType == "Amulet") && (accessory3.accessoryType == "Amulet"))) 
            || (((category == 'accessories1') && (item.accessoryType == "Amulet")) && ((accessory2.accessoryType == "Amulet") || (accessory3.accessoryType == "Amulet")))
            || (((category == 'accessories2') && (item.accessoryType == "Amulet")) && ((accessory1.accessoryType == "Amulet") || (accessory3.accessoryType == "Amulet")))
            || (((category == 'accessories3') && (item.accessoryType == "Amulet")) && ((accessory1.accessoryType == "Amulet") || (accessory2.accessoryType == "Amulet")))
            || (((category == 'accessories1') && (item.accessoryType == "Helmet")) && ((accessory2.accessoryType == "Helmet") || (accessory3.accessoryType == "Helmet")))
            || (((category == 'accessories2') && (item.accessoryType == "Helmet")) && ((accessory1.accessoryType == "Helmet") || (accessory3.accessoryType == "Helmet")))
            || (((category == 'accessories3') && (item.accessoryType == "Helmet")) && ((accessory1.accessoryType == "Helmet") || (accessory2.accessoryType == "Helmet")))
           ) ) {
          playWrong();
        } else {
          handleClose();
          handleImageChange();
          handleStatChange(category);
          
      
        }
        

      }}
      
    
      style={{ position: 'static', display: 'inline-block' }}
    >
      <img src={item.imageId} alt={item.name} />


      {isHovering && (
        <div
          style={{
            position: 'absolute',
            top: mousePosition.y ,
            left: mousePosition.x + 20,
            backgroundColor: 'black',
            width: '300px',
            padding: '10px',
            boxShadow: '0 0 5px rgba(0, 0, 0, 0.2)',
            border: '3px solid white',
            borderColor: item.rarityColor,
            
            

          }}

          ref={itemStatRef}
        > 
          <h2 class="merriweatherFont" style={{color:'white' }}>{item.name}</h2>
          <p class="legendstyle" style={{color :'white'}}>{item.legend}</p>
          <div  >
          <Itemstat item={item}/>
          </div>
        </div>
      )}
      
  
    </div>
  );
}

export default Item;

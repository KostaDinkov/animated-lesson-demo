import React, { Component } from 'react';
import * as Pixi from 'pixi.js';
import myImage from '../../static/assets/img/ship.png'

class Stage extends Component {

  pixiContainer = React.createRef();

  componentDidMount() {
    this.pixiApp = new Pixi.Application({
      width: this.pixiContainer.current.offsetWidth,
      height: this.pixiContainer.current.offsetHeight,
      antialias: true,
      transparent: true,
      resolution: 1
    })

    this.pixiContainer.current.appendChild(this.pixiApp.view);
    //The setup function is a custom function that we created to add the sprites. We will this below
    Pixi.loader
      .add("./assets/img/spaceCombat.json")
      .on('progress', this.loadProgressHandler)
      .load(this.setup);

  }
  loadProgressHandler(loader, resource) {
    console.log('loading ' + resource.name)
    console.log('progress ' + loader.progress + "%")

  }

  setup = () => {
    let stageHeight = this.pixiContainer.current.offsetHeight;
    let stageWidth = this.pixiContainer.current.offsetWidth;
    let id = Pixi.loader.resources['./assets/img/spaceCombat.json'].textures;

    // let left = keyboard(37),
    //   up = keyboard(38),
    //   right = keyboard(39),
    //   down = keyboard(40);

    //note: add ship
    let ship = new Pixi.Sprite(id['playerShip1_orange.png']);
    ship.y = (stageHeight - ship.height * 2);
    ship.x = stageWidth / 2 - ship.width / 2;
    ship.vx = 0;
    ship.vy = 0;
    this.pixiApp.stage.addChild(ship);

    //note: add meteor
    let meteor = new Pixi.Sprite(id['meteorBrown_big2.png']);
    meteor.position.set(randomInt(10, (stageWidth - 10)), randomInt(10, stageHeight / 2));
    this.pixiApp.stage.addChild(meteor);

    

    this.pixiApp.ticker.add(delta => gameLoop(delta))

    function gameLoop(delta) {
      ship.x += ship.vx;
      ship.y += ship.vy;
      if (hitTestRectangle(meteor, ship)) {
        console.log("Collision");
      }
    }

    function randomInt(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    // function keyboard(keyCode){
    //   let key={};
    //   key.code = keyCode;
    //   key.isDown = false;
    //   key.isUp = true;
    //   key.press = undefined;
    //   key.release = undefined;

    //   key.downHandler = event =>{
    //     if(event.keyCode === key.code){
    //       if(key.isUp && key.press) key.press();
    //       key.isDown = true;
    //       key.isUp = false;
    //     }
    //     event.preventDefault();
    //   }
    //   key.upHandler = event => {
    //     if (event.keyCode === key.code) {
    //       if (key.isDown && key.release) key.release();
    //       key.isDown = false;
    //       key.isUp = true;
    //     }
    //     event.preventDefault();
    //   };

    //   window.addEventListener(
    //     "keydown", key.downHandler.bind(key), false
    //   );
    //   window.addEventListener(
    //     "keyup", key.upHandler.bind(key), false
    //   );
    //   return key;
    // };

    function hitTestRectangle(r1, r2) {

      //Define the variables we'll need to calculate
      let hit, combinedHalfWidths, combinedHalfHeights, vx, vy;

      //hit will determine whether there's a collision
      hit = false;

      //Find the center points of each sprite
      r1.centerX = r1.x + r1.width / 2;
      r1.centerY = r1.y + r1.height / 2;
      r2.centerX = r2.x + r2.width / 2;
      r2.centerY = r2.y + r2.height / 2;

      //Find the half-widths and half-heights of each sprite
      r1.halfWidth = r1.width / 2;
      r1.halfHeight = r1.height / 2;
      r2.halfWidth = r2.width / 2;
      r2.halfHeight = r2.height / 2;

      //Calculate the distance vector between the sprites
      vx = r1.centerX - r2.centerX;
      vy = r1.centerY - r2.centerY;

      //Figure out the combined half-widths and half-heights
      combinedHalfWidths = r1.halfWidth + r2.halfWidth;
      combinedHalfHeights = r1.halfHeight + r2.halfHeight;

      //Check for a collision on the x axis
      if (Math.abs(vx) < combinedHalfWidths) {

        //A collision might be occuring. Check for a collision on the y axis
        if (Math.abs(vy) < combinedHalfHeights) {

          //There's definitely a collision happening
          hit = true;
        } else {

          //There's no collision on the y axis
          hit = false;
        }
      } else {

        //There's no collision on the x axis
        hit = false;
      }

      //`hit` will be either `true` or `false`
      return hit;
    };


  };





  render() {
    return (
      <div style={{ height: "100%" }} ref={this.pixiContainer} />
    );
  }
}

export default Stage;
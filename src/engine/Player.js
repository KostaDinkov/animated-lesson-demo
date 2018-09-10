export default class Player {
  constructor(gameInstance){
    this.unityGameInstance = gameInstance;
  }
  
  
  moveForward = () => {
    this.unityGameInstance.SendMessage("Player", "MoveForward");
  }

  rotateLeft = () => {
    this.unityGameInstance.SendMessage("Player", "RotateLeft");
  }

  rotateRight = () => {
    this.unityGameInstance.SendMessage("Player", "RotateRight");
  }
}
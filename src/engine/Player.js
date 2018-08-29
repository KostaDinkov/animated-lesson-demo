export default class Player {

  unityGameInstance = null;
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
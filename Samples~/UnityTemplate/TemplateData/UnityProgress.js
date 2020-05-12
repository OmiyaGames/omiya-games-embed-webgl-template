function UnityProgress(gameInstance, progress) {
  if (!gameInstance.Module)
    return;
  if (!gameInstance.logo) {
    gameInstance.logo = document.createElement("div");
    gameInstance.logo.className = "logo " + gameInstance.Module.splashScreenStyle;
    gameInstance.container.appendChild(gameInstance.logo);
  }
  if (!gameInstance.progress) {
    gameInstance.progress = document.createElement("div");
    gameInstance.progress.className = "progress " + gameInstance.Module.splashScreenStyle;
    gameInstance.progress.empty = document.createElement("div");
    gameInstance.progress.empty.className = "empty";
    gameInstance.progress.appendChild(gameInstance.progress.empty);
    gameInstance.progress.full = document.createElement("div");
    gameInstance.progress.full.className = "full";
    gameInstance.progress.progressText = document.createElement("div");
    gameInstance.progress.progressText.className = "text";
    gameInstance.progress.appendChild(gameInstance.progress.full);
    gameInstance.progress.appendChild(gameInstance.progress.progressText);
    gameInstance.container.appendChild(gameInstance.progress);
  }
  // Calculate the progress to display
  var displayProgress = (100 * (progress / 0.9));
  if(displayProgress > 100) {
    displayProgress = 100;
  }
  gameInstance.progress.full.style.width = displayProgress + "%";
  gameInstance.progress.empty.style.width = (100 - displayProgress) + "%";
  gameInstance.progress.progressText.innerHTML = Math.round(displayProgress) + "%";
  if (progress == 1)
    gameInstance.logo.style.display = gameInstance.progress.style.display = "none";
}
// Function to change the video source and play the video
function loadVideo(videoURL) {
  const videoPlayer = document.getElementById('videoPlayer');
  const videoSource = document.getElementById('videoSource');
  
  // Change the video source to the clicked video's URL
  videoSource.src = videoURL;
  
  // Reload the video to apply the new source and play
  videoPlayer.load();
  videoPlayer.play();
}

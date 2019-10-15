var videos = [
  {
    id: 1,
    src: "http://techslides.com/demos/sample-videos/small.webm",
    routes: {
      2: "Morango",
      3: "Pera",
      4: "Banana"
    }
  },
  {
    id: 2,
    src: "http://techslides.com/demos/sample-videos/small.webm",
    routes: {
      2: "Ganza",
      3: "Cocaina",
      4: "MDA"
    }
  }
];

function changeVideo(id) {
  var videoPlayer = document.getElementById("video");
  var videoSource = jQuery.grep(videos, function(v) {
    return v.id == id;
  });

  videoPlayer.setAttribute("src", videoSource);

  videoPlayer.load();
}

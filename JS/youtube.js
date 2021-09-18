// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
function onYouTubeIframeAPIReady() {
    //<div id = "player"></div 의 player가 아래에 들어감>
    //유튜브 영상의 id를 가져오는데 영상 링크 제일 오른쪽부분에서 =뒤의 값이 아이디
    new YT.Player('player', {
    videoId: 'fmwxfGCRuoI', //최초 재생할 유튜브 영상의 id
    playerVars: {
      autoplay : true, // 자동 재생 유무
      loop: true, // 반복 재생 유무
      playlist: 'fmwxfGCRuoI',//반복 재생할 유튜브 영상 id 목록
      origin: 'http://192.168.25.31:5501'
    },
    events: {
      onReady: function (event) {  
        event.target.mute();
      }
    }
  });
}
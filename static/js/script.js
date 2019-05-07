
$(function(){

  $('.menu-icon').click(open_menu);
  $('.wrapper *, .footer').click(close_menu);

  function open_menu(){
    $('.nav').css({
      transform:'translateY(0)',
      margin: '5px 0 0',
      padding: '5px 0 0'
    });
    $('.nav').css('border-top', '1px solid #333');
    $('.nav > *').css({opacity:'1'});
    $('.nav').animate({height:'60px'},800);
  };

  function close_menu(){
    $('.nav').css({
      transform:'translateY(-80px)',
      height:'0',
      margin: '0',
      padding: '0'
    });
    $('.nav').css('border', 'none');
    $('.nav > *').css({opacity:'0'});
  };


  var shareUrl = "https://www.gorilla-kufitness.info/";
  var description = "筋トレ・運動がしたいけどなかなかできない…。　私たちGORILLAは、そんな大学生活を送る京大生にうってつけ！　同じ境遇のトレーニング仲間がいる「コミュニティ」と「モチベーション」を提供する新しいサークルです。　まずはWEBページをチェック！";
  setSnsShare(shareUrl, description);

  function setSnsShare(shareUrl, description) {
    setTwitterLink(".twitter a", shareUrl, description);
    setFacebookLink(".facebook a", shareUrl, description);
    setLineLink(".line a", shareUrl, description);
    return false;
  }

  function setTwitterLink(shareSelector, shareUrl, description) {
    $(shareSelector).attr("href", "https://twitter.com/intent/tweet?url=" + shareUrl + "&text=" + description);
    return false;
  }
  function setFacebookLink(shareSelector, shareUrl, description) {
    $(shareSelector).attr("href", "https://www.facebook.com/sharer/sharer.php?u=" + shareUrl + "&t=" + description);
    return false;
  }
  function setLineLink(shareSelector, shareUrl, description) {
    $(shareSelector).attr("href", "http://line.me/R/msg/text/?" + description + " " + shareUrl);
    return false;
  }

});

$(function(){
  // #で始まるリンクをクリックしたら実行されます
  $('a[href^="#header-top"]').click(function() {
    // スクロールの速度
    var speed = 400; // ミリ秒で記述
    var href= $(this).attr("href");
    console.log(`href:${href}`)
    var target = $(href == "#" || href == "" ? 'html' : href);
    console.log(`target:${target}`)
    var position = target.offset().top;
    console.log(`position:${position}`)
    $('body,html').animate({scrollTop:position}, speed, 'swing');
    return false;
  });
});
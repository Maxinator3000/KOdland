window.addEventListener('load', function () {
    $('.field').css({
      width: window.innerWidth * 0.6,
      height: (this.window.innerHeight * 0.6) / 2,
    });
  });
  
  let size = (window.innerWidth * 0.6) / 6 - 2;
  let amount = 0;
  
  $('.amount').html(18 - amount);
  
  $('.thanos').on('click', function () {
    amount = amount + 1;
    $('.amount').html(18 - amount);
    if (amount < 18) {
      let cell = $('<div class="cell"></div>');
      cell.css({ width: size, height: size });
      $('.field').append(cell);
  
      anime({
        targets: '.thanos',
        left: function () {
          return anime.random(0, window.innerWidth - 150);
        },
        top: function () {
          return anime.random(0, window.innerHeight - 300);
        },
        duration: function () {
          return anime.random(1200, 1800);
        },
        delay: 200,
        direction: 'alternate',
        loop: false,
      });
    } else {
      let cell = $('<div class="cell"></div>');
      cell.css({ width: size, height: size });
      $('.field').append(cell);
      $('.text').html('Вы спасли Мир!');
      anime({
        targets: 'img',
        opacity: 0,
        width: 0,
        height: 0,
        rotate: 360,
        delay: 500,
        duration: 15000,
      });
    }
  });
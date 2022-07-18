

  new Glider(document.querySelector('.gliderDos'), {
    // Mobile-first defaults
    slidesToShow: 1,
    slidesToScroll: 1,
    scrollLock: true,
    dots: '#resp-dots',
    arrows: {
      prev: '.glider-prev',
      next: '.glider-next'
    },
    responsive: [
      {
        // screens greater than >= 775px
        breakpoint: 775,
        settings: {
          // Set to `auto` and provide item width to adjust to viewport
          slidesToShow: 'auto',
          slidesToScroll: 'auto',
          itemWidth: 380,
          duration: 0.25
        }
      },{
        // screens greater than >= 1024px
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          itemWidth: 150,
          duration: 0.25
        }
      }
    ]
  });
  // new Glider(document.querySelector('.gliderTres'), {
  //   slidesToShow: 1,
  //   dots: '#dots',
  //   draggable: true,
  //   arrows: {
  //     prev: '.glider-prev',
  //     next: '.glider-next'
  //   }
  // });

  new Glider(document.querySelector('.gliderFotos'), {
    slidesToShow: 3,
    dots: '#dots',
    draggable: true,
    arrows: {
      prev: '.glider-prev',
      next: '.glider-next'
    }
  });

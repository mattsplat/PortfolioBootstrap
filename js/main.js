var $container = $('.portfolio-items').isotope('layout');

document.getElementById("number").innerHTML = "913.963.9294".link("tel:9139639294");
document.getElementById("email").innerHTML = 'matthewjohncoleman@gmail.com'.link('mailto:matthewjohncoleman@gmail.com');
document.getElementById("github").innerHTML = "GitHub".link("https://github.com/mattsplat");

$('.portfolio-filter').on( 'click', 'a', function(e) {
  e.preventDefault();
  $('.portfolio-filter li').removeClass('active');
  $(this).closest('li').addClass('active');
  var filterValue = $(this).attr('data-filter');
  $container.isotope({ filter: filterValue });
});

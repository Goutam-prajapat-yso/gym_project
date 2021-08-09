$(function() {
  $('.schedule-filter li').on('click', function() {
    var tsfilter = $(this).data('tsfilter');

    $('.schedule-filter li').removeClass('active');
    $(this).addClass('active');
    if (tsfilter == 'all') {
      $('.schedule-table').removeClass('filtering');
      $('.ts-item').removeClass('show');
    } else {
      $('.schedule-table').addClass('filtering');
    }
    $('.ts-item').each(function() {
      $(this).removeClass('show');
      if ($(this).data('tsmeta') == tsfilter) {
        $(this).addClass('show');
      }
    });
  });
});(window.jQuery);
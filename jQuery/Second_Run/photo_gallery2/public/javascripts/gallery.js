// ajax, handlebars, events, collections

// retrieving and sending information using ajax requests, and
// then rendering the data that's come back using the supplied
// handlebars template.

$(function() {
  var templates = {},
      photos; // cache json response

  $("script[type='text/x-handlebars']").each(function() {
    var $tmpl = $(this);
    templates[$tmpl.attr('id')] = Handlebars.compile($tmpl.html());
  });

  $('[data-type=partial').each(function() {
    var $partial = $(this);
    Handlebars.registerPartial($partial.attr('id'), $partial.html());
  });

  var slideshow = {
    $el: $('#slideshow'), // parent element to search from
    duration: 500,
    prevSlide: function(e) {
      e.preventDefault();
      var $current = this.$el.find('figure:visible'),
          $prev = $current.prev('figure');

      if (!$prev.length) {
        $prev = this.$el.find('figure').last();
      }
      $current.fadeOut(this.duration);
      $prev.fadeIn(this.duration);
      this.renderPhotoContent($prev.attr('data-id'));
    },
    nextSlide: function(e) {
      e.preventDefault();
      var $current = this.$el.find('figure:visible'),
          $next = $current.next('figure');

      if (!$next.length) {
        $next = this.$el.find('figure').first();
      }
      $current.fadeOut(this.duration);
      $next.fadeIn(this.duration);
      this.renderPhotoContent($next.attr('data-id'));
    },
    renderPhotoContent: function(id) {
      $('[name=photo_id]').val(id);
      renderPhotoInformation(+id);
      getCommentsFor(id);
    },
    bind: function() {
      this.$el.find('a.prev').on('click', $.proxy(this.prevSlide, this));
      this.$el.find('a.next').on('click', $.proxy(this.nextSlide, this));
    },
    init: function() {
      this.bind();
    },
  };

  // ajax request
  $.ajax({
    url: '/photos',
    // a function to be called if request succeeds
    success: function(json) {
      // display initial page
      photos = json;
      renderPhotos();
      renderPhotoInformation(photos[0].id);
      // initialized, once the photos and photo information are rendered
      slideshow.init();
      getCommentsFor(photos[0].id);
    },
  });

  // click on like button, send an ajax post request with photo_id as data
  // receive a response, use the response to update the page.
  $('section > header').on('click', '.actions a', function(e) {
    e.preventDefault();
    var $e = $(e.target);
    var photo_index = slideshow.$el.find('figure:visible').index();
    var current_photo = photos[photo_index];

    $.ajax({
      url: $e.attr('href'),
      type: 'post',
      data: 'photo_id=' + $e.attr('data-id'),
      success: function(json) {
        $e.text(function(i, txt) {
          return txt.replace(/\d+/, json.total);
        });
        // updating the photos cache
        current_photo[$e.attr('data-property')] = json.total;
      }
    });
  });

  $('form').on('submit', function(e) {
    e.preventDefault();
    // find the current form object, we will use its attributes
    // to build the ajax call
    var $f = $(this);

    $.ajax({
      url: $f.attr('action'),
      type: $f.attr('method'),
      data: $f.serialize(),
      success: function(json) {
        $('#comments ul').append(templates.comment(json));
      }
    });
  });

  function renderPhotos() {
    $('#slides').html(templates.photos({ photos: photos }));
  }

  function renderPhotoInformation(id) {
    var photo = photos.filter(function(item) {
      return item.id === id;
    })[0];

    $('section > header').html(templates.photo_information(photo));
  }

  function getCommentsFor(idx) {
    $.ajax({
      url: '/comments',
      // we need to pass data to the server to let it know which photo we are
      // requesting comments for
      data: 'photo_id=' + idx,
      success: function(comment_json) {
        $('#comments ul').html(templates.comments({ comments: comment_json }));
      }
    });
  }

  function formSubmit() {
    event.preventDefault();
    // serialize and send the data to the server
    var serialized_data = $(this).serialize();
    $.ajax({
      method: 'POST',
      url: $(this).attr('action'),
      data: serialized_data,
      success: function(response) {
        $('#comments ul').append(templates.comments({ comments: [response] }));
      }
    });
  }
});

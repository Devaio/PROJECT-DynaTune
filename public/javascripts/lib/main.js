// Generated by CoffeeScript 1.6.3
(function() {
  $(function() {
    var $relArtistsList, relArtTemplate;
    $relArtistsList = $('#relatedArtistListCont');
    relArtTemplate = Handlebars.compile($('#relArt-template').html());
    return $(document).on('submit', '.artistSearchForm', function(e) {
      $('.artistSearchForm').val('');
      e.preventDefault();
      return $.post('/related', $(this).serialize(), function(data) {
        console.log(data);
        return $relArtistsList.html(relArtTemplate({
          artist: data.artist,
          relArt: data.relatedArtists
        }));
      });
    });
  });

}).call(this);
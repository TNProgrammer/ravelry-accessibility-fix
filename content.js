function fixImageAltTags() {
  var images = document.getElementsByTagName("img");
  _.forEach(images, (img) => {
    if (!img.alt) {
      var alt = _.first(
        _.first(_.last(img.src.split("/")).split("?")).split(".")
      );
      img.alt = alt;
    }
  });
}
setTimeout(fixImageAltTags, 3000);

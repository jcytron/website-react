$("h1").blast({
  delimiter: "character",
  tag: "span",
});

a = 0;
$("h1 .blast").each(function () {
  if (a == 300) {
    a = 400;
  }

  if (a == 1200) {
    a = 1400;
  }

  var el = $(this);

  setTimeout(function () {
    el.addClass("animated bounceIn");
  }, a);

  if (a < 1200) {
    a = a + 100;
  } else {
    a = a + 70;
  }
});

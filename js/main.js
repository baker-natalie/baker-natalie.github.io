$("#main").prepend("<div class='jumbotron'></div>");
for (var i = 1; i < data.length; i++) {
  var htmlDiv = "<section class='col-xs-12' id='" + data[i].id + "'><h1>" + data[i].header + "</section>"
  $("#bootstrap-container").append(htmlDiv)
}
data.display = function() {
  this.home = function() {
    var homeHeader = "<div class='container'><h1 class='text-center'>" + this[0].header + "</h1><hr /><h2 class='text-center'>" + this[0].subHeader + "</h2></div>"
    $(".jumbotron").append(homeHeader)
  }
  this.about = function() {
    var aboutImg = "<img class='col-xs-12 col-md-7 img-fluid' src='./img/" + this[1].img + "' />"
    $("#about").append(aboutImg)
    var aboutParagraph = "<p class='aboutPara col-xs-12 col-md-5'>" + this[1].bio + "</p>"
    $("#about").append(aboutParagraph)
  }
  this.work = function() {
    $("#work").append("<div id='workCarousel' class='carousel slide'><ol class='carousel-indicators'></ol><div class='carousel-inner' role='listbox'></div>")
    for (var i = 0; i < this[2].projects.length; i++) {
      var li = "<li data-taget='#workCarousel' data-slide-to='" + i + "' id='" +this[2].projects[i].id + "' class='carouselLi'><img src='" + this[2].projects[i].thumbnail + "' /></li>"
      var project = "<div class='col-xs-12 " + this[2].projects[i].id + " project carousel-item item'></div>"
      var desc = "<div class='project-desc col-xs-12 col-md-4 d-none d-md-block'><h3>" + this[2].projects[i].title + "</h3><p>" + this[2].projects[i].desc + "</p></div>"
      var img = "<div class='col-xs-12 col-md-8 d-block text-center'><img class='img-fluid' src='./img/" + this[2].projects[i].img + "' /></div>"
      if (this[2].projects[i].demoUrl != "") {
        var demo = "<a target='_blank' class='demo link' href='" + this[2].projects[i].demoUrl + "'>demo</a>"
      } else {
        var demo = ""
      }
      if (this[2].projects[i].repoUrl != "") {
        var repo = "<a target='_blank' class='repo link' href='" + this[2].projects[i].repoUrl + "'>repo</a>"
      } else {
        var repo = ""
      }
      $(".carousel-indicators").append(li)
      $(".carousel-inner").append(project)
      $(".project:last").append(desc)
      $(".project:last").append(img)
      $(".project-desc:last").append("<div class='links'>" + demo + " " + repo + " </div>")
    }
    var prev = "<a class='carousel-control-prev' href='#workCarousel' role='button' data-slide='prev'><span class='carousel-control-prev-icon aria-hidden='true'></span><span class='sr-only'>Previous</span>"
    var next = "<a class='carousel-control-next' href='#workCarousel' role='button' data-slide='prev'><span class='carousel-control-next-icon aria-hidden='true'></span><span class='sr-only'>Next</span>"
    $("#workCarousel").append(prev)
    $("#workCarousel").append(next)
    $(".lugus").addClass("active")
    $("#lugus").addClass("active")
  }
  this.contact = function() {
    $("#contact").append("<div class='col-xs-1 col-md-2'></div><div class='social col-xs-10 col-md-8 offset-md-3'></div><div class='col-xs-1 col-md-2'></div>")
    $(".social").append("<h3 class='col-xs-12 text-center'>Let's Connect!</h3>")
    for (var i = 0; i < this[3].social.length; i++) {
      var social = "<a class='col-xs-3 text-center' target='_blank' href='" + this[3].social[i].url + "' id='" + this[3].social[i].id + "'><i class='icons fa " + this[3].social[i].icon + "' aria-hidden='true'></i></a>"
      $(".social").append(social)
    }
  }
  this.home()
  this.about()
  this.work()
  this.contact()
}
data.display();
$(".carousel").carousel({
  interval: 6000
})

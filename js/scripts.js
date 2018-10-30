


// Business Logic for Movie Tickets ---------
function Ticket(movie, time, age) {
  this.movie = movie,
  this.time = time,
  this.age = age
}

Ticket.prototype.ticketPrice = function(time, age) {
  var price = 15.00
  if (age !== "adult") {
    if (time === "morning") {
      price = price-7.00;
    } else if (time === "matinee") {
      price = price-5;
    } else {
      price = price -3;
    }
  } else if (age === "adult") {
    if (time === "morning") {
      price = price-5.00;
    } else if (time === "matinee") {
      price = price-3;
    } else {
      price = price;
    }
  }
return "$" + price;
}




$(document).ready(function() {
  $("form#tickets").submit(function(event) {
    event.preventDefault();
    var inputtedMovie = $("input:radio[name=movies]:checked").val();
    var inputtedTime = $("#time").val();
    var inputtedAge = $("#age").val();
    var newTicket = new Ticket(inputtedMovie, inputtedTime, inputtedAge);
    $(".showDetails").show();
    $(".movieOutput").html(inputtedMovie);
    $(".timeOutput").html(newTicket.time);

    var finalPrice = newTicket.ticketPrice(inputtedTime,inputtedAge);
    $(".priceOutput").html(finalPrice);
  })
})

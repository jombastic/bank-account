//business logic
function BankAccount(name, deposit) {
  this.name = name;
  this.deposit = deposit;
};

//user interface logic
$(function() {
  $("#user-registration").submit(function(event) {
    event.preventDefault();

    var inputedName = $("#user-name").val();
    var initialDeposit = $("#initial-deposit").val();
    var newAccount = new BankAccount(inputedName, initialDeposit);

    $("ul#users").append("<li class='user'>" + newAccount.name + "</li>");

    $(".user").last().click(function() {
      $("#ballance-information").show();
      $(".registered-user").text(newAccount.name);
      $(".current-ballance").text("$ " + newAccount.deposit);
    });
  });
});

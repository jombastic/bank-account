//business logic
function BankAccount(name, deposit, depositIncrease, withdrawal) {
  this.name = name;
  this.deposit = deposit;
  this.depositIncrease = depositIncrease;
  this.withdrawal = withdrawal;
};

BankAccount.prototype.currentBalance = function() {
  return this.deposit + this.depositIncrease - this.withdrawal;
};

//user interface logic
$(function() {
  $("#user-registration").submit(function(event) {
    event.preventDefault();

    var inputedName = $("input#user-name").val();
    var initialDeposit = parseFloat($("input#initial-deposit").val());
    var increase = 0.0;
    var withdraw = 0.0;
    var newAccount = new BankAccount(inputedName, initialDeposit, increase, withdraw);

    $("ul#users").append("<li class='user'>" + newAccount.name + "</li>");

    $(".user").last().click(function() {
      $("#ballance-information").show();
      $(".registered-user").text(newAccount.name);
      $(".current-balance").text("$ " + newAccount.deposit);
      $("form#add-or-withdraw fieldset").prop("disabled", false);

      $("form#add-or-withdraw").submit(function(event) {
        event.preventDefault();

        newAccount.depositIncrease = parseFloat($("input#increase-deposit").val());
        newAccount.withdrawal = parseFloat($("input#withdraw").val());
        var newBallance = newAccount.currentBalance();
        $(".current-balance").text("$ " + newBallance);
      });
    });
  });
});

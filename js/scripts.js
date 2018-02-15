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

var accounts = [];

//user interface logic
$(function() {
  $("#user-registration").submit(function(event) {
    event.preventDefault();

    var inputedName = $("input#user-name").val();
    var initialDeposit = parseFloat($("input#initial-deposit").val());
    var increase = 0.0;
    var withdraw = 0.0;
    var newAccount = new BankAccount(inputedName, initialDeposit, increase, withdraw);
    accounts.push(newAccount);

    var id = accounts.length - 1;
    $("ul#users").append("<li class='user' id=" + id + ">" + newAccount.name + "</li>");

    $(".user").last().click(function() {
      var arrayIndex = $(this).attr("id");

      $("#ballance-information").show();
      $(".registered-user").text(accounts[arrayIndex].name);
      $(".current-balance").text("$ " + accounts[arrayIndex].deposit);
      $("form#add-or-withdraw fieldset").prop("disabled", false);

      $("form#add-or-withdraw").submit(function(event) {
        event.preventDefault();

        console.log(arrayIndex);

        accounts[arrayIndex].depositIncrease = parseFloat($("input#increase-deposit").val());
        accounts[arrayIndex].withdrawal = parseFloat($("input#withdraw").val());
        accounts[arrayIndex].deposit = accounts[arrayIndex].currentBalance();
        $(".current-balance").text("$ " + accounts[arrayIndex].deposit);
      });
    });
  });
});

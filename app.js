// login button event
const loginBtn = document.getElementById("login");
loginBtn.addEventListener('click', function () {
    const loginArea = document.getElementById("login-area");
    loginArea.style.display = 'none';
    const trans_area = document.getElementById("transaction_area");
    trans_area.style.display = 'block';
});

//deposit button event

const depositBtn = document.getElementById("deposit-btn");
depositBtn.addEventListener('click', function () {
    const depositMoney = getInputNumber('deposit-amount');
    const depositNumber = parseFloat(depositMoney);

    updateSpanText('current-deposit', depositNumber);
    updateSpanText('current-balance', depositNumber);

    document.getElementById("deposit-amount").value = '';
});
 //withdraw button event 
 const withdrawBtn = document.getElementById("withdraw-btn");
 withdrawBtn.addEventListener('click',function(){
     const withDrawNumber = getInputNumber("withdraw-amount");
     console.log(withDrawNumber);
 });

 function getInputNumber(id){
    const withdrawAmount = document.getElementById(id).value;
    const withDrwaNumber = parseFloat(withdrawAmount);
    return withDrwaNumber;
 }


function updateSpanText(id, depositNumber) {
    const current = document.getElementById(id).innerText;
    const currentNumber = parseFloat(current);
    const totalBalance = depositNumber + currentNumber;
    document.getElementById(id).innerText = totalBalance;
}
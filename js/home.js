document.getElementById('btn-add-money').addEventListener('click', function(event){
    event.preventDefault();
  console.log('money add button clicked')

  const addMoneyInput = document.getElementById('input-add-money').value;
  console.log(addMoneyInput);

  const pinNumberInput = document.getElementById('input-pin-number').value;
  console.log(pinNumberInput);
})
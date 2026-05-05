const form = document.getElementById('tax-form');

form.addEventListener('submit', function (event) {
  event.preventDefault();

  const income = parseFloat(document.getElementById('income').value)

  if (isNaN(income) || income < 0) {
    document.getElementById('result').innerHTML = 'Invalid income';
    return;
  }

  let baseTax = 0;
  if (income <= 250000)
    baseTax = 0;
  else if (income <= 500000) {
    baseTax = (income - 250000) * 0.05;
  }
  else if (income <= 1000000) {
    baseTax = (income - 500000) * 0.20 + 12500;
  }
  else
    baseTax = (income - 1000000) * 0.30 + 112500;

  if (income <= 500000) {
    baseTax = 0;
  }

  let cess = baseTax * 0.04;
  let totalTax = baseTax + cess;

  let rincome = income - totalTax;

  document.getElementById('result').innerHTML = `
   <p>Base Tax: ₹${baseTax.toFixed(2)}</p>
    <p>Cess (4%): ₹${cess.toFixed(2)}</p>
    <p>Your income After tax paid : ₹${rincome.toFixed(2)}</p>
    <p><strong>Total Tax: ₹${totalTax.toFixed(2)}</strong></p> `;
});
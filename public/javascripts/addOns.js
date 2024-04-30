function generateAddOns() {
    const bornYearInput = document.getElementById('bornYearInput');
    const bornYear = bornYearInput.value;
    const addOnsContainer = document.getElementById('addOnsContainer');
    addOnsContainer.innerHTML = '';
  
    if (bornYear) {
      const sum = calculateBornYearSum(bornYear);
      const maleButton = document.createElement('button');
      maleButton.textContent = 'Male';
      maleButton.onclick = () => handleGender('male', sum);
  
      const femaleButton = document.createElement('button');
      femaleButton.textContent = 'Female';
      femaleButton.onclick = () => handleGender('female', sum);
  
      const resultSpan = document.createElement('span');
      resultSpan.style.marginLeft = '10px';
  
      bornYearInput.parentNode.insertBefore(resultSpan, bornYearInput.nextSibling);
      resultSpan.appendChild(maleButton);
      resultSpan.appendChild(femaleButton);
    } else {
      addOnsContainer.textContent = 'Please enter a valid born year.';
    }
  }
  
  function calculateBornYearSum(bornYear) {
    return bornYear.toString().split('').reduce((acc, cur) => acc + parseInt(cur), 0);
  }
  
  function handleGender(gender, sum) {
    const resultSpan = bornYearInput.parentNode.querySelector('span');
    resultSpan.innerHTML = ''; // Clear the container
  
    const message = document.createElement('span');
    const elements = ['九紫火', '一白水', '二黑土', '三碧木', '四綠木', '五黃土', '六白金', '七赤金', '八白土'];
  
    if (gender === 'male') {
      const calculation = (38 - sum) / 9;
      const remainder = Math.floor(calculation % 1 * 10);
      message.textContent = elements[remainder] || remainder;
    } else {
      const calculation = (sum + 4) / 9;
      const remainder = Math.floor(calculation % 1 * 10);
      message.textContent = elements[remainder] || remainder;
    }
  
    resultSpan.appendChild(message);
  }
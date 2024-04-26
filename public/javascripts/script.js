function generateTable() {
  const inputPhoneNumber = document.getElementById("phoneNumberInput").value;
  const tableContainer = document.getElementById("tableContainer");

  // Remove special characters and limit to last 12 digits
  let phoneNumber = inputPhoneNumber.replace(/[^0-9]/g, '').slice(-12);

  // Clear previous table if exists
  tableContainer.innerHTML = "";

  // Create a line break element
  const lineBreak = document.createElement("br");

  // Create table element
  const table = document.createElement("table");
  
  // Append line break before the table
    tableContainer.appendChild(lineBreak);
  
    // Create table header row
  const headerRow = document.createElement("tr");
  const headerColumns = ["父母宮", "福德宮", "田宅宮", "事業宮", "奴僕宮", "遷移宮", "疾厄宮", "財帛宮", "子女宮", "夫妻宮", "兄弟宮", "命宮"];
  for (let i = 0; i < phoneNumber.length; i++) {
    const th = document.createElement("th");
    th.textContent = headerColumns[i + headerColumns.length - phoneNumber.length] || '';
    headerRow.appendChild(th);
  }
  table.appendChild(headerRow);

  // Create table data row
  const dataRow = document.createElement("tr");
  for (let i = 0; i < phoneNumber.length; i++) {
    const td = document.createElement("td");
    td.textContent = phoneNumber[i];
    dataRow.appendChild(td);
  }
  table.appendChild(dataRow);

  // Create a new row for the elements
  const elementRow = document.createElement("tr");
  for (let i = 0; i < phoneNumber.length; i++) {
    const td = document.createElement("td");
    const element = getElementFromNumber(phoneNumber[i]);
    td.textContent = element;
    elementRow.appendChild(td);
  }
  table.appendChild(elementRow);

  // Append table to the container
  tableContainer.appendChild(table);

  // Create a paragraph element for the wealth digit meaning
  const wealthDigitMeaning = document.createElement('p');
  const wealthDigit = phoneNumber.slice(-5, -4);
  wealthDigitMeaning.textContent = `財帛宮 ${wealthDigit}：${wealthDigitMeanings[wealthDigit]}`;
  tableContainer.appendChild(wealthDigitMeaning);

  // Create a paragraph element for the couple digit meaning
  const coupleDigitMeaning = document.createElement('p');
  const coupleDigit = phoneNumber.slice(-3, -2);
  coupleDigitMeaning.textContent = `夫妻宮 ${coupleDigit}：${coupleDigitMeanings[coupleDigit]}`;
  tableContainer.appendChild(coupleDigitMeaning);

  // Check for special combinations
  for (const combo of specialCombinations) {
    if (phoneNumber.includes(combo.combination)) {
      const remark = document.createElement('p');
      remark.textContent = `${combo.combination} ： ${combo.interpretation}`;
      tableContainer.appendChild(remark);
    }
  }

  // Create a container element for the image and message
  const imageContainer = document.createElement('div');
  imageContainer.style.display = 'flex'; // Use flexbox to align image and message
  imageContainer.style.alignItems = 'center'; // Vertically center the items

  // Create an image element
  const imageElement = document.createElement('img');
  imageElement.src = '/images/five_elements.jpg'; 
  imageElement.alt = 'five_elements'; 
  imageElement.style.marginRight = '10px';

  // Create a message element
  const messageElement = document.createElement('div');
  messageElement.innerHTML = `    
    <p>1：坎卦，陽水，中男，聰明才智(水)、名聲、人緣、想陷害他人(坎)、身體:耳、腎、膀胱、性器官</p>
    <p>2：坤卦，陰土，老婦，</p>
    <p>3：震卦，陽木，長男，口舌是非(3)、</p>
    <p>4：巽卦，陰木，長女，文人書生(木)、無框架(風)、好美、外貌主義、漠視錢財</p>
    <p>5：中宮無卦，土，皇帝，</p>
    <p>6：乾卦，陽金，老父，上司、壓力、權力</p>
    <p>7：兌卦，陰金，少女，聲音</p>
    <p>8：艮卦，陽土，少男，正財、財富、止</p>
    <p>9：離卦，陰火，中女，文化、喜慶</p>
    <p>0：中宮無卦，土，</p>
    
  `;

  // Append the image and message elements to the container
  imageContainer.appendChild(imageElement);
  imageContainer.appendChild(messageElement);

  // Append the image container to the table container
  tableContainer.appendChild(imageContainer);
}

// Function to get the corresponding element based on the number
function getElementFromNumber(number) {
  const elements = ["土", "水", "土", "木", "木", "土", "金", "金", "土", "火"];
  return elements[number] || "";
}

// Add event listener to the input field
const inputField = document.getElementById("phoneNumberInput");
inputField.addEventListener("keydown", function(event) {
  // Check if the pressed key is the Enter key (key code 13)
  if (event.keyCode === 13) {
    generateTable(); // Call the generateTable function
  }
});
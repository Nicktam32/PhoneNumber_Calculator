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
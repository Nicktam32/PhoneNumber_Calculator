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
    <p>6：乾卦，對應大腸、腦、脊椎、督脈、胸部、左下腹、左下肢、男性生殖器。</p>
    <p>2：坤卦，對應脾胃、任脈、腹部、左肩、肌肉、消化系統。</p>
    <p>3：震卦，對應肝臟、雙足、神經、筋脈、筋膜、右腰、右脅肋、右肩臂等。</p>
    <p>4：巽卦，對應膽腑、肱股、右肩、神經、食道、腸道、淋巴系統、呼吸器官。</p>
    <p>1：坎卦，對應腎、膀胱、任脈、耳、腰、骨、髓、腦、發、性器官、血液迴圈、泌尿生殖、免疫系統。</p>
    <p>9：離卦，對應心臟、心包、血脈、小腸、眼目、頭臉部、頸部、胸部、上腹部。</p>
    <p>8：艮卦，對應脾胃、鼻、手、右下肢、腳背、足趾、背脊、皮、乳房等凸起之處。</p>
    <p>7：兌卦，對應肺臟、氣管、食道、口舌、咽喉、牙齒、左腰、左肋、肛門、皮毛。</p>
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
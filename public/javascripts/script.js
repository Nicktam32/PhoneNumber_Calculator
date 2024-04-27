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

  // Check for special combinations
  for (let i = 0; i < phoneNumber.length - 1; i++) {
    const combo = phoneNumber.slice(i, i + 2);
    const comboObject = specialCombinations.find(obj => obj.combination === combo);
    if (comboObject) {
      const remark = document.createElement('p');
      remark.textContent = `${comboObject.combination} ： ${comboObject.interpretation}`;
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

  // Create a container element for the messages
  const messageContainer = document.createElement('div');

  // Object mapping digits to their respective messages
  const numberMessages = {
    "1": " 1：坎卦，陽水，中男，聰明才智(水)、名聲、人緣、想陷害他人(坎)、身體：耳、腎、膀胱、性器官、血",
    "2": " 2：坤卦，陰土，老婦，㒼塞固執、有耐性、包容(坤主收藏)、慢性病(翻土帶病菌)、身體：婦科病、消化系統、閉塞",
    "3": " 3：震卦，陽木，長男，口舌是非(3)、急進易燥(震)、聲音響面大(雷)、好爭鬥、拿住口面(木)、身體：筋骨、腰、手腳、車禍(指南車剋三碧蚩尤)、肝病",
    "4": " 4：巽卦，陰木，長女，文人書生(木)、理論型(木)、無框架多變感覺流(風)、好美、外貌主義、重名、漠視錢財、身體：呼吸系統、鼻敏感、哮喘",
    "5": " 5：中宮無卦，土，皇帝，掌管威祟、災禍、做事不思後果、喜做調停者所有事都要經他手、身體：毒素",
    "6": " 6：乾卦，陽金，老父，驛馬變動、做首領(乾)、一切都要被掌握(乾)、階級觀念重(乾)、不懼困難(金)、身體：頭、肺、呼吸系統",
    "7": " 7：兌卦，陰金，少女，口舌挑撥是非(7)、盜賊破壞、兩舌不停、攬炒心態、身體：口腔",
    "8": " 8：艮卦，陽土，少男，正財、財富、緩止(止)、身體：背",
    "9": " 9：離卦，陰火，中女，開心樂觀(火)、追求虛幻(離中虛)、喜做指導者(明燈)、疑心重(燭火)",
    "0": " 0：中宮無卦，土，外太空、離地思考、黑洞(吸引能量)、發白日夢"
  };

  // Use a Set to keep track of unique digits
  const uniqueDigits = new Set(phoneNumber);

  // Loop through each unique digit in the phone number
  uniqueDigits.forEach(digit => {
    if (numberMessages[digit]) {
      const messageElement = document.createElement('p');
      messageElement.textContent = numberMessages[digit];
      messageContainer.appendChild(messageElement);
    }
  });

  // Append the image and message elements to the container
  imageContainer.appendChild(imageElement);
  imageContainer.appendChild(messageContainer);

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
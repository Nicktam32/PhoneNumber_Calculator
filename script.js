// 提交表單時的處理函數
function handleSubmit() {
  // 獲取輸入框中的值
  const phoneNumber = document.getElementById('phoneNumber').value;

  // 驗證電話號碼格式（可選）
  if (!isValidPhoneNumber(phoneNumber)) { // 檢查是否為有效電話號碼
    alert('請輸入有效的電話號碼。'); // 提示訊息
    return;
  }

  // 定義五行元素及其生剋關係
  const elements = ['<span style="color:brown;">土</span>', '<span style="color:blue;">水</span>', 
                    '<span style="color:brown;">土</span>', '<span style="color:green;">木</span>',
                     '<span style="color:green;">木</span>', '<span style="color:brown;">土</span>',
                      '<span style="color:gold;">金</span>', '<span style="color:gold;">金</span>',
                       '<span style="color:brown;">土</span>', '<span style="color:red;">火</span>']; // 定義五行元素
  const position = ['','','健康', '財帛', '子女', '姻緣', '外緣', '命宮']; // 定義宮位
  const interactions = { // 定義生剋關係
    '木火': '-生>',
    '火土': '-生>',
    '土金': '-生>',
    '金水': '-生>',
    '水木': '-生>',
    '火木': '<生-',
    '土火': '<生-',
    '金土': '<生-',
    '水金': '<生-',
    '木水': '<生-',
    '木土': '-剋>',
    '土水': '-剋>',
    '水火': '-剋>',
    '火金': '-剋>',
    '金木': '-剋>',
    '土木': '<剋-',
    '水土': '<剋-',
    '火水': '<剋-',
    '金火': '<剋-',
    '木金': '<剋-',
    '木木': '=同=',
    '火火': '=同=',
    '土土': '=同=',
    '水水': '=同=',
    '金金': '=同='
  };

  // 取得最後8個數字
  const lastEightDigits = phoneNumber.slice(-8);

  // 計算生剋關係
  let numbersText = '<tr>';
  let elementsText = '<tr>';
  let interactionsText = '<tr><td></td>';

  for (let i = 0; i < lastEightDigits.length; i++) {
    numbersText += `<td>${parseInt(lastEightDigits[i])}</td>`;

    const Digit_element = elements[parseInt(lastEightDigits[i])];
    elementsText += `<td>${Digit_element}</td>`;
    
    // 檢查是否為最後一個索引，不是的話加上空白的 <td></td>
    if (i !== lastEightDigits.length - 1) {
      numbersText += `<td></td>`;
      const interactions_element = interactions[elements[parseInt(lastEightDigits[i])] + elements[parseInt(lastEightDigits[i+1])]];
      elementsText += `<td>${interactions_element}</td>`;
    }
  }

  numbersText += '</tr>';
  elementsText += '</tr>';

  // 顯示生剋關係表格
  const resultDiv = document.getElementById('result');
  resultDiv.innerHTML = `
    <br>
    <hr>
    <p>您的電話號碼是：${phoneNumber}</p>
    <table>
      <tr>
        <th>　　</th>
        <th></th>
        <th>　　</th>
        <th></th>
        <th>健康</th>
        <th></th>
        <th>財帛</th>
        <th></th>
        <th>子女</th>
        <th></th>
        <th>姻緣</th>
        <th></th>
        <th>外緣</th>
        <th></th>
        <th>命宮</th>
      </tr>
      ${numbersText}
      ${elementsText}
      ${interactionsText}
    </table>
  `;

  // 驗證電話號碼是否有效的函數
  function isValidPhoneNumber(phoneNumber) {
    // 您可以在此實現自己的驗證邏輯
    // 為了簡單起見，我們只檢查輸入是否為非空
    return phoneNumber.trim() !== ''; // 檢查是否為非空
  }
}

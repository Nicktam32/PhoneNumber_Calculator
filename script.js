document.getElementById('phoneNumber').addEventListener('input', function () {
  // 獲取輸入框中的值
  const phoneNumber = this.value;
  
  // 驗證電話號碼格式（可選）
  if (!isValidPhoneNumber(phoneNumber)) { // 檢查是否為有效電話號碼
    alert('請輸入有效的電話號碼。'); // 提示訊息
    return;
  }

  // 定義五行元素
  const elements = ['<span style="color:brown;">土</span>', '<span style="color:blue;">水</span>', 
                    '<span style="color:brown;">土</span>', '<span style="color:green;">木</span>',
                      '<span style="color:green;">木</span>', '<span style="color:brown;">土</span>',
                      '<span style="color:gold;">金</span>', '<span style="color:gold;">金</span>',
                        '<span style="color:brown;">土</span>', '<span style="color:red;">火</span>']; 
  const cleanElements = elements.map(element => element.replace(/(<([^>]+)>)/gi, ''));
  // 定義宮位
  const position = ['','','健康', '財帛', '子女', '姻緣', '外緣', '命宮']; 
  // 定義生剋關係
  const interactions = {
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
  let lastEightDigits = phoneNumber.slice(-8);

  // 補齊不足8位的情況
  while (lastEightDigits.length < 8) {
    lastEightDigits = ' ' + lastEightDigits; // 在前面添加空白，直到总共有8位数字
  }

  // 計算生剋關係
  let numbersText = '<tr>';
  let elementsText = '<tr>';

  for (let i = 0; i < lastEightDigits.length; i++) {
    const digit = parseInt(lastEightDigits[i]);
    const parsedDigit = isNaN(digit) ? ' ' : digit; // 若為 NaN，則以空白取代

    numbersText += `<td>${parsedDigit}</td>`;

    const digit_element = elements[parsedDigit];
    const parsedElement = digit_element ? digit_element : ' '; // 若為 undefined，則以空白取代
    elementsText += `<td>${parsedElement}</td>`;

    // 檢查是否為最後一個索引，如果不是則加上空白的 <td></td>
    if (i !== lastEightDigits.length - 1) {
      numbersText += `<td></td>`;
      // 檢查下一個索引是否超出範圍，如果沒有則計算 interactions_element
      if (i + 1 < lastEightDigits.length) {
        const cross_interactions = cleanElements[parsedDigit] + cleanElements[parseInt(lastEightDigits[i + 1])];
        const interactions_element = interactions[cross_interactions] || ' '; // 若為 undefined，則以空白取代
        elementsText += `<td>${interactions_element}</td>`;
      }
    }
  }
  numbersText += '</tr>';
  elementsText += '</tr>';

  // 奇門盤
  // 宮位
  let qiMenText = '<tr><td></td><td></td>';

  const palaces = ['空亡', '坎', '坤', '震', '巽', '坤', '乾', '兌', '艮', '離']; // 宮位
  const gods = ['空亡', '<span style="color:red;">值符</span>', '螣蛇', '<span style="color:red;">太陰</span>',
                '<span style="color:red;">六合</span>', '<span style="color:green;">白虎</span>', '玄武', '九地', '<span style="color:red;">九天</span>',
                '<span style="color:red;">值符</span>']; // 八神
  const stars = ['空亡', '<span style="color:green;">天蓬</span>', '<span style="color:green;">天苪</span>', '天沖', '<span style="color:red;">天輔</span>',
                  '天禽', '<span style="color:red;">天心</span>', '天柱', '<span style="color:red;">天任</span>', '天英']; // 九星
  const gates = ['空亡', '<span style="color:red;">休門</span>','<span style="color:green;">死門</span>','傷門','杜門','<span style="color:green;">死門(寄)</span>',
                  '<span style="color:red;">開門</span>', '驚門','<span style="color:red;">生門</span>','景門']; // 八門
  const stems = ['癸', '<span style="color:red;">甲(戊)</span>','<span style="color:red;">乙</span>','<span style="color:red;">丙</span>',
                  '<span style="color:red;">丁</span>','<span style="color:red;">戊</span>','己','<span style="color:green;">庚</span>','辛','壬']; // 天干


  for (let i = 0; i < lastEightDigits.length; i++) {
    const digit = parseInt(lastEightDigits[i]);
    if (i == 2) {
      qiMenText += `<td>${palaces[digit]}</td>`;
    }
    if (i == 3) {
      qiMenText += `<td>${gods[digit]}</td>`;
    }
    if (i == 4) {
      qiMenText += `<td>${stars[digit]}</td>`;
    }
    if (i == 5) {
      qiMenText += `<td>${gates[digit]}</td>`;
    }
    if (i == 6) {
      qiMenText += `<td>${stems[digit]}</td>`;
    }
    if (i == 7) {
      qiMenText += `<td>${stems[digit]}</td>`;
    }
    else {
      qiMenText += `<td></td>`;
    }
  }
  qiMenText += '</tr>';

  // 顯示生剋關係表格
  const resultDiv = document.getElementById('result');
  resultDiv.innerHTML = `
    <hr>
    <p>您的電話號碼是：${phoneNumber}</p>
    <!-- HTML structure with Bootstrap classes -->
    <div class="table-responsive-nineStar"> 
      <table class="table table-bordered table-responsive-sm text-center"> 
        <thead class="thead-dark"> 
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
        </thead>
        <tbody>
          ${numbersText}
          ${elementsText}
        </tbody>
        <tr>
            <th>　　</th>
            <th></th>
            <th>　　</th>
            <th></th>
            <th>八宮</th>
            <th></th>
            <th>八神</th>
            <th></th>
            <th>九星</th>
            <th></th>
            <th>八門</th>
            <th></th>
            <th>天盤干</th>
            <th></th>
            <th>地盤干</th>
          </tr>
          ${qiMenText}
      </table>
    </div>
  `;

  // 在窗口大小变化时，重新计算表格宽度
  window.addEventListener('resize', function() {
    const screenWidth = window.innerWidth;
    const table = document.querySelector('.table-responsive-sm');
    const tableWidth = screenWidth <= 646 ? '100%' : '646px'; // 根据屏幕宽度设置表格宽度
    table.style.width = tableWidth;
  });

  // 驗證電話號碼是否有效的函數
  function isValidPhoneNumber(phoneNumber) {
    // 您可以在此實現自己的驗證邏輯
    // 為了簡單起見，我們只檢查輸入是否為非空
    return phoneNumber.trim() !== ''; // 檢查是否為非空
  }
});
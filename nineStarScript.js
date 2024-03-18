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
    '木火': '生→',
    '火土': '生→',
    '土金': '生→',
    '金水': '生→',
    '水木': '生→',
    '火木': '←生',
    '土火': '←生',
    '金土': '←生',
    '水金': '←生',
    '木水': '←生',
    '木土': '剋→',
    '土水': '剋→',
    '水火': '剋→',
    '火金': '剋→',
    '金木': '剋→',
    '土木': '←剋',
    '水土': '←剋',
    '火水': '←剋',
    '金火': '←剋',
    '木金': '←剋',
    '木木': '=同=',
    '火火': '=同=',
    '土土': '=同=',
    '水水': '=同=',
    '金金': '=同='
  };

  // 移除空格並取得最後8個數字
  let lastEightDigits = phoneNumber.replace(/\s/g, '').slice(-8);

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

  // 八宅
  const dictionary = {
    14: '生氣',
    41: '生氣',
    67: '生氣',
    76: '生氣',
    39: '生氣',
    93: '生氣',
    28: '生氣',
    82: '生氣',
    13: '天醫',
    31: '天醫',
    68: '天醫',
    86: '天醫',
    49: '天醫',
    94: '天醫',
    27: '天醫',
    72: '天醫',
    19: '延年',
    91: '延年',
    78: '延年',
    87: '延年',
    34: '延年',
    43: '延年',
    26: '延年',
    62: '延年',
    17: '禍害',
    71: '禍害',
    89: '禍害',
    98: '禍害',
    46: '禍害',
    64: '禍害',
    23: '禍害',
    32: '禍害',
    16: '六煞',
    61: '六煞',
    47: '六煞',
    74: '六煞',
    38: '六煞',
    83: '六煞',
    29: '六煞',
    92: '六煞',
    12: '絕命',
    21: '絕命',
    69: '絕命',
    96: '絕命',
    48: '絕命',
    84: '絕命',
    37: '絕命',
    73: '絕命',
    18: '五鬼',
    81: '五鬼',
    79: '五鬼',
    97: '五鬼',
    36: '五鬼',
    63: '五鬼',
    24: '五鬼',
    42: '五鬼',
    11: '伏位',
    22: '伏位',
    33: '伏位',
    44: '伏位',
    66: '伏位',
    77: '伏位',
    88: '伏位',
    99: '伏位'
  }

  const energy = {
      14: 100,
      41: 100,
      67: 75,
      76: 75,
      39: 50,
      93: 50,
      28: 25,
      82: 25,
      13: 100,
      31: 100,
      68: 75,
      86: 75,
      49: 50,
      94: 50,
      27: 25,
      72: 25,
      19: 100,
      91: 100,
      78: 75,
      87: 75,
      34: 50,
      43: 50,
      26: 25,
      62: 25,
      17: 100,
      71: 100,
      89: 75,
      98: 75,
      46: 50,
      64: 50,
      23: 25,
      32: 25,
      16: 100,
      61: 100,
      47: 75,
      74: 75,
      38: 50,
      83: 50,
      29: 25,
      92: 25,
      12: 100,
      21: 100,
      69: 75,
      96: 75,
      48: 50,
      84: 50,
      37: 25,
      73: 25,
      18: 100,
      81: 100,
      79: 75,
      97: 75,
      36: 50,
      63: 50,
      24: 25,
      42: 25,
      11: 100,
      22: 100,
      33: 25,
      44: 25,
      66: 50,
      77: 50,
      88: 75,
      99: 75
  }

  const match = {
      '五鬼天醫': '偏財多多、通過才華智慧賺錢',
      '五鬼延年': '理想堅守、需要靈活動腦的工作',
      '五鬼生氣': '不停的變動、適合命理研究、會動腦、能想到好的點子',
      '五鬼禍害': '妙語連珠、血光之災、思想招口舌、曾墮胎、臉色不好、自己主動惹禍',
      '五鬼伏位': '一想再想、容易見到鬼、抑鬱',
      '五鬼絝命': '雷厲風行、不信命、意外多、不死也只剩半條命、拚命去實現自己目標',
      '五鬼六煞': '離婚、容易抑鬱',
      '五鬼五鬼': '一想再想、容易見到鬼、很有才華但最不穩定',
      '六煞生氣': '注重外表、偏桃花旺、人緣好、對人熱情、有良好的人際關係',
      '六煞天醫': '姻緣開花結果、宜做服務性行業賺錢、有家庭帶來的財富',
      '六煞絕命': '早戀、脾氣差、容易失控、有外遇、為情自殺、婦科病、帶著情緒十分辛苦地努力   *在結尾會常失戀',
      '六煞延年': '守家的組合、宜在行政或服務行業工作，懂得處理人際關係、買固定牌子、注意自己形象、對配偶要求高',
      '六煞伏位': '膽子小、持續不斷的桃花',
      '六煞五鬼': '交際能力好、欺騙性、情緒變化大、沒有安全感',
      '六煞禍害': '愛跟家裡人說話、愛跟家裡人吵架、容易得罪人、爛桃花、六煞有0會中風、腦出血(1064)',
      '六煞六煞': '膽子小、持續不斷的桃花',
      '絕命天醫': '投資有收穫、通過拼搏努力而賺錢',
      '絕命禍害': '敢說、小人不斷、短命、行為招口舌、易交通意外、女人打不嬴會咬人',
      '絕命六煞': '衝動好勝、懷才不遇',
      '絕命伏位': '事業上不斷的跑動，不得不花的錢',
      '絕命延年': '做事業、喜買房產、膽子大',
      '絕命五鬼': '虧空、傾家蕩產、不死也只剩半條命、衝動地做出奇異想法、五鬼有0會墮胎(2108)',
      '絕命絕命': '粗心大意、激動、偏頗、破財',
      '絕命生氣': '兩極化、易突破瓶頸、花錢不節制、脾氣極大、拼搏型、不注重健康',
      '禍害生氣': '愛說話、說話帶貴人、能夠說出有價值的話使人喜歡、不注重健康',
      '禍害天醫': '做銷售事業、以口為業、可做餐飲業',
      '禍害五鬼': '心直口快、容易暴躁、表達奇異讓人感到模稜兩可',
      '禍害伏位': '有顧慮的說、持續的小人',
      '禍害延年': '心直口快、有能力、口才好、做銷售事業、以口為業',
      '禍害絕命': '重利益、口舌惹是非、短命、說話衝動、想自殺',
      '禍害六煞': '能說會道、嘴巴招桃花',
      '禍害禍害': '有顧慮的說、持續的小人、說話直接、易招是非、脾氣暴躁、沒有耐心',
      '伏位延年': '工作能力強、為人謹慎、有權力',
      '伏位生氣': '等待貴人出現、懶散',
      '伏位禍害': '隱忍帶來是非、死雞撐飯蓋、自以為是',
      '伏位伏位': '不是天才，就是白癡',
      '伏位天醫': '靠專業取財',
      '伏位絕命': '被動的投資、意外死亡、不沖則已，一飛沖天',
      '伏位五鬼': '被動地思考、多夢',
      '伏位六煞': '猶豫不決、胡思亂想',
      '生氣延年': '通過貴人帶來工作、升官、升學、升職',
      '生氣天醫': '人脈與錢財、通過貴人而帶來財富、能合夥賺錢',
      '生氣伏位': '持續的貴人運',
      '生氣生氣': '持續的貴人運',
      '生氣六煞': '敏感、有嫉妒心、難有爆破力、好食懶做、人緣好、交際八面玲瓏',
      '生氣五鬼': '情商高、交際圓滑、被人偷竊',
      '生氣禍害': '貴人變小人、自以為很好的東西但講出來便招議論',
      '生氣絕命': '講義氣、自由、散漫、開心地拼搏自己的理想',
      '天醫絕命': '感情易出問題、斬桃花、離婚、花錢無節制、破財、有錢就去投資但思考不周導致破財',
      '天醫伏位': '持續不斷的財源、加薪',
      '天醫禍害': '感情易出問題、抱怨、疾病耗錢、總想買好的東西、錢花在小人和身體上',
      '天醫天醫': '兩個財源、持續不斷的財源、加薪、有婚姻',
      '天醫五鬼': '感情易出問題、傷財、不安於現狀、因想法不切實際而損財、財富瞬間消失或捐獻',
      '天醫六煞': '感情易出問題、將錢用於家人、異性、情感潔癖(容不下配偶與異性相處)、易因女性破財、買屋、投資',
      '天醫延年': '老闆心態、善於投資和創業',
      '天醫生氣': '有錢很開心、愛情甜蜜、人緣好、錢會花在朋友身上、錢花掉開心',
      '延年絕命': '衝動、暴躁、矛盾、工作上多波折、感情人際皆不好',
      '延年五鬼': '能力改變、一邊工作一邊想著改變、大五鬼：過勞死、婚姻名存實亡',
      '延年六煞': '懂變通的大男子主義、工作做得不開心、為情所困、大延年：愛上有婦之夫',
      '延年生氣': '抵抗力強、大男人、大女人、工作開心、沒有太大壓力、利於讀書',
      '延年天醫': '付出有收穫、事業求財、靠自己的專業能力賺錢',
      '延年伏位': '壓力、勞碌、自控能力極強、被動而努力地去做事',
      '延年禍害': '事業受挫、不斷發生流言蜚語令工作受挫',
      '延年延年': '專業能力強，有權、有領導力'
  }

  const good_or_not = {
      '五鬼天醫': '吉',
      '五鬼延年': '吉',
      '五鬼生氣': '吉',
      '五鬼禍害': '凶',
      '五鬼伏位': '凶',
      '五鬼絕命': '凶',
      '五鬼六煞': '凶',
      '五鬼五鬼': '凶',
      '六煞生氣': '吉',
      '六煞天醫': '吉',
      '六煞絕命': '凶',
      '六煞延年': '吉',
      '六煞伏位': '凶',
      '六煞五鬼': '凶',
      '六煞禍害': '凶',
      '六煞六煞': '凶',
      '絕命天醫': '吉',
      '絕命禍害': '凶',
      '絕命六煞': '凶',
      '絕命伏位': '凶',
      '絕命延年': '吉',
      '絕命五鬼': '凶',
      '絕命絕命': '凶',
      '絕命生氣': '逢凶化吉',
      '禍害生氣': '吉',
      '禍害天醫': '吉',
      '禍害五鬼': '凶',
      '禍害伏位': '凶',
      '禍害延年': '吉',
      '禍害絕命': '凶',
      '禍害六煞': '凶',
      '禍害禍害': '凶',
      '伏位延年': '-',
      '伏位生氣': '-',
      '伏位禍害': '-',
      '伏位伏位': '-',
      '伏位天醫': '-',
      '伏位絕命': '-',
      '伏位五鬼': '-',
      '伏位六煞': '-',
      '生氣延年': '吉',
      '生氣天醫': '吉',
      '生氣伏位': '吉',
      '生氣生氣': '吉',
      '生氣六煞': '凶',
      '生氣五鬼': '凶',
      '生氣禍害': '凶',
      '生氣絕命': '凶',
      '天醫絕命': '凶',
      '天醫伏位': '吉',
      '天醫禍害': '凶',
      '天醫天醫': '吉',
      '天醫五鬼': '凶',
      '天醫六煞': '凶',
      '天醫延年': '吉',
      '天醫生氣': '吉',
      '延年絕命': '凶',
      '延年五鬼': '凶',
      '延年六煞': '凶',
      '延年生氣': '吉',
      '延年天醫': '吉',
      '延年伏位': '吉',
      '延年禍害': '凶',
      '延年延年': '吉'
  }

  let eightHouseText = '<tr><td></td>';
  for (let i = 0; i < lastEightDigits.length; i++) {
    // 檢查下一個索引是否超出範圍，如果沒有則計算 interactions_element
    if (i + 1 < lastEightDigits.length) {
      const digit = parseInt(lastEightDigits[i]);
      const parsedDigit = isNaN(digit) ? ' ' : digit; // 若為 NaN，則以空白取代
      const cross_interactions = dictionary[(parsedDigit * 10 + parseInt(lastEightDigits[i + 1]))];
      eightHouseText += `<td>${cross_interactions}</td><td></td>`;
    }
  }

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
          ${numbersText}
          ${elementsText}
          ${eightHouseText}
        <thead class="thead-dark"> 
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
        </thead>
         ${qiMenText}
      </table>
    </div>
  `;

  // 根據螢幕寬度設定表格寬度
  window.addEventListener('resize', function() {
    const table = document.querySelector('.table-responsive-nineStar');
    const tableWidth = '700px'; // Fixed width of the table
    
    table.style.width = tableWidth;
  });

  // 驗證電話號碼是否有效的函數
  function isValidPhoneNumber(phoneNumber) {
    // 您可以在此實現自己的驗證邏輯
    // 為了簡單起見，我們只檢查輸入是否為非空
    return phoneNumber.trim() !== ''; // 檢查是否為非空
  }
});
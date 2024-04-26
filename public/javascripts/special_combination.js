const specialCombinations = [
    {
      "combination": "11",
      "interpretation": "兩水比和 → 利桃花(1)、官星(1)、聰明(1)"
    },
    {
      "combination": "13",
      "interpretation": "主是非(3)"
    },
    {
      "combination": "31",
      "interpretation": "主是非(3)"
    },
    {
      "combination": "14",
      "interpretation": "因智慧(1)而利文昌(4)、名聲(4)、文職(4)、聰明(1)"
    },
    {
      "combination": "41",
      "interpretation": "因智慧(1)而利文昌(4)、名聲(4)、文職(4)、聰明(1)"
    },
    {
      "combination": "15",
      "interpretation": "因智慧(1)而容易得罪人(5)，會在朋友前show off"
    },
    {
      "combination": "51",
      "interpretation": "因智慧(1)而容易得罪人(5)，會在朋友前show off"
    },
    {
      "combination": "16",
      "interpretation": "金水多情主桃花(1)、聰明(1)、發小財(6)"
    },
    {
      "combination": "61",
      "interpretation": "金水多情主桃花(1)、聰明(1)、發小財(6)"
    },
    {
      "combination": "19",
      "interpretation": "水剋火 → 反目不和、官非、情緒病、八字用神不是水木火：為人執著、想開始又想結束"
    },
    {
      "combination": "91",
      "interpretation": "水剋火 → 反目不和、官非、情緒病、八字用神不是水木火：為人執著、想開始又想結束"
    },
    {
      "combination": "23",
      "interpretation": "鬥牛煞 → 官非(3)、是非(3)、夫妻不和(3剋2)"
    },
    {
      "combination": "32",
      "interpretation": "鬥牛煞 → 官非(3)、是非(3)、夫妻不和(3剋2)"
    },
    {
      "combination": "25",
      "interpretation": "二五交加，兩病星相遇 → 主大病(2+5)"
    },
    {
      "combination": "52",
      "interpretation": "二五交加，兩病星相遇 → 主大病(2+5)"
    },
    {
      "combination": "26",
      "interpretation": "陰陽正配，土生金 → 利武官(6)、置業(2)、穩定(老父配老婦)"
    },
    {
      "combination": "62",
      "interpretation": "陰陽正配，土生金 → 利武官(6)、置業(2)、穩定(老父配老婦)"
    },
    {
      "combination": "27",
      "interpretation": "主婦科病"
    },
    {
      "combination": "72",
      "interpretation": "主婦科病"
    },
    {
      "combination": "28",
      "interpretation": "後天合十，兩土比和 → 利財運(8)、利田宅(土)、但帶小病(2)，常感不足、現實比較(28皆土)"
    },
    {
      "combination": "82",
      "interpretation": "後天合十，兩土比和 → 利財運(8)、利田宅(土)、但帶小病(2)，常感不足、現實比較(28皆土)"
    },
    {
      "combination": "29",
      "interpretation": "火生土 → 不育、寡婦、女同性戀，盲目地幫助他人(2坤)"
    },
    {
      "combination": "92",
      "interpretation": "火生土 → 不育、寡婦、女同性戀，盲目地幫助他人(2坤)"
    },
    {
      "combination": "33",
      "interpretation": "主是非(3)、爭吵(3)"
    },
    {
      "combination": "34",
      "interpretation": "精神病"
    },
    {
      "combination": "43",
      "interpretation": "精神病"
    },
    {
      "combination": "35",
      "interpretation": "窮途末路再遭殃，損長男、家宅不安、流產"
    },
    {
      "combination": "53",
      "interpretation": "窮途末路再遭殃，損長男、家宅不安、流產"
    },
    {
      "combination": "36",
      "interpretation": "金木交戰，強勢(6)做事，只求結果，3想出位、6想保守，又要威又要戴頭盔，鍾意以言語欺凌他人 ，大腦短路"
    },
    {
      "combination": "63",
      "interpretation": "金木交戰，強勢(6)做事，只求結果，3想出位、6想保守，又要威又要戴頭盔，鍾意以言語欺凌他人 ，大腦短路"
    },
    {
      "combination": "37",
      "interpretation": "三七交劍煞，震三是非加上兌七口舌 → 主是非(3)、爭吵(7)、財被劫(7)、背義忘恩、長男受傷喜歡破新立舊"
    },
    {
      "combination": "73",
      "interpretation": "三七交劍煞，震三是非加上兌七口舌 → 主是非(3)、爭吵(7)、財被劫(7)、背義忘恩、長男受傷喜歡破新立舊"
    },
    {
      "combination": "38",
      "interpretation": "先天木，木剋土 → 是非重(3)、朋友多(38為朋)、講是非(3)、坐骨神經痛"
    },
    {
      "combination": "83",
      "interpretation": "先天木，木剋土 → 是非重(3)、朋友多(38為朋)、講是非(3)、坐骨神經痛"
    },
    {
      "combination": "39",
      "interpretation": "木生火，易吸引小人是非(3)、筋骨(3)易紅腫、肝透支、眼紅"
    },
    {
      "combination": "93",
      "interpretation": "木生火，易吸引小人是非(3)、筋骨(3)易紅腫、肝透支、眼紅"
    },
    {
      "combination": "44",
      "interpretation": "兩木比和 → 利文昌(木)、名聲(木)、聰明(木)"
    },
    {
      "combination": "45",
      "interpretation": "五黃病位被陰木剋，皇帝不容反剋自己 → 容易看見靈體(4)、中風"
    },
    {
      "combination": "54",
      "interpretation": "五黃病位被陰木剋，皇帝不容反剋自己 → 容易看見靈體(4)、中風"
    },
    {
      "combination": "47",
      "interpretation": "金木交戰，易口臭體味(4為風)，傷痕(金木交戰)，大腦短路(木主神經)"
    },
    {
      "combination": "74",
      "interpretation": "金木交戰，易口臭體味(4為風)，傷痕(金木交戰)，大腦短路(木主神經)"
    },
    {
      "combination": "48",
      "interpretation": "家運無期、損小口(牙病、小朋友)、易小產"
    },
    {
      "combination": "84",
      "interpretation": "家運無期、損小口(牙病、小朋友)、易小產"
    },
    {
      "combination": "59",
      "interpretation": "性病(9為桃花)、癌症、化療(9+2+5)、功(9)高蓋主(5)、口腔問題、腸胃炎"
    },
    {
      "combination": "95",
      "interpretation": "性病(9為桃花)、癌症、化療(9+2+5)、功(9)高蓋主(5)、口腔問題、腸胃炎"
    },
    {
      "combination": "66",
      "interpretation": "兩金比和 → 發武職(6)、顯權貴(6)"
    },
    {
      "combination": "67",
      "interpretation": "兩金劫財 → 女淫(7)、爭拗(67劫財)、是非(67劫財)、官非訴訟(67劫財)、撞車"
    },
    {
      "combination": "76",
      "interpretation": "兩金劫財 → 女淫(7)、爭拗(67劫財)、是非(67劫財)、官非訴訟(67劫財)、撞車"
    },
    {
      "combination": "68",
      "interpretation": "土生金 → 利田宅(8)、利財運(6)"
    },
    {
      "combination": "86",
      "interpretation": "土生金 → 利田宅(8)、利財運(6)"
    },
    {
      "combination": "69",
      "interpretation": "回祿之災(搶自己資源再自己後起爐灶)，破財、為子不孝(對父反叛)、工作有困難、腦病、中風、糖尿病、心臟病、腎病、腸病、頭痛、甩頭髮、和尚/修行者、因腸胃不好而差"
    },
    {
      "combination": "96",
      "interpretation": "回祿之災(搶自己資源再自己後起爐灶)，破財、為子不孝(對父反叛)、工作有困難、腦病、中風、糖尿病、心臟病、腎病、腸病、頭痛、甩頭髮、和尚/修行者、因腸胃不好而差"
    },
    {
      "combination": "77",
      "interpretation": "撞車"
    },
    {
      "combination": "78",
      "interpretation": "後天合十五，土生金 → 利財運(8)、失運時財來財去(8洩氣)"
    },
    {
      "combination": "87",
      "interpretation": "後天合十五，土生金 → 利財運(8)、失運時財來財去(8洩氣)"
    },
    {
      "combination": "79",
      "interpretation": "火剋金，說話沒氣、喉嚨痛、上氣不接下氣、口腔問題"
    },
    {
      "combination": "97",
      "interpretation": "火剋金，說話沒氣、喉嚨痛、上氣不接下氣、口腔問題"
    },
    {
      "combination": "88",
      "interpretation": "兩土比和 → 利田宅(8)"
    },
    {
      "combination": "89",
      "interpretation": "火生土 → 丁財兩旺，丁(9) 財(8)、背椎易傷"
    },
    {
      "combination": "98",
      "interpretation": "火生土 → 丁財兩旺，丁(9) 財(8)、背椎易傷"
    },
    {
      "combination": "99",
      "interpretation": "兩火比和 → 主喜慶(9)"
    },
    {
      "combination": "147",
      "interpretation": "水生木剋金 → 俊男俊女(14桃花)、家裏有錢"
    },
    {
      "combination": "801",
      "interpretation": "五鬼夾0，易小產、墮胎"
    },
    {
      "combination": "108",
      "interpretation": "五鬼夾0，易小產、墮胎"
    }
  ]
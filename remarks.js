// 確保頁面加載完成後再執行腳本
window.addEventListener('DOMContentLoaded', () => {
    // 獲取電話號碼輸入框元素和備註容器元素
    const phoneNumberInput = document.getElementById('phoneNumber');
    const remarksContainer = document.getElementById('remarksContainer');

    // 監聽輸入框的變化
    phoneNumberInput.addEventListener('input', () => {
        // 獲取輸入框中的值
        const phoneNumber = phoneNumberInput.value;

        // 取得最後8個數字
        let lastEightDigits = phoneNumber.slice(-8);

        // 補齊不足8位的情況
        while (lastEightDigits.length < 8) {
            lastEightDigits = ' ' + lastEightDigits; // 在前面添加空白，直到總共有8位數字
        }

        // 奇門盤 Remarks
        let qimenRemarks = '';

        for (let i = 0; i < lastEightDigits.length; i++) {
            const digit = parseInt(lastEightDigits[i]);
            if (i === 2 && digit === 0) {
                qimenRemarks += "● 宮位為做事的平台，也等於身處的客觀環境，宮位逢空亡，代表做事缺乏資源，能力難以發揮，或欠缺可以發揮表現的平台、媒介，使不上力、懷才不遇，比人家付出多、回收少、多勞少獲。<br>";
            }
            if (i === 3 && digit === 0) {
                qimenRemarks += "● 八神代表人的思想觀念，「神」逢空亡，代表想法上較沒主見，「神」也代表神助、貴人，逢空亡，做事沒人幫、較無貴人，或沒祖蔭，一切得靠自己，白手起家。<br>";
            }
            if (i === 4 && digit === 0) {
                qimenRemarks += "● 九星代表人的個性、性格，「星」逢空亡，性格上較沒主見；「星」也代表發展，逢空亡，做事較無大的發展性，或是沒發展、或時機不對。<br>";
            }
            if (i === 5 && digit === 0) {
                qimenRemarks += "● 八門代表人的心態或行動，「門」逢空亡，做事時心態或行動上較不積極，往往沒有、或找不到正確的做事方法或途徑，辦事常徒勞無功。<br>";
            }
        }

        // 根據 qimenRemarks 是否有內容來判斷是否打印消息
        if (qimenRemarks.trim() !== '') {
            remarksContainer.innerHTML = `
                <hr>
                <h6>奇門盤 Remarks</h6>
                <p>${qimenRemarks}</p>
            `;
        } else {
            // 如果沒有內容，清空備註容器
            remarksContainer.innerHTML = '';

            // Create the image element
            const imgElement = document.createElement('img');
            imgElement.src = 'qiMen_pic.png'; 
            imgElement.alt = 'qiMen_pic';

            // Set the width and height of the image 
            imgElement.width = 750; 
            imgElement.height = 500; 
            remarksContainer.appendChild(imgElement); 
        }
    });
});

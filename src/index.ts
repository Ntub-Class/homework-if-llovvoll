// 請介紹兩個字串方法跟數字方法

let text1: string = ('Hello NTUB');
let number1: number = 123;

// split()
// 可以設定指定分隔符號來分割字串並加入到陣列中
console.log('\n(1) string.split()\n使用空格來分割字串並加入到陣列中');
console.log(text1);
console.log('Split Method:', text1.split(' '));

// charAt()
// 取出指定位置中的值
console.log('\n(2) string.chatAt()\n取出指定位置(2)的文字');
console.log(text1);
console.log('CharAt Method:', text1.charAt(2));

// toString()
console.log('\n(1) number.toString()\n未使用toString，Type=>', typeof (number1));
console.log('123 + 123 = ', number1 + 123);
console.log('已使用toString，Type=>', typeof (number1.toString()));
console.log('123 + 123 = ', number1.toString() + 123);

// toFixed()
number1 = 123.456;
console.log('\n(2) number.toFixed()\n把數字格式化成指定的長度')
console.log('number1 = 123.456');
console.log('使用toFixed(2)取小數點後兩位並四捨五入=>', number1.toFixed(2));

// 錢錢大於一個值，叫乾爹
let money = 600000;
let limit = 500000; // 限制值

console.log('\n~~誰只要有五十萬塊就是我乾爹~~')
if (money >= limit) {
    console.log('哇！你有$', money, '你就是我乾爹~~');
} else {
    console.log('你只有$', money, '你不是我乾爹');
}

regex=/^[_a-z0-9]{6}$/;
function check(str) {
    return regex.test(str);
}
let arr=[
    '123bcd_',
    '_abc123',
    '______',
    '123456',
    'abcdefg',
    '.@',
    '12345',
    '1234_',
    'abcde'
];
for (let w of arr) {
    if(check(w)) {
        console.log("'"+w +"'"+ "accout hợp lệ");
    }else {
        console.log("'"+w +"'"+ "accout không hợp lệ");
    }
}

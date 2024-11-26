let calculateBtn = document.getElementById('calculateBtn');
let inputArea = document.getElementById('date');
inputArea.max = new Date().toISOString().split('T')[0];
let para = document.getElementById('p');

calculateBtn.addEventListener('click', calculateAge);

function calculateAge() {
    let dob = inputArea.value;
    let birthdate = new Date(dob); // 26-3-2004
    
    let today = new Date(); // 15-11-2024
    let d3, m3, y3;
    let d1 = birthdate.getDate();
    let m1 = birthdate.getMonth() + 1; // Months are zero-based
    let y1 = birthdate.getFullYear();
    let d2 = today.getDate();
    let m2 = today.getMonth() + 1;
    let y2 = today.getFullYear();

    y3 = y2 - y1;
    if (m2 >= m1) {
        m3 = m2 - m1;
    } else {
        y3--;
        m3 = 12 + m2 - m1;
    }
    if (d2 >= d1) {
        d3 = d2 - d1;
    } else {
        m3--;
        d3 = getdaysinmonth(y2, m2 - 1) + d2 - d1;
    }
    if (m3 < 0) {
        m3 = 11;
        y3--;
    }
    para.innerHTML=`Your Age is <span>${y3}</span> Years <span>${m3}</span> Months <span>${d3}</span> Days !...`
}

function getdaysinmonth(year, month) {
    return new Date(year, month, 0).getDate();
}

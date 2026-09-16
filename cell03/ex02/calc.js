setInterval(() => alert('Please, use me...'), 30000);

document.getElementById('btn').addEventListener('click', () => {
    let l = document.getElementById('left').value;
    let r = document.getElementById('right').value;
    let op = document.getElementById('op').value;

    if (!/^\d+$/.test(l) || !/^\d+$/.test(r)) {
        alert('Error :(');
        return console.log('Error :(');
    }

    l = Number(l);
    r = Number(r);

    if ((op === '/' || op === '%') && r === 0) {
        alert("It's over 9000!");
        return console.log("It's over 9000!");
    }

    let res = op === '+' ? l + r : op === '-' ? l - r : op === '*' ? l * r : op === '/' ? l / r : l % r;
    
    alert(res);
    console.log(res);
});

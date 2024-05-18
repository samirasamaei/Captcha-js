const upper = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
const lower = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
const arrs = [upper, num, lower]
const btn = document.getElementById('btn')
const cod = document.getElementById('cod')
const inp = document.querySelector('#inp')
const check = document.querySelector('#check')

btn.addEventListener('click', () => {
    let key = ''
    for (let i = 0; i < 6; i++) {
        let temp = arrs[Math.floor(Math.random() * arrs.length)]
        key += temp[Math.floor(Math.random() * temp.length)]
    }
    cod.innerText = key;
})

const mai = document.querySelector('main')
const body = document.querySelector('#body')
const _h = document.querySelector('h1')

check.addEventListener('click', function () {
    if (inp.value == '') {
        alert('Enter captcha')
    } else if (inp.value == cod.innerText) {
        //  mai.style.backgroundColor='green'
        body.style.backgroundColor = 'green'
        _h.innerText = 'True'
        _h.style.color = 'green'



    } else {
        // mai.style.backgroundColor='red'
        body.style.backgroundColor = 'red'
        _h.innerText = 'False'
        _h.style.color = 'red'
    }
})


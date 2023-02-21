const mon = document.getElementById('mon');
const tu = document.getElementById('tu');
const wed = document.getElementById('wed');
const thur = document.getElementById('thur');
const fri = document.getElementById('fri');
const sat = document.getElementById('sat');
const sun = document.getElementById('sun');
const time = document.querySelector('.times__of__pray');

let url = 'https://islomapi.uz/api/present/week?region=Toshkent';


window.addEventListener('DOMContentLoaded', (e) => {
    e.preventDefault();
    const createul = document.createElement('ul');
    time.appendChild(createul);
    const createli = document.createElement('li');
    createul.appendChild(createli);
    mon.addEventListener('click', () => {
        fetch(url)
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            for (let i = 0; i < data.length; i++) {
                createli.innerHTML ||= `
                <p> ${data[i].weekday}</p>
                <p>sahar : ${data[i].times.tong_saharlik}</p>
                <p>quyosh :  ${data[i].times.quyosh}</p>
                <p>peshin : ${data[i].times.peshin}</p>
                <p>asr : ${data[i].times.asr}</p>
                <p>shom : ${data[i].times.shom_iftor}</p>
                <p>hufton : ${data[i].times.hufton}</p>
                `
                
            }

        })
        
        
    })
})
window.addEventListener('DOMContentLoaded', (e) => {
    e.preventDefault();
    const createul = document.createElement('ul');
    time.appendChild(createul);
    const createli = document.createElement('li');
    createul.appendChild(createli);
    tu.addEventListener('click', () => {
        fetch(url)
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            for (let i = 1; i < data.length; i++) {
                createli.innerHTML ||= `
                <p> ${data[i].weekday}</p>
                <p>sahar : ${data[i].times.tong_saharlik}</p>
                <p>quyosh :  ${data[i].times.quyosh}</p>
                <p>peshin : ${data[i].times.peshin}</p>
                <p>asr : ${data[i].times.asr}</p>
                <p>shom : ${data[i].times.shom_iftor}</p>
                <p>hufton : ${data[i].times.hufton}</p>
                `
                
            }

        })
        
        
    })
})
window.addEventListener('DOMContentLoaded', (e) => {
    e.preventDefault();
    const createul = document.createElement('ul');
    time.appendChild(createul);
    const createli = document.createElement('li');
    createul.appendChild(createli);
    wed.addEventListener('click', () => {
        fetch(url)
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            for (let i = 2; i < data.length; i++) {
                createli.innerHTML ||= `
                <p> ${data[i].weekday}</p>
                <p>sahar : ${data[i].times.tong_saharlik}</p>
                <p>quyosh :  ${data[i].times.quyosh}</p>
                <p>peshin : ${data[i].times.peshin}</p>
                <p>asr : ${data[i].times.asr}</p>
                <p>shom : ${data[i].times.shom_iftor}</p>
                <p>hufton : ${data[i].times.hufton}</p>
                `
                
            }

        })
        
        
    })
})
window.addEventListener('DOMContentLoaded', (e) => {
    e.preventDefault();
    const createul = document.createElement('ul');
    time.appendChild(createul);
    const createli = document.createElement('li');
    createul.appendChild(createli);
    thur.addEventListener('click', () => {
        fetch(url)
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            for (let i = 3; i < data.length; i++) {
                createli.innerHTML ||= `
                <p> ${data[i].weekday}</p>
                <p>sahar : ${data[i].times.tong_saharlik}</p>
                <p>quyosh :  ${data[i].times.quyosh}</p>
                <p>peshin : ${data[i].times.peshin}</p>
                <p>asr : ${data[i].times.asr}</p>
                <p>shom : ${data[i].times.shom_iftor}</p>
                <p>hufton : ${data[i].times.hufton}</p>
                `
                
            }

        })
        
        
    })
})
window.addEventListener('DOMContentLoaded', (e) => {
    e.preventDefault();
    const createul = document.createElement('ul');
    time.appendChild(createul);
    const createli = document.createElement('li');
    createul.appendChild(createli);
    fri.addEventListener('click', () => {
        fetch(url)
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            for (let i = 4; i < data.length; i++) {
                createli.innerHTML ||= `
                <p> ${data[i].weekday}</p>
                <p>sahar : ${data[i].times.tong_saharlik}</p>
                <p>quyosh :  ${data[i].times.quyosh}</p>
                <p>peshin : ${data[i].times.peshin}</p>
                <p>asr : ${data[i].times.asr}</p>
                <p>shom : ${data[i].times.shom_iftor}</p>
                <p>hufton : ${data[i].times.hufton}</p>
                `
                
            }

        })
        
        
    })
})
window.addEventListener('DOMContentLoaded', (e) => {
    e.preventDefault();
    const createul = document.createElement('ul');
    time.appendChild(createul);
    const createli = document.createElement('li');
    createul.appendChild(createli);
    sat.addEventListener('click', () => {
        fetch(url)
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            for (let i = 5; i < data.length; i++) {
                createli.innerHTML ||= `
                <p> ${data[i].weekday}</p>
                <p>sahar : ${data[i].times.tong_saharlik}</p>
                <p>quyosh :  ${data[i].times.quyosh}</p>
                <p>peshin : ${data[i].times.peshin}</p>
                <p>asr : ${data[i].times.asr}</p>
                <p>shom : ${data[i].times.shom_iftor}</p>
                <p>hufton : ${data[i].times.hufton}</p>
                `
                
            }

        })
        
        
    })
})
window.addEventListener('DOMContentLoaded', (e) => {
    e.preventDefault();
    const createul = document.createElement('ul');
    time.appendChild(createul);
    const createli = document.createElement('li');
    createul.appendChild(createli);
    sun.addEventListener('click', () => {
        fetch(url)
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            for (let i = 6; i < data.length; i++) {
                createli.innerHTML ||= `
                <p> ${data[i].weekday}</p>
                <p>sahar : ${data[i].times.tong_saharlik}</p>
                <p>quyosh :  ${data[i].times.quyosh}</p>
                <p>peshin : ${data[i].times.peshin}</p>
                <p>asr : ${data[i].times.asr}</p>
                <p>shom : ${data[i].times.shom_iftor}</p>
                <p>hufton : ${data[i].times.hufton}</p>
                `
                
            }

        })
        
        
    })
})

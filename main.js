const nickname = `Maciej Iwan`;
const mail = `235878@edu.p.lodz.pl`;

const lectures = [
    { name: `KCK`, pass: `kck-wyklad` },
    { name: `AOI`, pass: `AOI22` },
    { name: `SK I`, pass: `sk2022` },
    { name: `PIO`, pass: `student` }
]

const matchPass = () => {

    let title = $(`span.font-cm`)[0].innerHTML;
    let lecture = lectures.find(lecture => title.includes(lecture.name));

    return lecture ? lecture.pass : ``;
}

const fillForm = (nick, mail, pass) => {

    $(`#conference_nickname`)[0].value = nick;
    $(`#conference_email`)[0].value = mail;
    $(`#conference_password`)[0].value = pass;
}

fillForm(nickname, mail, matchPass());
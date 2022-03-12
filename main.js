const nickname = `Name Subname`;
const mail = `youremail@edu.eu`;

const lectures = [
    { name: `lecture1`, pass: `password` },
    { name: `lecture4`, pass: `Pass21` },
    { name: `math`, pass: `math2022` },
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
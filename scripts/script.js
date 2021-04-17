var users = [{
        name: 'Lucy',
        age: 23,
        gender: 'F',
        hobby: 'pets',
        avatar: 'model1.jpg'
    },
    {
        name: 'Betty',
        age: 21,
        gender: 'F',
        hobby: 'pets',
        avatar: 'model2.jpg'
    },
    {
        name: 'Ronald',
        age: 33,
        gender: 'M',
        hobby: 'music',
        avatar: 'avatar3.png'
    },
    {
        name: 'Christopher',
        age: 13,
        gender: 'M',
        hobby: 'sports',
        avatar: 'avatar4.png'
    },
    {
        name: 'Ximena',
        age: 23,
        gender: 'F',
        hobby: 'reading',
        avatar: 'model3.jpg'
    },
    {
        name: 'Paul',
        age: 25,
        gender: 'M',
        hobby: 'shopping',
        avatar: 'avatar6.png'
    },
    {
        name: 'Charlie',
        age: 54,
        gender: 'M',
        hobby: 'pets',
        avatar: 'avatar7.png'
    },
];

window.addEventListener('load', function () {

    var results = document.getElementById('results');
    let minAge = document.querySelector('#minAge');
    let maxAge = document.querySelector('#maxAge');

    function search() {

        //get hobby
        var hobbyField = document.getElementById('hobby');
        var hobby = hobbyField.value;

        //get gender
        var genderField = document.getElementById('gender');
        var s = genderField.selectedIndex;
        var gender = genderField.options[s].value;

        var resultsHtml = '';
        var usersLength = users.length;

        for (var i = 0; i < usersLength; i++) {
            //check gender
            if (gender == 'A' || gender == users[i].gender) {
                //check Age
                if ((minAge.value == '' && maxAge.value == "") ||
                    (users[i].age >= minAge.value && maxAge.value == "") ||
                    (minAge.value == '' && users[i].age <= maxAge.value) ||
                    (users[i].age >= Number(minAge.value) && users[i].age <= Number(maxAge.value))) {
                    //check hobby
                    if (hobby == '' || hobby == users[i].hobby) {
                        resultsHtml += '<div class="person-row">\
                           <img src="assets/' + users[i].avatar + '" />\
                           <div class="person-info">\
                           <div class="person-name">' + users[i].name + '</div>\
                           <div class="person-age">' + users[i].age + '</div>\
                           <div class="person-hobby">' + users[i].hobby + '</div></div>\
                            <div class="love"><img src="assets/love2.svg" alt=""></div></div>';
                    }
                }
            }
        }

        results.innerHTML = resultsHtml;
    }

    var searchBtn = document.getElementById('searchBtn');

    searchBtn.addEventListener('click', search);
});
/* List of friends that will "Sing the song" */
var friends = ['Pedro', 'Gabriel', 'Andrea', 'Stevan', 'Sam'];

function singing() {
    let divFriend;
    let h3Friend;
    let h3FriendText;
    let pLines;
    let textPLines;
    /* Select each friend turn to sing */
    for (var i = 0; i < friends.length; i++) {

        /* Create a div for each friend */
        divFriend = document.createElement('div');
        h3Friend = document.createElement('h3');
        h3FriendText = document.createTextNode(friends[i].toUpperCase() + ':');

        divFriend.className = "friend";

        h3Friend.appendChild(h3FriendText);
        divFriend.appendChild(h3Friend);

        /* Friend singing each line of the song */
        for (var j = 99; j != 0; j--) {

            pLines = document.createElement('p');

            if (j == 1) {
                textPLines = document.createTextNode(j + " lines of code in the file, " + j + " lines of code; "
                    + friends[i] + " strikes one out, clears it all out, no more lines of code in the file");
            } else {
                textPLines = document.createTextNode(j + " lines of code in the file, " + j + " lines of code; "
                    + friends[i] + " strikes one out, clear it all out, " + (j - 1) + " lines of the code in the file");
            }

            pLines.appendChild(textPLines);
            divFriend.appendChild(pLines);
        }

        document.body.appendChild(divFriend);

    }
}

document.addEventListener('click', function (event) {
    let element = event.target;
    if (element.id == "sing") {
        singing();
    }
});
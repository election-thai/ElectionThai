// Mock data for demonstration purposes
const users = [
    { username: 'user1', password: 'pass1', voted: false },
    { username: 'user2', password: 'pass2', voted: false },
    { username: 'admin', password: 'adminpass', voted: false, isAdmin: true }
];

let currentUser = null;

function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Check if the user exists and the password matches
    const user = users.find(user => user.username === username && user.password === password);

    if (user) {
        currentUser = user;
        document.getElementById('login').style.display = 'none';

        if (user.isAdmin) {
            showResults();
        } else if (user.voted) {
            alert('You have already voted!');
        } else {
            document.getElementById('vote').style.display = 'block';
        }
    } else {
        alert('Invalid username or password!');
    }
}

function submitVote() {
    if (currentUser && !currentUser.voted) {
        const selectedCandidate = document.getElementById('candidate').value;

        // Record the vote
        currentUser.voted = true;
        alert(`Thank you for voting for ${selectedCandidate}!`);

        document.getElementById('vote').style.display = 'none';
        showResults();
    }
}

function showResults() {
    const resultsContent = document.getElementById('resultsContent');
    resultsContent.innerHTML = '';  // Clear previous results

    const votedUsers = users.filter(user => user.voted && !user.isAdmin);
    resultsContent.innerHTML += `<p>Total votes: ${votedUsers.length}</p>`;

    votedUsers.forEach(user => {
        resultsContent.innerHTML += `<p>User: ${user.username} has voted</p>`;
    });

    document.getElementById('result').style.display = 'block';
}

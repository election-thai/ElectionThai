// Mock data for demonstration purposes
const users = [
    { username: 'user1', password: 'pass1', voted: false },
    { username: 'user2', password: 'pass2', voted: false },
    { username: 'admin', password: 'adminpass', voted: false, isAdmin: true }
];

let currentUser = null;

// Function to handle login
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

// Function to submit a vote
function submitVote() {
    if (currentUser && !currentUser.voted) {
        const selectedCandidate = document.getElementById('candidate').value;

        // Record the vote
        currentUser.voted = true;

        // ส่งข้อมูลการลงคะแนนไปยัง Google Apps Script
        const voteData = {
            username: currentUser.username,
            candidate: selectedCandidate
        };

        // URL ของ Google Apps Script ที่ได้จากการ Deploy
        const scriptURL = 'https://script.google.com/macros/s/AKfycbxrixl9oyhb2rLhfQ4Ap_4haW9hK02A8YjR6HWgv3lHMX3E-bCye-OliShuUQHDzI3M/exec';

        // ใช้ fetch ส่งข้อมูลไปยัง Google Apps Script
        fetch(scriptURL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(voteData)
        })
        .then(response => response.text())
        .then(result => {
            alert(`Thank you for voting for ${selectedCandidate}!`);
            document.getElementById('vote').style.display = 'none';
            showResults();  // แสดงผลการลงคะแนนหลังจากโหวตเสร็จ
        })
        .catch(error => console.error('Error!', error.message));
    }
}

// Function to show results
function showResults() {
    fetchResults(); // ดึงข้อมูลจาก Google Sheet แล้วแสดงผล
}

// Function to fetch voting results from Google Sheet
function fetchResults() {
    const resultsContent = document.getElementById('resultsContent');
    resultsContent.innerHTML = '';  // Clear previous results

    // URL ของ Google Apps Script ที่ได้จากการ Deploy พร้อมฟังก์ชัน doGet สำหรับดึงข้อมูล
    const scriptURL = 'https://script.google.com/macros/s/AKfycbwB1Zk3IkATCbqFSnCYnvX32IMzK9lz2z46MRLq8n3swBekRqMht4pUHRO8ZIv-FFkU/exec';

    // ใช้ fetch เพื่อดึงข้อมูลจาก Google Apps Script (doGet)
    fetch(scriptURL)
        .then(response => response.json())
        .then(data => {
            const votedUsers = data.filter(user => user.voted);  // กรองเฉพาะผู้ใช้ที่โหวตแล้ว
            resultsContent.innerHTML += `<p>Total votes: ${votedUsers.length}</p>`;

            votedUsers.forEach(user => {
                resultsContent.innerHTML += `<p>User: ${user.username} voted for: ${user.candidate}</p>`;
            });

            document.getElementById('result').style.display = 'block';
        })
        .catch(error => console.error('Error fetching results!', error.message));
}

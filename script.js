<!DOCTYPE html>
<html lang="th">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Bai+Jamjuree:wght@300;400;500;600;700&family=Kanit:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <title>Login - ครูโรงเรียนสาธิตมหาวิทยาลัยขอนแก่น</title>
    <link rel="stylesheet" href="style.css">
    <style>
        body {
            margin: 0;
            padding: 0;
            font-family: 'Bai Jamjuree', sans-serif;
            background-color: #f7f7f7;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
        }

        .login-container {
            background-color: #ffffff;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
            border-radius: 10px;
            padding: 40px;
            width: 350px;
            text-align: center;
        }

        h2 {
            font-family: 'Kanit', sans-serif;
            color: #333;
            margin-bottom: 20px;
        }

        .input-group {
            margin-bottom: 15px;
            text-align: left;
        }

        .input-group label {
            display: block;
            font-weight: 500;
            margin-bottom: 5px;
            color: #555;
        }

        .input-group input {
            width: 100%;
            padding: 10px;
            border: 1px solid #ddd;
            border-radius: 5px;
            font-size: 14px;
        }

        .input-group input:focus {
            outline: none;
            border-color: #4CAF50;
        }

        button {
            width: 100%;
            padding: 10px;
            background-color: #4CAF50;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            font-size: 16px;
        }

        button:hover {
            background-color: #45a049;
        }

        .error-message {
            color: red;
            margin-top: 10px;
        }
    </style>
</head>
<body>
    <div class="login-container">
        <h2>Login สำหรับครูโรงเรียนสาธิตมหาวิทยาลัยขอนแก่น</h2>
        <form id="loginForm" onsubmit="return login(event)">
            <div class="input-group">
                <label for="username">รหัสผู้ใช้:</label>
                <input type="text" id="username" name="username" required>
            </div>
            <div class="input-group">
                <label for="password">รหัสผ่าน:</label>
                <input type="password" id="password" name="password" required>
            </div>
            <button type="submit">Login</button>
            <p id="error" class="error-message"></p>
        </form>
    </div>

    <script>
        // ฟังก์ชันสำหรับล็อกอิน (ยังไม่มีการเชื่อมต่อจริง)
        function login(event) {
            event.preventDefault();
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;

            // ตัวอย่างตรวจสอบ Username และ Password
            if (username === "teacher" && password === "1234") {
                alert("ยินดีต้อนรับเข้าสู่ระบบ!");
                document.getElementById('error').textContent = "";
                // ไปยังหน้าถัดไปหรือดำเนินการเพิ่มเติม
            } else {
                document.getElementById('error').textContent = "รหัสผู้ใช้หรือรหัสผ่านไม่ถูกต้อง!";
            }
        }
    </script>
</body>
</html>

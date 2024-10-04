// สมมติว่าข้อมูลผู้ใช้ถูกเก็บใน localStorage
const teacherData = JSON.parse(localStorage.getItem('loggedInTeacher'));

if (teacherData) {
    // แสดงข้อมูลครู
    document.getElementById('teacher-name').textContent = `${teacherData.firstName} ${teacherData.lastName}`;
    document.getElementById('teacher-photo').src = teacherData.profilePic || 'default-photo.jpg';
}

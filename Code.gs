function doGet(e) {
  const sheet = SpreadsheetApp.openById("YOUR_GOOGLE_SHEET_ID").getSheetByName("Sheet1");
  const rows = sheet.getDataRange().getValues();
  const data = [];

  // เริ่มจากแถวที่ 2 เพราะแถวที่ 1 คือ header
  for (let i = 1; i < rows.length; i++) {
    data.push({
      username: rows[i][0],
      candidate: rows[i][1],
      voted: true,
      timestamp: rows[i][2]
    });
  }

  // ส่งข้อมูลกลับในรูปแบบ JSON
  return ContentService.createTextOutput(JSON.stringify(data))
    .setMimeType(ContentService.MimeType.JSON);
}

# Vanguardia Classroom Email Notification System

# I created it with the help of Claude AI and ChatGPT

## Overview
This Google Apps Script automates the process of sending Google Classroom registration information to students at Instituto Vanguardia. The script reads student information from a Google Spreadsheet and sends personalized emails with login credentials and helpful resources.

## Features
- Automatically sends emails to multiple students based on spreadsheet data
- Includes personalized information (student name, username) in each email
- Provides temporary password information and instructions for first login
- Includes links to tutorial videos for Google Classroom
- Supports CC and BCC functionality for administrative oversight
- Professionally formatted HTML email template

## Prerequisites
- Google Spreadsheet with a sheet named "users"
- The spreadsheet must contain the following columns:
  - Column A (1): Student name
  - Column C (3): Email address
  - Column G (7): Username for Google Classroom

## Usage Instructions

### Setup
1. Open your Google Spreadsheet
2. Go to Extensions > Apps Script
3. Copy and paste the script below into the Apps Script editor
4. Save the project with a descriptive name (e.g., "Vanguardia Email System")

### Script Code
```javascript
//Alumnos Primaria
function enviarEMAil() {
var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("users");
  //for (var i = 3; i <= 3; i++) {
  for (var i = 5; i <= 129; i++) {  
      var mail = sheet.getRange(i,3).getValue();
      var receiverName = sheet.getRange(i,1).getValue();
      var username = sheet.getRange(i,7).getValue();
      //var mail = sheet.getRange(i,8).getValue();
      var asunto = "Vanguardia: Registro Google Classroom - Alumnos";
      var mensaje = "";
      var html =  
          "<body>" + 
            "<p>Hola! "+ receiverName +"</p>" +
            "<p>Iniciamos el registro en Google Classroom para el Instituto de Vanguardia. </p>" +
            "<p>El usuario del alumno es: <b>"+ username +"</b> </p>" +
            "<p>y la clave temporal es: <b>'Vanguardia'</b> </p>" +
            "<p>Al iniciar sesión por primera vez va a solicitar cambiarla.</p>" +
            "<p>Para iniciar sesión puedes ingresar a <b> <a href='https://classroom.google.com'> https://classroom.google.com</a> (o en cualquier lugar de la plataforma google)</b>.</p>" +
            "<p>Les dejo estos video tutoriales: <a href='https://www.youtube.com/watch?v=CaCdjU0hbw4'> https://www.youtube.com/watch?v=CaCdjU0hbw4 </a> y <a href='https://www.youtube.com/watch?v=ChBL1Qx-PX8&list=PLbhVGsFX6U72bR_r4VBS_mWwEf0DTZk2M'> https://www.youtube.com/watch?v=ChBL1Qx-PX8&list=PLbhVGsFX6U72bR_r4VBS_mWwEf0DTZk2M </a>.</p>" +
            "<br /><br />" +
            "<p>! Con este usuario y clave, se puede acceder a todos los servicios de Google. Incluso bajar la App Google Classroom al celular</p>" +
            "<p> Cualquier duda me escriben a dpontoriero@institutovanguardia.edu.ar. Saludos!</p>" +
          "</body>"    
      var mensaje = "";
      var senderName = 'Vanguardia Classroom';
      MailApp.sendEmail({
        to: mail,
        cc: "nivelsecundario@institutovanguardia.edu.ar",
        bcc: "your-bcc-email@example.com", // Replace with your desired BCC email
        subject: asunto,
        htmlBody: html,
        name: senderName
      });
  }
}
```

### Running the Script
1. Click the "Run" button in the Apps Script editor to execute the script
2. Grant necessary permissions when prompted
3. The script will send emails to students listed in rows 5-129 of your spreadsheet

### Customization
- Modify the row range (`for (var i = 5; i <= 129; i++)`) to target specific students
- Update the email content in the HTML template as needed
- Change the CC and BCC email addresses to appropriate administrative contacts
- Modify the sender name by changing the `senderName` variable

## Important Notes
- The default temporary password is set to 'Vanguardia'
- Students will be prompted to change this password on first login
- The script includes contact information for technical support
- Tutorial videos are included to help students get started

## Permissions
This script requires the following permissions:
- Read access to your Google Spreadsheet
- Send emails on your behalf

## Support
For questions or assistance, please contact the system administrator at dpontoriero@institutovanguardia.edu.ar

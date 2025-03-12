//Alumnos Primaria
function enviarEMAil() {
var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("users");
  //for (var i = 3; i <= 3; i++) {
  for (var i = 5; i <= 129; i++) {  
      var mail = sheet.getRange(i,3).getValue();
      var receiverName = sheet.getRange(i,1).getValue();
      var username = sheet.getRange(i,7).getValue();
      //var mail = sheet.getRange(i,8).getValue();
      var asunto = "Nombre colegio: Registro Google Classroom - Alumnos";
      var mensaje = "";
      var html =  
          "<body>" + 
            "<p>Hola! "+ receiverName +"</p>" +
            "<p>Iniciamos el registro en Google Classroom para el Instituto. </p>" +
            "<p>El usuario del alumno es: <b>"+ username +"</b> </p>" +
            "<p>y la clave temporal es: <b>'Clave001'</b> </p>" +
            "<p>Al iniciar sesión por primera vez va a solicitar cambiarla.</p>" +
            "<p>Para iniciar sesión puedes ingresar a <b> <a href='https://classroom.google.com'> https://classroom.google.com</a> (o en cualquier lugar de la plataforma google)</b>.</p>" +
            "<p>Les dejo estos video tutoriales: <a href='https://www.youtube.com/watch?v=CaCdjU0hbw4'> https://www.youtube.com/watch?v=CaCdjU0hbw4 </a> y <a href='https://www.youtube.com/watch?v=ChBL1Qx-PX8&list=PLbhVGsFX6U72bR_r4VBS_mWwEf0DTZk2M'> https://www.youtube.com/watch?v=ChBL1Qx-PX8&list=PLbhVGsFX6U72bR_r4VBS_mWwEf0DTZk2M </a>.</p>" +
            "<br /><br />" +
            "<p>! Con este usuario y clave, se puede acceder a todos los servicios de Google. Incluso bajar la App Google Classroom al celular</p>" +
            "<p> Cualquier duda me escriben a eMail@admisnitrador. Saludos!</p>" +
          "</body>"    
      var mensaje = "";
      var senderName = 'Registro Classroom';
      MailApp.sendEmail({
        to: mail,
        cc: "mail@encopia.com",
        bcc: "your-bcc-email@example.com", // Replace with your desired BCC email
        subject: asunto,
        htmlBody: html,
        name: senderName
      });
  }
}

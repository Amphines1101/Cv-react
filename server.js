require('dotenv').config();
const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const nodemailer = require('nodemailer');

const app = express();
const PORT = process.env.PORT || 3001; 

app.use(cors());
app.use(express.json());

const buildPath = path.join(__dirname, 'build');
app.use(express.static(buildPath));

const filePath = path.join(__dirname, 'src', 'data', 'messages.json');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS
  }
});

function sendEmail(messageData) {
  const mailOptions = {
    from: process.env.MAIL_USER,
    to: process.env.MAIL_USER,
    subject: `Nouveau message de ${messageData.nom}`,
    text: `
Nom : ${messageData.nom}
Email : ${messageData.email}
Message : ${messageData.message}
    `
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Erreur d’envoi de mail :', error);
    } else {
      console.log('Email envoyé : ' + info.response);
    }
  });
}

app.post('/save-message', (req, res) => {
  const newMessage = req.body;
  console.log("Nouveau message reçu :", newMessage);

  fs.readFile(filePath, 'utf8', (err, data) => {
    let messages = [];
    if (err) {
      console.log("Erreur lecture fichier ou fichier non trouvé, création nouveau tableau messages");
    } else if (data) {
      try {
        messages = JSON.parse(data);
      } catch (parseErr) {
        console.error("Erreur parsing JSON :", parseErr);
        messages = [];
      }
    }

    messages.push(newMessage);
    sendEmail(newMessage);

    fs.writeFile(filePath, JSON.stringify(messages, null, 2), (err) => {
      if (err) {
        console.error('Erreur lors de la sauvegarde du message :', err);
        return res.status(500).json({ message: 'Erreur serveur' });
      }
      console.log("Message sauvegardé dans le fichier.");
      res.status(200).json({ message: 'Message enregistré avec succès' });
    });
  });
});

app.get('*', (req, res) => {
  res.sendFile(path.join(buildPath, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`✅ Serveur lancé : http://localhost:${PORT}`);
});

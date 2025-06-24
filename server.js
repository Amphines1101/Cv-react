const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());


const filePath = path.join(__dirname, 'src', 'data', 'messages.json');


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


app.listen(PORT, () => {
  console.log(` Serveur lancé : http://localhost:${PORT}`);
});

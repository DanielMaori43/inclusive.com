const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'public'))); // onde estão seus HTML/JS/CSS

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
app.get('/site', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html')); // Envia o arquivo 'index.html' localizado no mesmo diretório que o servidor
});

const express = require('express');
const mysql = require('mysql2');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const db = mysql.createConnection(
    {
      host: 'localhost',
      user: 'root',
      password: '',
      database: 'employees_db'
    },
    console.log(`Connected to the employees_db database.`)
);

inquirer.prompt([/*insert questions here*/]).then(answers => {
    db.query("SELECT * FROM department", (err, result) => {
        if(err) {
            res.status(500).json({
                success: false,
                error: err
            })
        }
        res.json({
            success: true,
            body: result
        })
    })
});



app.use((req, res) => {
    res.status(404).end();
  });
  
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
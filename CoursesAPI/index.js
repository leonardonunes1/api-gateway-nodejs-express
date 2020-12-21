const app = require('express')();
const ListCourses = [
    {
      "name": "Sistema para Internet",
      "description": "Curso de Sistema para internet"
    },
    {
      "name": "Sistema para Internet",
      "description": "Curso de Sistema para internet"
    },
    {
      "name": "Sistema para Internet",
      "description": "Curso de Sistema para internet"
      },
      {
        "name": "Sistema para Internet",
        "description": "Curso de Sistema para internet"
      },
  ]

app.get('/courses', (req, res) => res.send(ListCourses));


app.listen(3003, () => console.log(`Courses API listening on port 3003!`));
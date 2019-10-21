const express = require('express');
const router = express.Router();
const Tarea = require('../modelos/Tarea')

// Metodos de tarea, clase requerida desde mongoose
//    De clase
// tarea.remove({})
// tarea.find() Sería como un getAll()
// tarea.findById(id)
// tarea.update({_id: id}, req.body)
// ---------------------------
//    De instancia
// tarea.save()

router.get('/', (req, res) => {
  Tarea.find()
    .then(tareas => res.render('index', { tareas }))
    .catch(err => console.log(err));

})

// router.get('/:id', (req, res, next) => {
//     const {id} = req.params;
//     Heroe.findById(id)
//       .then(h => res.json(h))
//       .catch(e => console.log(e));
// });

router.post("/agregar", (req, res) => {
  const tarea = new Tarea(req.body);
  tarea.save()
    .then( msg => console.log(msg))
    .catch(err => console.log(err));
  res.redirect("/");
})
// router.post("/add", async (req, res) => { // Con async await
//   // console.log(new tarea(req.body));
//   const tarea = new tarea(req.body);
//   await tarea.save()
// })

router.get("/borrar/:miId", (req, res) =>{
  const { miId } = req.params;
  // await Tarea.remove({_id: myId});
  Tarea.remove({_id: miId})
    .then(msg => console.log(msg))
    .catch( err => console.log(err));
  res.redirect("/");
})

router.get("/completada/:id", (req, res) => {
  const {id} = req.params;
  Tarea.findById(id)
    .then(tarea => {
      tarea.estado = !tarea.estado;
      tarea.save();
    })
    .catch(err => console.log(err));
  res.redirect("/");
});

router.get("/editar/:id", (req, res)=> {
  const {id} = req.params;
  Tarea.findById(id)
    .then( tarea => res.render("edit", {tarea}))
    .catch( err => console.log(err));
});

router.post("/editar/:id", (req, res) =>{
  const {id} = req.params;
  console.log(req.body);
  Tarea.update({_id: id}, req.body)
    .then( msg => console.log(msg))
    .catch( err => console.log(err));
  res.redirect("/");
});


module.exports = router;

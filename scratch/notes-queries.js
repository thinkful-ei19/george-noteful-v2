'use strict';
const knex = require('../knex');

// knex.select(id)
//   .then(item => {
//     if (item) {
//       res.json(item);     
//     } else {
//       next();
//     }
//   })
//   .catch(err => next(err));


/*
  notes.find(noteId)
    .then(item => {
      if (item) {
        res.json(item);
      } else {
        next();
      }
    })
    .catch(err => next(err));
  */


// knex.select()
//   .from('notes')
//   .where('id', noteId)
//   .then(item => {
//     if (item) {
//       res.json(item);
//     } else {
//       next();
//     }
//   })
//   .catch(err => next(err));

/*
  notes.update(noteId, updateObj)
    .then(item => {
      if (item) {
        res.json(item);
      } else {
        next();
      }
    })
    .catch(err => next(err));
  */

/*
  notes.create(newItem)
    .then(item => {
      if (item) {
        res.location(`http://${req.headers.host}/notes/${item.id}`).status(201).json(item);
      } 
    })
    .catch(err => next(err));
  */

knex.select('id', 'title', 'content' )
  .from('notes')
  .where('id', 1016 )
  .del()
  .then(res => console.log(res));



/*
  notes.update(noteId, updateObj)
    .then(item => {
      if (item) {
        res.json(item);
      } else {
        next();
      }
    })
    .catch(err => next(err));
  */
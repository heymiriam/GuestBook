const express = require('express')
const fs = require('fs')
const path = require('path')

const router = express.Router()

const data = [
    {
        id:1, 
        note:'test1'
    },
]
router.get('/', (req,res,next) => {
    res.render('index', { notes: data, title: "Guestbook" })
})

router.get('/leave-note', (req,res,next) => {
    res.render('leave-note', { notes: data, title: "Leave a Note" })
})

router.get('/read-note', (req,res,next) => {
    res.render('read-note', { notes: data, title: "Read Notes" })
})

router.post('/leave-note', (req,res,next) => {
    data.push({
        id: Math.random(),
        note: req.body.note
    })

    fs.writeFile(path.join(__dirname, '..', 'notes.json'), JSON.stringify(data, null, 2), () => {
        res.status(302).redirect('/read-note')
    })
})

router.get('*', (req, res, next) => {
    res.status(404).render('404');
  });

module.exports = router
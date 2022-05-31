const routes = require('express').Router();
const multer = require('multer');
const multerConfig = require('./config/multer');

routes.get("/", (req, res) => {
    return res.send("main" );
});

routes.get("/teste", (req, res) => {
    return res.json({ hello: "Hakney" });
});

routes.post('/posts', multer(multerConfig).single('file'), (req, res) => {
    console.log(req.file);
    return res.json({ hello: req.file});
})

module.exports = routes;

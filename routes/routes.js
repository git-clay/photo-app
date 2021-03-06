var express = require('express'),
    app = express(),
    router = express.Router(),
    detectController = require('../controllers/detect.js'),
    landmarkController = require('../controllers/landmark.js'),
    imgurController = require('../controllers/imgur.js');


//api Routes

//detect
router.get('/api/detect', detectController.getApi);
router.post('/api/detect', detectController.postApi);
//landmark
router.get('/api/landmark', landmarkController.getLandmark)
router.post('/api/landmark', landmarkController.getApi)
// // create
router.post('/api/imgur', imgurController.getApi)
// router.post('/api/detect', detectController.create);

// // show
// router.get('/api/detect/:id', detectController.show);

// // update
// router.put('/api/detect/:id', detectController.update);

// // destroy
// router.delete('/api/detect/:id', detectController.destroy);

//Manager Routes

// index
// router.get('/api/managers', managersController.index);

// //create
// router.post('/api/managers/', managersController.create);

// //show
// router.get('/api/managers/:id', managersController.show);

// //update
// router.put('/api/managers/:id', managersController.update);

// // destroy
// router.delete('/api/managers/:id', managersController.destroy);

// //Song Routes



module.exports = router;
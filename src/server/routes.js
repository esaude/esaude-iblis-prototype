var router = require('express').Router();
var four0four = require('./utils/404')();
var data = require('./data');
var patientData = require('./routes/patient.js');

//people
router.get('/people', getPeople);
router.get('/person/:id', getPerson);

//patient
router.get('/patients', getPatients);
router.post('/patients', addPatient);
router.get('/patient/:nid', getPatient);

//tests

//tests
router.get('/tests', getTests);

router.get('/*', four0four.notFoundMiddleware);

module.exports = router;

//////////////
function getPeople(req, res, next) {
  res.status(200).send(data.people);
}

function getPatients(req, res, next) {

  res.status(200).send(patientData.getPatients());
}

function getTests(req, res, next) {
  res.status(200).send(data.tests);
}

function getPerson(req, res, next) {
  var id = req.params.id;
  var person = data.people.filter(function(p) {
    return p.id === id;
  })[0];

  if (person) {
    res.status(200).send(person);
  } else {
    four0four.send404(req, res, 'person ' + id + ' not found');
  }
}
/**
 *  Patient API
 */
 function getPatient(req, res, next) {
   var nid = req.params.nid;

   var response = patientData.getPatient(nid);
   res.status(200).send(response);
 }

 function addPatient(req, res, next) {
    console.error(req.body);
    var newPatient =
    {
      nid: req.body.nid,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      age: req.body.age,
      location: req.body.location
    };
    res.status(200).send(patientData.addPatient(newPatient));
 }

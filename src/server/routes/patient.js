/**
 *  TODO: Complete the utilities method exposure
 */
// var express = require('express');
// var fs = require('fs');
// var helper = require('../helpers');
// var datafile = './data/patient.json';
// var router = express.Router();
//
// /* GET, PUT and DELETE individual patient */
// router.route('/:id')
//   .get(function(req, res) {
//       console.log('Retrieving league ID: '+req.params.id);
//       var data = getPatientData();
//
//       post
//   }).
//
// function getPatientData() {
//     var data = fs.readFileSync(datafile, 'utf8');
//     return JSON.parse(data);
// }
//
// function savePatientData() {
//     fs.writeFile(datafile, JSON.stringfy(data, null, 4), function(err) {
//         if(err) {
//             console.error(err);
//         }
//     });
// }

var helper = require('../helpers');
var patientData = 'src/server/data/patient.json';

module.exports = {
  getPatients:getPatients,

  getPatient : getPatient ,
  addPatient: addPatient
  // savePatient: savePatient(),
  // deletePatient: deletePatient(),
};
function getPatients() {
  return helper.readData(patientData);
}

function getPatient(id) {
    var patients = helper.readData(patientData);
    var patient = helper.getItemById(patients, id);
    return patient;
}

function addPatient(newPatient) {
      var patients = helper.readData(patientData);

      patients.push(newPatient);
      console.log("##addPatientData()");
      helper.savePatientData(patientData, patients);
      
}

//const {fetchMyIP} = require('./iss');
//const {fetchCordsByIP} = require('./iss');
//const {fetchISSFlyOverTimes} = require('./iss');
const { nextISSTimesForMyLocation } = require('./iss');

/*fetchMyIP((error, ip) => {
  if (error) {
    console.log('Error fetching IP:', error);
  } else {
    console.log('IP Address:', ip);
  }
});*/



/*fetchCoordsByIP('162.245.144.188', (error, coordinates) => {
  if (error) {
    console.log("It didn't work!" , error);
    return;
  }

  console.log('It worked! Returned coordinates:' , coordinates);
});*/


//testObj = { latitude: '49.27670', longitude: '-123.13000' };

/*fetchISSFlyOverTimes(testObj, (error, data) => {
  if (error) {
    console.log("It didn't work!" , error);
    return;
  }

  console.log('It worked! Next sighting:' , data);
});*/


const printPassTimes = function(passTimes) {
  for (const pass of passTimes) {
    const datetime = new Date(0);
    datetime.setUTCSeconds(pass.risetime);
    const duration = pass.duration;
    console.log(`Next pass at ${datetime} for ${duration} seconds!`);
  }
};

nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log("It didn't work!", error);
  }
  // success, print out the deets!
  printPassTimes(passTimes);
});
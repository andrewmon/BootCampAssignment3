//This file holds any configuration variables we may need
//'config.js' is ignored by git to protect sensitive information, such as your database's username and password
//copy this file's contents to another file 'config.js' and store your MongoLab uri there

module.exports = {
  db: {
    uri: 'mongodb://andrewmon:test123@ds127994.mlab.com:27994/testclass'
  }
};

/* Now go to the JSONtoMongo.js file and include this file as a variable named 'config' with a require() */

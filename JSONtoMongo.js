'use strict';
/*
  Import modules/files you may need to correctly run the script.
  Make sure to save your DB's uri in the config file, then import it with a require statement!
 */
var fs = require('fs'),
    mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    Listing = require('./ListingSchema.js'),
    config = require('./config');

/* Connect to your database */
mongoose.connect(config.db.uri);
/*
  Instantiate a mongoose model for each listing object in the JSON file,
  and then save it to your Mongo database
 */
var entries = JSON.parse(fs.readFileSync('listings.json')).entries;

for (var i = 0; i < entries.length; i++)  {

  var listing = new Listing();

  //Saves different listing sections to DB
  listing.code = entries[i].code
  listing.name = entries[i].name
  listing.coordinates = entries[i].coordinates
  listing.address = entries[i].address

  //Throws error
  listing.save(function(err, listing) {
    if (err)
    return console.error(err);
  });
}

//Closes connection
mongoose.connection.close();

/*
  Once you've written + run the script, check out your MongoLab database to ensure that
  it saved everything correctly.
 */

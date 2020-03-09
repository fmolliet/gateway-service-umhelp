const { connect } = require("mongoose");

class Database {
  connect() {
    try{
      connect(process.env.STR_DATABASE, {
        useNewUrlParser: true,
        useUnifiedTopology: true
      });
    } catch(err){
      throw Error(err)
    }
  }
}

module.exports = new Database();

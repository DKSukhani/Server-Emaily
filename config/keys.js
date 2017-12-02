// this file with determine the enviornment in which the application is running and then throw the appropriate keys

if (process.env.NODE_ENV === 'production') {
  // if the production enviornment is running then the following command will be executed
  module.exports=require('./prod');

} else {
  // if the developmement enviornment is running then the following command will be executed
  module.exports=require('./dev');

};

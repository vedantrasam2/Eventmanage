const mongoose = require("mongoose");
// put your mongodb url! and then enter into admins panel and then create events, and also register!
mongoose
  .connect(
    "mongodb+srv://vedantrasam19:momdad@cluster0.mj3dwg8.mongodb.net/eventsDB?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  // .connect(
  //   "mongodb+srv://vinay:password12345@cluster0.l6vllqy.mongodb.net/?retryWrites=true&w=majority",
  //   {
  //     useNewUrlParser: true,
  //     useUnifiedTopology: true,
  //   }
  // )
  .then(() => {
    console.log(`Connection is succesfull in mongoose`);
  })
  .catch((e) => {
    console.log(e + "connection failed");
  });

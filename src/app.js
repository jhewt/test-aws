export class App {
  constructor() {
    this.message = 'Hello World!';
    this.AWS = window.AWS;
    this.AWS.config.region = 'us-west-2';
    this.s3 = new this.AWS.S3();
  }
  activate(params, routeConfig, navigationInstruction) {
    this.s3.createBucket({Bucket: 'i.dont.have.aws'}, (err, data)  => {

      if (err) {
        console.log(err);

        } else {

          let params = {Bucket: 'i.dont.have.aws', Key: 'I have no key', Body: 'Hello!'};

          this.s3.putObject(params, function(err, data) {

              if (err) {

                  console.log(err)

              } else {

                  console.log("Successfully uploaded data to myBucket/myKey");

              }

            });

        }

      });
  }
}

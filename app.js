const express = require('express');
const app = express();
const AWS = require('aws-sdk');


//Access aws Method1
const credentials = new AWS.SharedIniFileCredentials({profile: 'Enter_Profile_Name'}); //fetches creds from ~/.aws/credetials file
const sns = new AWS.SNS({credentials: credentials, region: 'us-east-1'});

//Access aws Method2
// const SESConfig = {
//     region: 'us-east-1',
//     accessKeyId: 'access_key_id',
//     secretAccessKey: 'access_secret_key',
// }
// AWS.config.update(SESConfig);
// const sns = new AWS.SNS();


const port = 3000;

app.use(express.json());

app.get('/status', (req, res) => res.json({status: "ok", sns: sns}));

//Add subscribe to Topic
app.post('/subscribe', (req, res) => {
    let params = {
        Protocol: 'EMAIL', 
        TopicArn: 'Topic_Arn',
        Endpoint: req.body.email
    };

    sns.subscribe(params, (err, data) => {
        if (err) {
            console.log(err);
        } else {
            console.log(data);
            res.send(data);
        }
    });
});

//Send message to Topic
app.post('/send', (req, res) => {
    let params = {
        Message: req.body.message,
        Subject: req.body.subject,
        TopicArn: 'Topic_Arn'
    };

    sns.publish(params, function(err, data) {
        if (err) {
            console.log(err, err.stack); 
            res.send(err);
        }
        else {
            console.log(data);
            res.send(data);
        }
    });
});


app.listen(port, () => console.log(`SNS App listening on port ${port}!`));


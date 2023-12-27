import {kafka} from "./client";


(async () => {
    const producer = kafka.producer();
    console.log('connecting to producer...');
    await producer.connect();
    console.log('connected to producer');

    await producer.send({
        topic: "user-type",
        messages: [
            {
                key: "user",
                value: JSON.stringify({user: "arun", type: "admin"})
            }
        ]
    });
})();

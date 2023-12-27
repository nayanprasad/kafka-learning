import {kafka} from "./client";



(async () => {
    const admin = kafka.admin();
    console.log('connecting to admin...');
    await admin.connect();
    console.log('connected to admin');
    await admin.createTopics({
        topics: [{
            topic: 'user-type',
            numPartitions: 2
        }]
    });

    await admin.disconnect();
})();

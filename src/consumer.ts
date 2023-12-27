import {kafka} from "./client";
import {KafkaMessage} from "kafkajs";

const group = process.argv[2]; // node consumer.js <group>

type MessageType = {
    topic: string,
    partition: number,
    message: any,
    heartbeat: any,
    pause: any,
}

(async () => {
    const consumer = kafka.consumer({groupId: group});
    console.log('connecting to consumer...');
    await consumer.connect();
    console.log('connected to consumer');

    await consumer.subscribe({topics: ["user-type"], fromBeginning: true});

    await consumer.run({
        eachMessage: async ({topic, partition, message, heartbeat, pause}: MessageType) => {
            console.log(`${group}: [${topic}]: PART:${partition}:`, message?.value.toString());
        },
    });

})();

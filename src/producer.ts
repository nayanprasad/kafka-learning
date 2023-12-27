import {kafka} from "./client";
import readLine from "readline";

const rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout,
});

async function init() {
    const producer = kafka.producer();
    console.log('connecting to producer...');
    await producer.connect();
    console.log('connected to producer');


    rl.setPrompt("> ");
    rl.prompt();

    rl.on('line', async (line) => {

        const [user, type] = line.split(',');

        await producer.send({
            topic: 'user-type',
            messages: [
                {
                    partition: type === "admin" ? 0 : 1,
                    key: 'user-details',
                    value: JSON.stringify({user: user, type: type})
                }
            ],
        });
    }).on('close', async () => {
        await producer.disconnect();
    });
}

init().catch((err) => {
    console.error(err);
});

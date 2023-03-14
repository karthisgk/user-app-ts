const { EventHubProducerClient } = require("@azure/event-hubs");
const fs = require("fs")



let sampleData = JSON.parse(fs.readFileSync("/Users/karthicksg/Documents/zoftsolutions/ocean_json/sample.json", "utf-8"))


async function main() {

    // Create a producer client to send messages to the event hub.
    const producer = new EventHubProducerClient(connectionString, eventHubName);

    // Prepare a batch of three events.
    const batch = await producer.createBatch();
    Array.from({ length: 1 }, (_, i) => {
        batch.tryAdd({
            body: sampleData
        });
    })

    // Send the batch to the event hub.
    await producer.sendBatch(batch);

    // Close the producer client.
    await producer.close();

    console.log("A batch of three events have been sent to the event hub");
}

main().catch((err) => {
    console.log("Error occurred: ", err);
});
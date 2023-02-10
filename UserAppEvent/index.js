const { asyncify, queue } = require("async");
const { BlobServiceClient } = require('@azure/storage-blob');

async function uploadBlob(entries) {
    const blobServiceClient = BlobServiceClient.fromConnectionString(process.env.AzureWebJobsStorage);
    const container = blobServiceClient.getContainerClient("bundles");
    const fileName = `Ocean-eReferral-${new Date().getTime()}.json`;
    return await container.getBlockBlobClient(fileName).upload(entries, entries.length);
}

const eventHubTrigger = async function (context, events) {
    context.log(`Eventhub trigger function called for message array ${events}`);
    const job = queue(asyncify(async (task) =>  {
        try {
            const data = JSON.parse(task)
            data.changes = "new Changes"
            let result = await uploadBlob(JSON.stringify(data, null, 4))
            context.log(result)
        } catch (err) {
            console.log("errr")
            context.log(err)
        }
    }))

    events.forEach((message, index) => {
        job.push(message)
    });

    job.drain(() => {
        context.log("All jobs are completed")
    })
};

module.exports = eventHubTrigger
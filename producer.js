import { Queue } from "bullmq";

const notificationQueue = new Queue("email-queue", {
    connection: {
        host: "localhost",
        port: "6379"
    }
})

async function addJobs() {
    const res = await notificationQueue.add("myJobName", { foo: "bar" });
    console.log('job added to queue', res.id)
}

await addJobs();

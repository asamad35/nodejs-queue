import { Worker } from "bullmq";

const worker = new Worker("email-queue", async (job) => {
    console.log(`processing job, id: ${job.id}`)
    await new Promise((res, rej) => setTimeout(() => res(), 1000 * 5))
    console.log(`job successfully processed, id: ${job.id}`)
})
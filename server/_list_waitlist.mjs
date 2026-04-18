import 'dotenv/config';
import mongoose from 'mongoose';
import WaitlistEntry from './src/models/WaitlistEntry.js';

await mongoose.connect(process.env.MONGODB_URI);
const rows = await WaitlistEntry.find().sort({createdAt: -1}).limit(20).lean();
console.log(`Total entries (showing up to 20, newest first): ${rows.length}`);
console.log('---');
for (const r of rows) {
  console.log(JSON.stringify(r, null, 2));
  console.log('---');
}
await mongoose.disconnect();

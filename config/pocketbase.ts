import PocketBase from "pocketbase";

const pb = new PocketBase(process.env.NEXT_PUBLIC_POCKETBASE_URL);
// const pb = new PocketBase(process.env.POCKETBASE_URL);

export default pb;

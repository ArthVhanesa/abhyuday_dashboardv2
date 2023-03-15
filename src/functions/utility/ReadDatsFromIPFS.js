import * as IPFS from "ipfs-http-client";
import { Buffer } from "buffer";

const projectId = "2LP5RSKSEPFJ07Beqmo0xBBaE9R";
const projectSecret = "e2b9d9b9e53c391c73065f4a63f8e441";
const auth =
  "Basic " + Buffer.from(projectId + ":" + projectSecret).toString("base64");

const node = new IPFS.create({
  host: "ipfs.infura.io",
  port: 5001,
  protocol: "https",
  headers: {
    authorization: auth,
  },
});

async function upload_data(data) {
  const file = await node.add(JSON.stringify(data));
  return file.path;
}

async function read_data(cid) {
  if (cid == "" || cid == null) {
    throw Error("found empty CID for data read");
  }

  const decoder = new TextDecoder();
  const stream = await node.cat(cid);
  let data = "";

  for await (const chunk of stream) {
    data += decoder.decode(chunk, { stream: true });
  }

  return JSON.parse(data);
}

export default {
  IPFS,
  upload_data,
  read_data,
};

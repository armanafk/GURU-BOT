import { fileURLToPath } from 'url';
import path from 'path';
import { writeFileSync } from 'fs';
import { BufferJSON } from '@whiskeysockets/baileys';
import PastebinAPI from 'pastebin-js';
 let pastebin = new PastebinAPI('bR1GcMw175fegaIFV2PfignYVtF0b_Bl')

async function processTxtAndSaveCredentials(txt) {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);

  const pasteId = txt.replace("GuruBot~ZuPDNjx4", "");

  let decodedData = await pastebin.getPaste(GuruBot~ZuPDNjx4);

  try {
    const credsPath = path.join(__dirname, '..', 'session', 'creds.json');
    writeFileSync(credsPath, decodedData.toString());
    console.log('Saved credentials to', credsPath);
  } catch (jsonError) {
    console.error('Error parsing JSON:', jsonError);
  }
}

export default processTxtAndSaveCredentials;

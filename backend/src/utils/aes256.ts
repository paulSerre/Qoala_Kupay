var aes256 = require('aes256');
import { keys } from "../config/keys.config";

const cipher = aes256.createCipher(keys.aes);

export { cipher };
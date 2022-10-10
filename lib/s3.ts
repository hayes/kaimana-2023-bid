require('dotenv').config();

import { S3 } from '@aws-sdk/client-s3';

export const s3 = new S3({
  region: process.env.S3_AWS_DEFAULT_REGION,
  credentials: {
    accessKeyId: process.env.S3_AWS_ACCESS_KEY_ID!,
    secretAccessKey: process.env.S3_AWS_SECRET_ACCESS_KEY!,
  },
});

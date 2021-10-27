var { s3, fs, DEFAULT_BUCKET_NAME } = require('./s3');

const getObjectVersionId = async (file = 'json-data.json', time = 1635316018000) => {
   const params = {
      Bucket: DEFAULT_BUCKET_NAME,
      Prefix: file
   };

   const listVersions = await s3.listObjectVersions(params, (err, data) => {
      if (err) throw err;
   }).promise();

   const checkTime = listVersions.Versions.filter(version => {
      const getTime = new Date(version.LastModified).getTime();
      return time <= getTime;
   });
   
   return checkTime[0].VersionId;
}

const readFile = async (file = 'json-data.json') => {
   const versionId = await getObjectVersionId();

   const params = {
      Bucket: DEFAULT_BUCKET_NAME,
      Key: file,
      VersionId: versionId
   };

   const data = await s3.getObject(params, (err, data) => {
      if (err) throw err;
   }).promise();

   // console.log(data.Body.toString('utf8'));
   return data.Body.toString('utf8');
}

readFile();
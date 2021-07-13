const fs = require('fs')
const path = require('path')
const uploadFile = require('./s3_upload_file')

const testUpload = () => {
   const filePath = path.resolve(__dirname, 'test-image.png')
   const fileStream = fs.createReadStream(filePath)
   const now = new Date()
   const fileName = `test-image-${now.toISOString()}.png`
   uploadFile(fileStream, fileName).then((response) => {
      console.log(":)")
      console.log(response)
   }).catch((err) => {
      console.log(":|")
      console.log(err)
   })
}

testUpload()
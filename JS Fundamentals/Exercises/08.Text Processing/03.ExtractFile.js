function extractFile(input) {
    
  let extracted = input.split("\\");
  let fileName = extracted[extracted.length - 1].split(".");
  let extension = fileName.pop();

  console.log(`File name: ${fileName.join(".")}`);
  console.log(`File extension: ${extension}`);
}
extractFile("C:\\Internal\\training-internal\\Template.pptx");
extractFile("C:\\Projects\\Data-Structures\\LinkedList.cs");

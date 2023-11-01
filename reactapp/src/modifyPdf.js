import {PDFDocument} from 'pdf-lib';
/*
  pdf-lib library docs: https://github.com/Hopding/pdf-lib
  Used this as a base to modify the Acord25.pdf
*/

/*
  ModifyPdf async function that picks up the inputValue useState() data from Form.js
  to then draw that text to the PDF. This is an async function as we need to 
  fetch the PDF file from the folder on localhost:3000
*/

const ModifyPdf = async(inputValue) => {
  
  // pickup Acord25.pdf from the public folder 
  const PDF_FILE_URL = 'http://localhost:3000/Acord25.pdf'

  // fetch the file, set it to an arrayBuffer
  const existingPdfBytes = await fetch(PDF_FILE_URL).then(res => res.arrayBuffer())

  // Load PDFDocument from the above arrayBuffer
  const pdfDoc = await PDFDocument.load(existingPdfBytes)

  // Making sure we are looking at the correct page to modify. Probably not needed for a 1-page PDF
  const pages = pdfDoc.getPages()
  const firstPage = pages[0]

  /*
      I was able to add a field to the PDF doc using the logic below, but
      the field would then be editable. I ended up removing the logic
      and just taking the form input and putting it directly on the document
      in the location I chose (Certificate Number).

      const { width, height } = firstPage.getSize()
      const certificateNumberField = form.createTextField('certNum')

      certificateNumberField.setText('Certificate Number')
      certificateNumberField.addToPage(firstPage, { x: width / 3 + 77, height / 2 + 127 })

  */

  /*
      I wasn't able to capture the text fields from this PDF using pdf-lib,
      though I do understand how to access the fields in a PDF using this library.

      Not sure if there was a formatting issue with this PDF that was preventing me
      from being able to access the fields on the document.

      I also tried opening up the PDF in Adobe Acrobat Reader and the
      'Certificate Number' field I wanted to add the user input to wasn't
      accesible/editable. See below.

  */

  
  // attempt to capture fields from the PDF Doc, but pdf-lib isnt seeing any set fields in Acord25.pdf
  
  // get form containing the fields on the PDF doc
  let form = pdfDoc.getForm()
  console.log(form) // this returns the form object, 'dirtyFields' is an empty array

  // get fields from the above form
  let fields = pdfDoc.getForm().getFields()
  console.log(fields) // this returns an empty array, see in browser web tools
  fields = fields.map((f) => f.getName())
  console.log(fields) // this also returns an empty array, see in browser web tools

  // getting width/height of PDF to determine where to put user input
  const { width, height } = firstPage.getSize()


  // Drawing the input value from Form.js onto the page in the 'Certificate Number' location
  // inputValue passed in as a Prop from the Form.js file
  firstPage.drawText(inputValue, {
    x: width / 3 + 77,
    y: height / 2 + 127,
    size: 8,
  })

  // Converting the PDFDocument object to bytes for PDF converting
  const pdfBytes = await pdfDoc.save()

  // This part took me a while to figure out
  // Need to create a blob pdf object to then load the updated PDF
  var blob = new Blob([pdfBytes], {type: "application/pdf"});
  var url = URL.createObjectURL(blob);
  window.open(url);
}

export default ModifyPdf;
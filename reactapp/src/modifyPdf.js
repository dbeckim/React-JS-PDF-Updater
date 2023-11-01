import {PDFDocument} from 'pdf-lib';

  const ModifyPdf = async(pdfId) => {

    const PDF_FILE_URL = 'http://localhost:3000/Acord25.pdf'
    const existingPdfBytes = await fetch(PDF_FILE_URL).then(res => res.arrayBuffer())

    const pdfDoc = await PDFDocument.load(existingPdfBytes)
    //const helveticaFont = await pdfDoc.embedFont(StandardFonts.Helvetica)

    const pages = pdfDoc.getPages()
    const firstPage = pages[0]
    const { width, height } = firstPage.getSize()
    firstPage.drawText(pdfId, {
      x: width / 3 + 77,
      y: height / 2 + 127,
      size: 8,
    })

    const pdfBytes = await pdfDoc.save()

    var blob = new Blob([pdfBytes], {type: "application/pdf"});
    var url = URL.createObjectURL(blob);
    window.open(url);
  }

export default ModifyPdf;
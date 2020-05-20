import { Component, h } from "@stencil/core";
import pdfjsLib from "pdfjs-dist";
// import pdfjsViewer from "../../../node_modules/pdfjs-dist/web/pdf_viewer";
// import mobileViewer from "./mobile-viewer";


@Component({
  tag: "genie-pdf",
  styleUrl: "genie-pdf.scss",
  assetsDirs: ['./static', './images']
})
export class GeniePDF {

  componentWillLoad() {
    pdfjsLib.GlobalWorkerOptions.workerSrc = "build/js/pdf.worker.min.js";
  }
  async componentDidLoad() {
    console.log('pdfjsLib :>> ', pdfjsLib);
    const loadingTask = pdfjsLib.getDocument("/build/static/helloworld.pdf");
    const pdf = await loadingTask.promise;
  
    // Load information from the first page.
    const page = await pdf.getPage(1);
  
    const scale = 1;
    const viewport = page.getViewport(scale);
  
    // Apply page dimensions to the <canvas> element.
    const canvas = document.getElementById("pdf") as HTMLCanvasElement;
    const context = canvas.getContext("2d");
    canvas.height = viewport.height;
    canvas.width = viewport.width;
  
    // Render the page into the <canvas> element.
    const renderContext = {
      canvasContext: context,
      viewport: viewport
    };
    await page.render(renderContext);
    console.log("Page rendered!");
  }


  pdfPath: '../../static/helloworld.pdf';

  render() {
    this.pdfPath
    return (
      <div>
          <canvas id="pdf"></canvas>
      </div>
    );
  }
}

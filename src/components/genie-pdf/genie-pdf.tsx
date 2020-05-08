import { Component, h } from "@stencil/core";
import pdfjsLib from "pdfjs-dist";

@Component({
  tag: "genie-pdf",
  styleUrl: "genie-pdf.scss"
})
export class GeniePDF {



  componentWillLoad() {
    // Setting worker path to worker bundle.
    pdfjsLib.GlobalWorkerOptions.workerSrc =
      "../../build/webpack/pdf.worker.bundle.js";
  }


  pdfPath: '../../static/helloworld.pdf';

  render() {
    this.pdfPath
    return (
      <div>
      </div>
    );
  }
}

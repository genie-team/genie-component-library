import { Component, h, Prop } from "@stencil/core";

/**
 * @part block - Span block of the stripe
 */

@Component({
  tag: "genie-stripe",
  styleUrl: "genie-stripe.scss",
  shadow: true
})
export class GenieStripe {
	  /**
   * Number of blocks in the stripe
   */
  @Prop() numBlocks: number = 5;

  render() {
    let spans = [];
    for (let i = 0; i < this.numBlocks; i++) {
      spans.push(<span part="block"></span>);
    }
    return (
      <div>
        {spans.map(span => span)}
      </div>
    );
  }
}

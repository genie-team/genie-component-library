import { Component, Prop, h, Listen } from "@stencil/core";

/**
 * @slot - Content is placed between the heading and text
 * @slot start - Content is placed above heading
 * @slot end - Content is placed after the text
 *
 * @part card - Main card wrapper
 * @part card-heading - Card Heading
 * @part card-text - Card Text
 * @part card-link - Card Link
 */
@Component({
  tag: "genie-card",
  styleUrl: "genie-card.scss",
  shadow: true
})
export class GenieCard {
  @Prop() url: string;

  @Prop() heading: string;

  @Prop() text: string;
  /**
   * If url provided and true the whole card will be a link
   */
  @Prop() cardIsLink: boolean = true;

  @Listen("click", { capture: true })
  handleClick(ev) {
    if (this.cardIsLink && this.url) {
      location.href = this.url;
      ev.preventDefault();
    }
  }

  render() {
    let link: string;
    if (this.url) {
      link = <a aria-label={this.heading} part="card-link" href={this.url}></a>;
    }
    return (
      <div
        part="card"
        class={{
          "has-link": !!this.url,
          "card-is-link": !!this.cardIsLink && !!this.url
        }}
      >
        <slot name="start"></slot>
        <h3 part="card-heading">{this.heading}</h3>
        <slot></slot>
        <p part="card-text">{this.text}</p>
        <slot name="end"></slot>
        {link}
      </div>
    );
  }
}

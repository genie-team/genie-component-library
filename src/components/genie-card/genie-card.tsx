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

  /**
   * Open link in new window
   */
  @Prop() newWindow: boolean = false;

  @Listen("click")
  handleClick(ev) {
		if(ev.target.tagName.toLowerCase() !== 'a') {
			if (this.cardIsLink && this.url) {
				if (this.newWindow) {
					window.open(this.url);
				} else {
					location.href = this.url;
				}
				ev.preventDefault();
			}
		}
  }

  render() {
    let link: string;
    if (this.url) {
      const target = this.newWindow ? "_blank" : "_self";
      link = (
        <a
          target={target}
          aria-label={this.heading}
          part="card-link"
          href={this.url}
        >
					<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'><title>ionicons-v5-o</title><path d='M200.66,352H144a96,96,0,0,1,0-192h55.41' style={{fill:'none','stroke-linecap':'round','stroke-linejoin':'round','stroke-width':'48px'}}/><path d='M312.59,160H368a96,96,0,0,1,0,192H311.34' style={{fill:'none','stroke-linecap':'round','stroke-linejoin':'round','stroke-width':'48px'}}/><line x1='169.07' y1='256' x2='344.93' y2='256' style={{fill:'none','stroke-linecap':'round','stroke-linejoin':'round','stroke-width':'48px'}}/></svg>
				</a>
      );
    }
    return [
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
    ];
  }
}

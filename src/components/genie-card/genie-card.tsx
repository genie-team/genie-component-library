import { Component, Prop, h, Host } from "@stencil/core";
import { openURL } from "../../utils/utils";

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
  @Prop() heading: string;

  @Prop() text: string;

  /**
   * Don't alter style on hover
   */
  @Prop() noHover: boolean = false;

  /**
   * If `true`, a button tag will be rendered and the card will be tappable.
   */
  @Prop() button = false;

  /**
   * The type of the button. Only used when an `onclick` or `button` property is present.
   */
  @Prop() type: "submit" | "reset" | "button" = "button";

  /**
   * If `true`, the user cannot interact with the card.
   */
  @Prop() disabled = false;

  /**
   * This attribute instructs browsers to download a URL instead of navigating to
   * it, so the user will be prompted to save it as a local file. If the attribute
   * has a value, it is used as the pre-filled file name in the Save prompt
   * (the user can still change the file name if they want).
   */
  @Prop() download: string | undefined;

  /**
   * Contains a URL or a URL fragment that the hyperlink points to.
   * If this property is set, an anchor tag will be rendered.
   */
  @Prop() href: string | undefined;

  /**
   * Specifies the relationship of the target object to the link object.
   * The value is a space-separated list of [link types](https://developer.mozilla.org/en-US/docs/Web/HTML/Link_types).
   */
  @Prop() rel: string | undefined;

  /**
   * Specifies where to display the linked URL.
   * Only applies when an `href` is provided.
   * Special keywords: `"_blank"`, `"_self"`, `"_parent"`, `"_top"`.
   */
  @Prop() target: string | undefined;

  render() {
    let link: string;
    const { href, button, heading } = this;
    const TagType = button
      ? href === undefined
        ? "button"
        : "a"
      : ("div" as any);
    const attrs =
      TagType === "button"
        ? { type: this.type }
        : TagType === "a"
        ? {
            download: this.download,
            href: this.href,
            rel: this.rel,
						target: this.target,
						onClick: (ev: Event) => openURL(href, ev)

          }
        : {};

    if (href) {
      const linkAttrs = {
        download: this.download,
        href: this.href,
        rel: this.rel,
        target: this.target
      };
      link = (
        <a
          onClick={(ev: Event) => openURL(href, ev)}
          {...linkAttrs}
          aria-label={heading}
          part="card-link"
          class="card-link"
          href={this.href}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <title>ionicons-v5-o</title>
            <path
              d="M200.66,352H144a96,96,0,0,1,0-192h55.41"
              style={{
                fill: "none",
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                "stroke-width": "48px"
              }}
            />
            <path
              d="M312.59,160H368a96,96,0,0,1,0,192H311.34"
              style={{
                fill: "none",
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                "stroke-width": "48px"
              }}
            />
            <line
              x1="169.07"
              y1="256"
              x2="344.93"
              y2="256"
              style={{
                fill: "none",
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                "stroke-width": "48px"
              }}
            />
          </svg>
        </a>
      );
    }

    return (
      <Host
        part="card"
        class={{
          "has-link": !!this.href,
          "card-is-link": !!this.button,
          "no-hover": this.noHover
        }}
      >
        <TagType
          {...attrs}
          class="card-native"
          disabled={this.disabled}
        >
          <slot name="start"></slot>
          <h3 part="card-heading">{this.heading}</h3>
          <slot></slot>
          <p part="card-text">{this.text}</p>
          <slot name="end"></slot>
          {link}
        </TagType>
      </Host>
    );
  }
}

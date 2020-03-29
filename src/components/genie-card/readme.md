# genie-card

A simple card with link icon.

Inspired by [A PEN BY Ahmed Nasr](https://codepen.io/ahmedhosna95/pen/KKpvNGY)


<!-- Auto Generated Below -->


## Properties

| Property   | Attribute  | Description                                                                                                                                                                                                                                                                               | Type                              | Default     |
| ---------- | ---------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------- | ----------- |
| `button`   | `button`   | If `true`, a button tag will be rendered and the card will be tappable.                                                                                                                                                                                                                   | `boolean`                         | `false`     |
| `disabled` | `disabled` | If `true`, the user cannot interact with the card.                                                                                                                                                                                                                                        | `boolean`                         | `false`     |
| `download` | `download` | This attribute instructs browsers to download a URL instead of navigating to it, so the user will be prompted to save it as a local file. If the attribute has a value, it is used as the pre-filled file name in the Save prompt (the user can still change the file name if they want). | `string`                          | `undefined` |
| `heading`  | `heading`  |                                                                                                                                                                                                                                                                                           | `string`                          | `undefined` |
| `href`     | `href`     | Contains a URL or a URL fragment that the hyperlink points to. If this property is set, an anchor tag will be rendered.                                                                                                                                                                   | `string`                          | `undefined` |
| `noHover`  | `no-hover` | Don't alter style on hover                                                                                                                                                                                                                                                                | `boolean`                         | `false`     |
| `rel`      | `rel`      | Specifies the relationship of the target object to the link object. The value is a space-separated list of [link types](https://developer.mozilla.org/en-US/docs/Web/HTML/Link_types).                                                                                                    | `string`                          | `undefined` |
| `target`   | `target`   | Specifies where to display the linked URL. Only applies when an `href` is provided. Special keywords: `"_blank"`, `"_self"`, `"_parent"`, `"_top"`.                                                                                                                                       | `string`                          | `undefined` |
| `text`     | `text`     |                                                                                                                                                                                                                                                                                           | `string`                          | `undefined` |
| `type`     | `type`     | The type of the button. Only used when an `onclick` or `button` property is present.                                                                                                                                                                                                      | `"button" or "reset" or "submit"` | `"button"`  |


## Slots

| Slot      | Description                                    |
| --------- | ---------------------------------------------- |
|           | Content is placed between the heading and text |
| `"end"`   | Content is placed after the text               |
| `"start"` | Content is placed above heading                |


## Shadow Parts

| Part             | Description       |
| ---------------- | ----------------- |
| `"card"`         | Main card wrapper |
| `"card-heading"` | Card Heading      |
| `"card-link"`    | Card Link         |
| `"card-text"`    | Card Text         |


## CSS Custom Properties

| Name                             | Description                                     |
| -------------------------------- | ----------------------------------------------- |
| `--a-border-radius`              | Border radius of the anchor                     |
| `--border-radius`                | Border radius of the card                       |
| `--color-accent`                 | The accent color                                |
| `--color-background`             | The background color                            |
| `--color-primary`                | The main color                                  |
| `--heading-color-override`       | Manually set the heading color when not hovered |
| `--heading-color-override-hover` | Manually set the heading color when hovered     |
| `--heading-font-size`            | Heading font size                               |
| `--text-color-override`          | Manually set text color when not hovered        |
| `--text-color-override-hover`    | Manually set text color when hovered            |
| `--text-font-size`               | Text font size                                  |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*

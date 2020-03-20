# genie-card

A simple card with link icon.

Inspired by [A PEN BY Ahmed Nasr](https://codepen.io/ahmedhosna95/pen/KKpvNGY)


<!-- Auto Generated Below -->


## Properties

| Property     | Attribute      | Description                                            | Type      | Default     |
| ------------ | -------------- | ------------------------------------------------------ | --------- | ----------- |
| `cardIsLink` | `card-is-link` | If url provided and true the whole card will be a link | `boolean` | `true`      |
| `heading`    | `heading`      |                                                        | `string`  | `undefined` |
| `newWindow`  | `new-window`   | Open link in new window                                | `boolean` | `false`     |
| `text`       | `text`         |                                                        | `string`  | `undefined` |
| `url`        | `url`          |                                                        | `string`  | `undefined` |


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

| Name                  | Description               |
| --------------------- | ------------------------- |
| `--border-radius`     | Border radius of the card |
| `--color-accent`      | The accent color          |
| `--color-background`  | The background color      |
| `--color-primary`     | The main color            |
| `--heading-font-size` | Heading font size         |
| `--text-font-size`    | Text font size            |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*

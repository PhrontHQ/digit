/**
 * @module "digit/ui/text.mod"
 */
var MontageText = require("mod/ui/text.mod").Text;

/**
 * ![Text](https://raw.github.com/montagejs/digit/master/ui/text.mod/screenshot.png)
 *
 * The Text component can be used for any kind of dynamic text.
 *
 * ### How to use
 *
 * ```json
 * "text": {
 *     "prototype": "digit/ui/text.mod",
 *     "properties": {
 *         "element": {"#": "text"}
 *     }
 * }
 * ```
 *
 * ```html
 * <span data-montage-id="text"></span>
 * ```
 *
 * ### Customizing with CSS
 * * `.digit-Text` - The Text element
 *
 * ```css
 * .digit-Text {
 *     color: red;
 * }
 * ```
 * @class Text
 * @extends external:Text
 */
exports.Text = MontageText.specialize(/** @lends Text */ {
    hasTemplate: {
        value: true
    },

    constructor: {
        value: function Text() {
            this.super();
            this.classList.add("digit-Text");
        }
    }
});

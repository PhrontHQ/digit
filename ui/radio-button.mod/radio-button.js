/**
 * @module "digit/ui/radio-button.mod"
 */
var AbstractRadioButton = require("montage/ui/base/abstract-radio-button").AbstractRadioButton;

/**
 * ![RadioButton](https://raw.github.com/montagejs/digit/master/ui/radio-button.mod/screenshot.png)
 *
 * ### How to use
 *
 * ```json
 * "radio": {
 *     "prototype": "digit/ui/radio-button.mod",
 *     "properties": {
 *         "element": {"#": "radio"},
 *         "value": 1
 *     }
 * }
 * ```
 *
 * ```html
 * <span data-montage-id="radio"></span>
 * ```
 *
 * ### Customizing with CSS
 *
 * * `.digit-RadioButton` - The radio button element
 *
 * ```css
 * .digit-RadioButton {
 *     border-color: blue;
 * }
 * ```
 * @class RadioButton
 * @extends external:AbstractRadioButton
 */
exports.RadioButton = AbstractRadioButton.specialize(/** @lends RadioButton */{
    constructor: {
        value: function RadioButton() {
            this.super();
        }
    }
});

/**
 * @module "digit/ui/number-field.mod"
 */
var AbstractNumberField = require("mod/ui/base/abstract-number-field").AbstractNumberField;
/**
 * ![NumberField](https://raw.github.com/montagejs/digit/master/ui/number-field.mod/screenshot.png)
 *
 * The Number Field component wraps an HTML `<input type="number">` element and adds a plus and minus stepper button.
 *
 * ### How to use
 *
 * ```json
 * "number": {
 *     "prototype": "digit/ui/number-field.mod",
 *     "properties": {
 *         "element": {"#": "number"},
 *         "value": 0
 *     }
 * }
 * ```
 *
 * ```html
 * <input data-mod-id="number" type="number">
 * ```
 *
 * ### Customizing with CSS
 *
 * * `.digit-NumberField` - The NumberField wrapper
 * * `.digit-NumberField-input` - The actual input for the numbers
 * * `.digit-NumberField-minus` - The minus button
 * * `.digit-NumberField-plus` - The plus button
 *
 * ```css
 * .digit-NumberField-input {
 *     width: 100px;
 * }
 * ```
 * @class NumberField
 * @extends external:AbstractNumberField
 */
exports.NumberField = AbstractNumberField.specialize(/** @lends NumberField */{
    constructor: {
        value: function NumberField() {
            this.super();
        }
    }
});

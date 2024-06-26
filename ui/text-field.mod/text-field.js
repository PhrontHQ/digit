/**
 * @module "digit/ui/text-field.mod"
 */
var AbstractTextField = require("mod/ui/base/abstract-text-field").AbstractTextField;
/**
 * ![TextField](https://raw.github.com/montagejs/digit/master/ui/text-field.mod/screenshot.png)
 *
 * The TextField component wraps an HTML `<input type="text">` element.
 *
 * ### How to use
 *
 * ```json
 * "textField": {
 *     "prototype": "digit/ui/text-field.mod",
 *     "properties": {
 *         "element": {"#": "textField"}
 *     }
 * }
 * ```
 *
 * ```html
 * <input data-mod-id="textField" type="text">
 * ```
 *
 * ### Customizing with CSS
 * * `.digit-TextField` - The TextField element
 *
 * ```css
 * .digit-TextField {
 *     border-color: blue;
 * }
 *  ```
 * @class TextField
 * @extends external:AbstractTextField
 */
exports.TextField = AbstractTextField.specialize(/** @lends TextField */{

    hasTemplate: {
        value: true
    },

    constructor: {
        value: function TextField() {
            this.super();
        }
    }
});

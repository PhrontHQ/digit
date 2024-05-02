/**
 * @module "digit/ui/checkbox.mod"
 */
var AbstractCheckbox = require("mod/ui/base/abstract-checkbox").AbstractCheckbox;
/**
 * ![Checkbox](https://raw.github.com/montagejs/digit/master/ui/checkbox.mod/screenshot.png)
 *
 * ### How to use
 *
 * ```json
 * "checkbox": {
 *     "prototype": "digit/ui/checkbox.mod",
 *     "properties": {
 *         "element": {"#": "checkbox"}
 *     }
 * }
 * ```
 *
 * ```html
 * <span data-montage-id="checkbox"></span>
 * ```
 *
 * ### Customizing with CSS
 *
 * * `.digit-Checkbox` - The checkbox element
 *
 * ```css
 * .digit-Checkbox {
 *     border-color: blue;
 * }
 * ```
 *
 * @class Checkbox
 * @extends external:AbstractCheckbox
 */
exports.Checkbox = AbstractCheckbox.specialize(/** @lends Checkbox */{
    constructor: {
        value: function Checkbox() {
            this.super();
        }
    }
});

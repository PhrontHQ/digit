/**
    @module "ui/title.mod"
*/
var MontageText = require("montage/ui/text.mod").Text;

/**
    Description TODO
    @class module:"ui/title.mod".Title
    @extends module:montage/ui/component.Component
*/
exports.Title = MontageText.specialize(/** @lends module:"ui/title.mod".Title# */ {
    hasTemplate: {
        value: true
    },

    constructor: {
        value: function Title() {
            this.super();
            this.classList.add("digit-Title");
        }
    }
});

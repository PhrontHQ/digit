/**
    @module "ui/badge.mod"
*/
var MontageText = require("mod/ui/text.mod").Text;

/**
    Description TODO
    @class module:"ui/badge.mod".Badge
    @extends module:mod/ui/component.Component
*/
exports.Badge = MontageText.specialize(/** @lends module:"ui/badge.mod".Badge# */ {
    hasTemplate: {
        value: true
    },

    constructor: {
        value: function Badge() {
            this.super();
            this.classList.add("digit-Badge");
        }
    },

    value: {
        set: function(value) {
            value = parseInt(value, 10);
            Object.getOwnPropertyDescriptor(MontageText.prototype, "value").set.call(this, value);
        },

        get: function() {
            return Object.getOwnPropertyDescriptor(MontageText.prototype, "value").get.call(this);
        }
    }
});

const { Schema, model } = require("mongoose");

const PrLineItemsSchema = new Schema(
  {
    suppliers: [{ type: Number }],
    custOrgId: { type: Number },
    purchaseRequestId: { type: Number },
  },

  { timestamps: true }
);

const PrLineItems = model("PrLineItems", PrLineItemsSchema);
module.exports = { PrLineItems };

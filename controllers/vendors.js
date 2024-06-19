const { PrLineItems } = require("../models/PrLineItems.model");
const { VendorUsers } = require("../models/VendorUsers.model");

exports.get_vendors = async (req, res) => {
  try {
    console.log("dsfas");
    const { prId, custOrgId } = req.query;

    if (!prId) {
      return res.status(500).json({ status: false, message: "Pr id mising!!" });
    }
    
    
    if (!custOrgId) {
      return res.status(500).json({ status: false, message: "custOrgId id mising!!" });
    }

    if (prId && custOrgId) {
      const vendors = await PrLineItems.find({ purchaseRequestId: prId, custOrgId });

      const vendorsmapping = {};
      if (vendors.length) {
        vendors.forEach((item) => {
          item.suppliers.forEach((id) => {
            if (!vendorsmapping[id]) {
              vendorsmapping[Number(id)] = id;
            }
          });
        });
      }

      let getUniqueSups = Object.keys(vendorsmapping);
      getUniqueSups = getUniqueSups.map((id)=>{return Number(id)})

      console.log(getUniqueSups);
      if(!getUniqueSups.length){
        return res.status(400).json({ status: false, message: "Vendors not found!!"})
      }

      const fetchUser = await VendorUsers.find({VendorOrganizationId : {$in : getUniqueSups}, Role : "Admin"})
      console.log("fetchUser==",fetchUser);
      if(!fetchUser?.length){
        return res.status(400).json({ status: false, message: "Users not found!!"})
      }
      return res.status(200).json({ status: true, data: fetchUser, message: "data" });
    }
  } catch (error) {
    console.log("error===",error);
    return res.status(500).json({ status: false, message: "Something went wrong!!" });
  }
};

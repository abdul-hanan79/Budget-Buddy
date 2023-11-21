import * as Yup from "yup";

export const addEntrySchema = Yup.object({
  entryType: Yup.string().required("Please Select the Entry Type"),
  date: Yup.date().required("Please Select the Date"),
  // time:Yup.().,
  time: Yup.string().required("Please Select the Time"),
  amount: Yup.number().required("Please Add the Amount"),
  description: Yup.string().required("Plese Add Remarks"),
  category: Yup.string().required("Please Select the Category"),
  paymentMode: Yup.string().required("Please Select the Payment Mode"),
});

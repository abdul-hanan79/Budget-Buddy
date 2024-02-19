import * as Yup from "yup";

export const addBookSchema = Yup.object({
 
 name: Yup.string().required("Please Select the Book Name"),
});

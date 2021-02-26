import * as yup from 'yup'




export default yup.object().shape({

size: yup
.string()
.required()
.min(3),
sauce: yup
.string()
.required()
.min(2),
orderMultiply: yup
.string()
.required()
.email(),
specialInstructions: yup
.string()
.required()
.min(6),
toppings: yup.boolean()
.oneOf([true]),

})

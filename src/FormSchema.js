import * as yup from 'yup'




export default yup.object().shape({

size: yup
.string()
.required('Must choose one size')
.min(3),
sauce: yup
.string()
.required('Must choose one type of sauce')
.min(2),
orderMultiply: yup
.string()
.required('Must choose at least one order')
.min(1)
.max(5),
specialInstructions: yup
.string()
.required(),
toppings: yup.boolean()
.oneOf([true]),

})

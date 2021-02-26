import React,{useState} from "react"
import axios from 'axios'
import {Link} from 'react-router-dom'
import FormSchema from "./FormSchema"
import styled from 'styled-components'

const StyledImg = styled.img`

width:50%;



`






const initialState = {

size: "",
sauce:"",
toppings:false,
specialInstructions:"",
orderMultiply:"",
}

const initialErrors = {
    size: "",
    sauce:"",
    toppings:false,
    specialInstructions:"",
    orderMulitply:"",
}

export default function Form(props){
const[formValues,setFormValues] = useState(initialState)
const[errors,setErrors] = useState(initialErrors)
const userObj = {

size:formValues.size,
sauce:formValues.sauce,
toppings:formValues.toppings,
specialInstructions:formValues.specialInstructions,
orderMulitply:formValues.orderMulitply,

}
 
const validity =(e) => {

e.preventDefault()

FormSchema
  
.validate(formValues,{abortEarly:false})

.then(() => {
  setErrors(initialErrors);

  axios
  .post("https://reqres.in/", userObj)
  .then((res) => {
     props.setAllUsers([...props.allUsers, res.data]);

  })
  .catch((err) => {
    console.log(err)
  })
  setFormValues(initialState)


})
.catch(err => {
  const tempObject = {}
  for (let i = 0 ; i < err.errors.length; i++){
    console.log(err.errors[i].split(" "))
    const arrayOfSplitWords = err.errors[i].split(" ")
    if(tempObject[arrayOfSplitWords[0]]){
     
      tempObject[arrayOfSplitWords[0]].push(arrayOfSplitWords.slice(1).join(' '))
    }else{
      tempObject[arrayOfSplitWords[0]] = [arrayOfSplitWords.slice(1).join(' ')]
    }
  } 

setErrors(tempObject)
});

}

const changeHandler = e => {

    setFormValues({
  
      ...formValues,
      [e.target.name]: e.target.name === 'toppings' ? !formValues.toppings : e.target.value
    }) 
  
   } 
console.log(errors)
 return(
     <form>
         <title>Build Your Own Pizza</title>
         <StyledImg  src="https://tinyurl.com/yae2wro7" alt="Delicious Pizza" />
    
         <h1>Build Your Own Pizza</h1>
      <label>Choice of Size
          <label>Required
       <select>
           <option 
            selected disabled hidden value="">
             Select
           </option>
            <option 
            value="Small" >
                Small
            </option>
            <option 
            value="Medium" >
                Medium
            </option>
            <option 
            value="Large">
                Large
            </option>
       </select>
      </label>
      </label>
      <div>

        <label>Choice of Sauce
            <label>Original Red
                <label>Required
            <input
            name="sauce"
            type="radio"
            onChange={changeHandler}
            value="Original Red"
            
            />
        </label>
        <label>Garlic Ranch
            <input
            name="sauce"
            type="radio"
            onChange={changeHandler}
            value="Garlic Ranch"
           
            />
        </label>
        <label>BBQ Sauce 
            <input
            name="sauce"
            type="radio"
            onChange={changeHandler}
            value="BBQ Sauce"
            
            />
        </label>
       <label>Spinach Alfredo
        <input
            name="sauce"
            type="radio"
            onChange={changeHandler}
            value="Spinach Alfredo"
            
            />
            </label>
            </label>
      </label>
    </div>
    <label>Add Toppings
        <label>Choose up to 10  
       <label> Pepperoni
     <input 
     name='pepperoni'
     type='checkbox'
     value={formValues.pepperoni}
      onChange={changeHandler}
     />
       </label>
      
       <label>Sausage
     <input 
     name='sausage'
     type='checkbox'
     value={formValues.sausage}
      onChange={changeHandler}
     />
       </label>
       <label>Canadian Bacon
     <input 
     name='canadianBacon'
     type='checkbox'
     value={formValues.canadianBacon}
      onChange={changeHandler}
     />
       </label>
       <label>Spicy Italian Sausage
     <input 
     name='spicyItalianSausage'
     type='checkbox'
     value={formValues.spicyItalianSausage}
      onChange={changeHandler}
     />
       </label>
       <label>Grilled Chicken
     <input 
     name='grilledChicken'
     type='checkbox'
     value={formValues.grilledChicken}
      onChange={changeHandler}
     />
       </label>
       <label>Onions
     <input 
     name='onions'
     type='checkbox'
     value={formValues.onions}
      onChange={changeHandler}
     />
       </label>
       <label>Green Pepper
     <input 
     name='greenPepper'
     type='checkbox'
     value={formValues.greenPepper}
      onChange={changeHandler}
     />
       </label>
       <label>Diced Tomatos
     <input 
     name='dicedTomatos'
     type='checkbox'
     value={formValues.dicedTomatos}
      onChange={changeHandler}
     />
       </label>
       <label>Black Olives
     <input 
     name='blackOlives'
     type='checkbox'
     value={formValues.blackOlives}
      onChange={changeHandler}
     />
       </label>
       <label>Roasted Garlic
     <input 
     name='roastedGarlic'
     type='checkbox'
     value={formValues.roastedGarlic}
      onChange={changeHandler}
     />
       </label>
       <label>Artichoke Hearts
     <input 
     name='artichokeHearts'
     type='checkbox'
     value={formValues.artichokeHearts}
      onChange={changeHandler}
     />
       </label>
       <label>Three Cheese
     <input 
     name='threeCheese'
     type='checkbox'
     value={formValues.threeCheese}
      onChange={changeHandler}
     />
       </label>
       <label>Pineapple
     <input 
     name='pineapple'
     type='checkbox'
     value={formValues.pineapple}
      onChange={changeHandler}
     />
       </label>
       <label>Extra Cheese
     <input 
     name='extraCheese'
     type='checkbox'
     value={formValues.extraCheese}
      onChange={changeHandler}
     />
       </label>
    </label>
     </label>
     <label>Special Instructions 
         <input 
         name='specialInstructions'
         type='text'
         placeholder="Anything else you'd like to add?"
         value={formValues.specialInstructions}
         onChange={changeHandler}
         />
     </label>
     <div>
     <input 
     name='orderMulitply'
     type='number'
     min='1'
     max='5'
     value={formValues.orderMultiply}
     onChange={changeHandler}
     />
     <Link to='/confirmation'>
         <button onClick={validity}>Add to Order $17.99</button>
         </Link>
     </div>
     </form>
 )
}
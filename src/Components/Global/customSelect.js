import React, {useState} from 'react';

const CustomSelect = ({class_key, selectedValue, type, setOption, options, index})=> {
    //const [selectValue, setSelectValue] = useState("Category")

    const showOptions = ()=> {
        let select = document.querySelector("."+class_key)
        //select.style.transition = "500ms" 
        select.style.height = '300px'
        if(options.length > 8){
            select.style.overflowY = "scroll"
        }
                 
        
    }

    const removeOptions = ()=> {
        let select = document.querySelector("."+class_key)
        select.scrollTo({
            top: 0, left: 0, behavior: "smooth"
        })
        select.style.height = '35px'
        select.style.overflowY = "hidden"  
    }

    const newOption = (option)=> {
        removeOptions()
        setOption(type, option)

    }
    return(
        <section className = {"custom-select " + class_key} onMouseEnter = {showOptions} onMouseLeave = {removeOptions} 
        style = {{marginLeft: index * 22 + "%" }}>

            <div className = "select" >
                <h2 className = "current-value">{selectedValue}</h2>

                <div className="option-box">

                    {options.map( (option, index)=>(
                        <div key = {index} className = {selectedValue === option ? "selected-option" : "option"} 
                        value= {option} onClick = {()=>newOption(option)}>
                            <h2>{option}</h2>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    )
}

export default CustomSelect
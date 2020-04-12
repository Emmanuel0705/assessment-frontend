import React from "react"

const Form = () => {
    // const [fromData,setFormData] = useState({name:"",population:""})
    return (
        <div>
            <h1 className="title">Covid-19 Estimator.</h1>
        <form>
         <h1>Fill the Below Form To Estimate Covid-19 Case in a certain area</h1>
            
         <div className="contentform">
           
            <div className="leftcontact">
                <label className="form-group">
                    <p>Name<span>*</span></p>
                    <input data-population type="number" required />
               </label> 
    
                <label className="form-group">
                   <p>Reported Cases <span>*</span></p>
                    <input data-reported-cases type="text" id="prenom" required/>
                </label>
    
                <label className="form-group">
                   <p>Time To Elapse<span>*</span></p>    
                   <input data-time-to-elapse type="email" name="email" id="email" data-rule="email" data-msg="Vérifiez votre saisie sur les champs : Le champ 'E-mail' est obligatoire."/>
                </label>  
    
                <label className="form-group">
                  <p>Period Type <span>*</span></p>
                    <select data-period-type type="text" required>
                        <option value="days">days</option>
                        <option value="weeks">weeks</option>
                        <option value="months">months</option>
                   </select>
                </label>  
        </div>
    
        <div className="rightcontact">  
    
          <label className="form-group">
                <p>Total hospital bed<span>*</span></p>
              <input data-total-hospital-beds type="text"required/>
          </label>
          <label className="form-group">
                <p>Population<span>*</span></p>
                <input data-population type="number" required />
         </label>
         <label className="form-group">
            <p>Average Daily Incone In USD<span>*</span></p>
            <input data-daily-income-in-usd type="number" required />
         </label>
         <label className="form-group">
            <p>Average Daily Income Population<span>*</span></p>
            <input data-daily-income-population type="number" required />
         </label>

        </div>
    </div>
    <button data-go-estimate type="button" role="button" className="bouton-contact">Send</button>
        
    </form>
    </div>
    )
}
export default Form
import { CardProject } from "../../mui-treasury/card-project"
import utcnLogo from "../../assets/utcnLogo.png"

function Education() {

    return(

        <>
            <CardProject headerTitle='Education' 
                        company='Technical University of Cluj-Napoca' 
                        role='Bachelor Student'
                        logo={utcnLogo}
                        description='Ce am facut la faculta, despre proiecte etc.'/>
        </>

    )


}

export default Education
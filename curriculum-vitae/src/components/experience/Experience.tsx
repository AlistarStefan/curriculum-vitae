import { CardProject } from "../../mui-treasury/card-project"
import developerLogo from "../../assets/developerLogo.png"

function Experience() {

    return(

        <>
            <CardProject headerTitle='Experience' 
                        company='Codemart' 
                        role='Full-stack Developer'
                        logo={developerLogo}
                        description='Ce am facut la job, despre proiecte etc.'/>
        </>

    )


}

export default Experience
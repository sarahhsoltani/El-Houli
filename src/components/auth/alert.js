import React from 'react';
import { useSelector} from 'react-redux'
import { Alert } from 'reactstrap';


const AlertMsg = () =>{
    

    const alerts = useSelector((state) => state.alertReducer)
    console.log("alert",alerts)
return(
 <div>
 {alerts !== null &&
  alerts.length > 0 &&

  alerts.map(alert => (
    <Alert key={alert.id} color={alert.alertType}>
      {alert.msg}
      {console.log(alert.msg)}
    </Alert>
  )
  )}
 </div>
)
}

export default AlertMsg;
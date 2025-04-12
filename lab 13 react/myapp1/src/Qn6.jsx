export default function Qn6(){
    const day=new Date().getDay();
    const days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
    return(
<p>
    Today is {days[day]}
</p>
    );
}
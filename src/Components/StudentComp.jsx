import React from "react";


export function StudentComp(props) {
    let userStyle = { backgroundColor: "red" };
    let comment = '(poor)';

    if (57 < props.studentGrade && props.studentGrade < 76) {
        userStyle = { backgroundColor: "yellow" };
        comment = '(ok)';
    }

    else if (75 < props.studentGrade && props.studentGrade < 86) {
        userStyle = { backgroundColor: "orange" };
        comment = '(Good)';
    }

    else if (85 < props.studentGrade && props.studentGrade < 101) {
        userStyle = { backgroundColor: "green" };
        comment = '(Excellent)';
    }

    return (<>
        <p style={userStyle}>{props.studentName} - {props.studentId} - {props.studentGrade} - {comment}</p>
    </>);
}


export function StudentListComp() {
    return (
        <ul>
            <li>    <StudentComp studentName='Dennis Greenberg' studentId={1} studentGrade={100} />       </li>
            <li>    <StudentComp studentName='Karim Benzema' studentId={2} studentGrade={85} />        </li>
            <li>    <StudentComp studentName='Crisiano Ronaldo' studentId={3} studentGrade={95} />       </li>
            <li>    <StudentComp studentName='Lionel Messi' studentId={4} studentGrade={25} />    </li>
            <li>    <StudentComp studentName='Sergio Ramos' studentId={5} studentGrade={63} />       </li>
        </ul>
    );
}
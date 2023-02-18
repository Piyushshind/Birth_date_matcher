import { Fragment } from "react";
export default function Mains() {
  const arra = [
    " 1. Its a popular library so i will be able to fit in it for developing frontend codes.",
    "2. I am more likely to get job as a developer if i know react.",
  ]
  
  return(
    <Fragment>
      {arra.map((list) => {
       return <li>{list} </li>;
      })}
    </Fragment>
  );
}

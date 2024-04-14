const ValidateLogin = (values) => {
  let error = {};
  if(values.admNum !== "BIA123"){
    error.admNum = "wrong input";
  }else{
    error.admNum = "correct";
  }

  if(values.pnCode !== "jcb1"){
    error.pnCode = "wrong pin";
  }else{
    error.pnCode = "correct";
  }

  if(values.selSess === ""){
    error.selSess = "wrong selection";
  }else{
    error.selSess = "correct";
  }

  if(values.selTerm === ""){
    error.selTerm = "wrong selection";
  }else{
    error.selTerm = "correct";
  }

  if(error.admNum === "correct" && error.pnCode === "correct") {
    alert("successfully submitted");
  }

  return error;
} 

export default ValidateLogin;
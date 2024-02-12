export const useTesting = () => {
  function logHi() {
    console.log("from testing combosable %clogging Hi", "color:yellow");
  }
  function logBye() {
    console.log("from testing combosable %cBye", "color:red;");
  }
  
  return {
    logHi,
    logBye,
  };
};

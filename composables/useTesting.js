export const useTesting = () => {
  function logHi() {
    console.log("from testing combosable %clogging Hi", "color:yellow");
  }
  function logBye() {
    console.log("from testing combosable %cBye", "color:red;");
  }
  /** 
   // we Never define const state = ref() outside of <script setup> or setup() function.
   Such state will be shared across all users visiting your website and can lead to memory leaks!
   * 
  */
  const counter = useState("counter", () => 0);
  const dollar = useState("dollar", () => ({
    rate: 30.1,
    black_rate: 64,
  }));

  return {
    counter,
    dollar,
    logHi,
    logBye,
  };
};

export default defineNuxtPlugin((app) => {
  console.log(
    "%cwe're on plugin, first thing  to get render here's the app",
    "color:green"
  );

  return {
    provide: {
      fnProvidedToNuxt: () => {
        console.log(
          "if you choose %cuseNuxtApp(), you'll find me there starts with $ sign to mark as provided",
          "color:green"
        );
      },
    },
  };
});

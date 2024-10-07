export let assistantId = "asst_nsrRoIYzqJuZkzGrFQU4eN5M"; // set your assistant ID here

if (assistantId === "") {
  assistantId = process.env.OPENAI_ASSISTANT_ID;
}

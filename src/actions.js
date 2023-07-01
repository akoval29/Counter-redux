export const inc = () => ({ type: "INC" });

export const dec = () => ({ type: "DEC" });

export const rdm = () => ({
  type: "RDM",
  payload: Math.floor(Math.random() * 99),
});

export const rst = () => ({ type: "RST", payload: 10 });

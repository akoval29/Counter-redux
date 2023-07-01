// action creators
export const inc = () => ({ type: "INC" });
export const dec = () => ({ type: "DEC" });
export const rdm = (tmp) => ({ type: "RDM", payload: tmp });
export const rst = () => ({ type: "RST", payload: 10 });

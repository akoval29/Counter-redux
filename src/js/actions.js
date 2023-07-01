// action creators
export const inc = () => ({ type: "INC" });
export const dec = () => ({ type: "DEC" });
export const rdm = (value) => ({ type: "RDM", payload: value });
export const rst = () => ({ type: "RST", payload: 10 });

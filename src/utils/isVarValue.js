const falsyValuesThatCouldBeVarValues = ['', 0];

const isVarValue = function(varValue) {
  return !!varValue || falsyValuesThatCouldBeVarValues.includes(varValue);
};

export default isVarValue;
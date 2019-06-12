function justInvoke(func){
  return func();
}

function setThisWithCall(func, name, arg){
  return func.call(name, arg);
}

function setThisWithApply(func, name, args){
  return func.apply(name, args);
}

function returnNewFunctionOf(func, name, args){
  return func.bind(name, args);
}




function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`;
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length > 0) {
    var first = katzDeliLine.shift();
    return
  } else {
    return "The line is currently empty."
  }
}

function currentLine(katzDeliLine) {
  
}
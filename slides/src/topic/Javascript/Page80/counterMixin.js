
export function increase() {
  if (!this.hasOwnProperty('count')) this.reset();
  this.count++;
}

export function decrease() {
  if (!this.hasOwnProperty('count')) this.reset();
  this.count--;
}

export function reset() {
  this.count = 0;
}

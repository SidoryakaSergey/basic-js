const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 *
 * @example
 *
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  constructor() {
    this.maxDepth = 1;
  }

  calculateDepth(arr, depth = 1) {
    for (let el of arr) {
      if (Array.isArray(el)) {
        const newDepth = depth + 1;
        if (newDepth > this.maxDepth) {
          this.maxDepth = newDepth;
        }
        this.calculateDepth(el, newDepth);
      }
    }
    const result = this.maxDepth;
    if (depth === 1) {
      this.maxDepth = 1;
    }
    return result;
  }
}

module.exports = {
  DepthCalculator,
};

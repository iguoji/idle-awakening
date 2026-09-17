function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function calculateTimeToLevelUp(A, B, N, M, factor, dxp) {
  if (dxp <= 0) return 1.e+16;
  // Логарифм 1.01
  var ln1_01 = Math.log(factor);

  // Перший інтеграл
  var firstTerm = A * (Math.pow(factor, M) - Math.pow(factor, N)) / ln1_01;

  // Другий інтеграл - частина з level
  var secondTermPart1 = A * B * ((M * Math.pow(factor, M) - N * Math.pow(factor, N)) / ln1_01);

  // Другий інтеграл - частина з додатковим множником 1/(ln(1.01))^2
  var secondTermPart2 = A * B * ((Math.pow(factor, M) - Math.pow(factor, N)) / Math.pow(ln1_01, 2));

  // Підсумкова загальна кількість XP
  var totalXP = firstTerm + secondTermPart1 - secondTermPart2;

  // Час, необхідний для підвищення рівня
  var totalTime = totalXP / dxp;
  return totalTime;
}
function weightedRandomChoice(probMap) {
  // Calculate total weight
  var totalWeight = Object.values(probMap).reduce(function (sum, weight) {
    return sum + weight;
  }, 0);

  // Generate a random number in the range of totalWeight
  var randVal = Math.random() * totalWeight;

  // Traverse through the items, accumulating the weight
  var cumulativeWeight = 0;
  for (var _i = 0, _Object$entries = Object.entries(probMap); _i < _Object$entries.length; _i++) {
    var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
      key = _Object$entries$_i[0],
      weight = _Object$entries$_i[1];
    cumulativeWeight += weight;
    if (randVal < cumulativeWeight) {
      return key;
    }
  }
}

export { calculateTimeToLevelUp };
export { weightedRandomChoice };

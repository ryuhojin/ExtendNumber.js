function RealNumber() {}

RealNumber.prototype.ceil = function (value, point) {
  var result = value;
  if (point) {
    var _pow = Math.pow(10, point);
    if (point < 0) {
      result = Number(
        (Math.ceil(value * _pow) / _pow).toString().split(".")[0]
      );
    } else {
      result = Math.ceil(value * _pow) / _pow;
    }
  } else {
    result = Math.ceil(value);
  }
  return result;
};

RealNumber.prototype.floor = function (value, point) {
  var result = value;
  if (point) {
    var _pow = Math.pow(10, point);
    if (point < 0) {
      result = Number(
        (Math.floor(value * _pow) / _pow).toString().split(".")[0]
      );
    } else {
      result = Math.floor(value * _pow) / _pow;
    }
  } else {
    result = Math.floor(value);
  }
  return result;
};

RealNumber.prototype.round = function (value, point) {
  var result = value;
  if (point) {
    var _pow = Math.pow(10, point);

    if (point < 0) {
      result = Number(
        (Math.round(value * _pow) / _pow).toString().split(".")[0]
      );
    } else {
      result = Math.round(value * _pow) / _pow;
    }
  } else {
    result = Math.round(value);
  }
  return result;
};

RealNumber.prototype.add = function (value1, value2) {
  var _value1Arr = value1.toString().split(".");
  var _value2Arr = value2.toString().split(".");

  if (_value1Arr[1] || _value2Arr[1]) {
    var _val1Len = _value1Arr[1] ? _value1Arr[1].length : 0;
    var _val2Len = _value2Arr[1] ? _value2Arr[1].length : 0;
    var _max = _val2Len > _val1Len ? _val2Len : _val1Len;

    return (
      (Number((value1 * Math.pow(10, _max)).toFixed()) +
        Number((value2 * Math.pow(10, _max)).toFixed())) /
      Math.pow(10, _max)
    );
  } else {
    return value1 + value2;
  }
};

RealNumber.prototype.sub = function (value1, value2) {
  var _value1Arr = value1.toString().split(".");
  var _value2Arr = value2.toString().split(".");

  if (_value1Arr[1] || _value2Arr[1]) {
    var _val1Len = _value1Arr[1] ? _value1Arr[1].length : 0;
    var _val2Len = _value2Arr[1] ? _value2Arr[1].length : 0;
    var _max = _val2Len > _val1Len ? _val2Len : _val1Len;

    return (
      (Number((value1 * Math.pow(10, _max)).toFixed()) -
        Number((value2 * Math.pow(10, _max)).toFixed())) /
      Math.pow(10, _max)
    );
  } else {
    return value1 - value2;
  }
};

RealNumber.prototype.mul = function (value1, value2) {
  var _value1Arr = value1.toString().split(".");

  var _value2Arr = value2.toString().split(".");

  if (_value1Arr[1] || _value2Arr[1]) {
    var _val1Len = _value1Arr[1] ? _value1Arr[1].length : 0;

    var _val2Len = _value2Arr[1] ? _value2Arr[1].length : 0;

    return (
      (Number((value1 * Math.pow(10, _val1Len)).toFixed()) *
        Number((value2 * Math.pow(10, _val2Len)).toFixed())) /
      Math.pow(10, _val1Len + _val2Len)
    );
  } else {
    return value1 * value2;
  }
};

RealNumber.prototype.div = function (value1, value2) {
  var _value1Arr = value1.toString().split(".");
  var _value2Arr = value2.toString().split(".");

  if (_value1Arr[1] || _value2Arr[1]) {
    var _val1Len = _value1Arr[1] ? _value1Arr[1].length : 0;
    var _val2Len = _value2Arr[1] ? _value2Arr[1].length : 0;
    return (
      Number((value1 * Math.pow(10, _val1Len)).toFixed()) /
      Number((value2 * Math.pow(10, _val2Len)).toFixed()) /
      Math.pow(10, _val1Len - _val2Len)
    );
  } else {
    return value1 / value2;
  }
};

var RN = new RealNumber();

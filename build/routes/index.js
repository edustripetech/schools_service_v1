"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const router = (0, _express.default)();
router.get('/', (req, res) => res.status(200).json({
  status: res.statusCode,
  message: 'Edustripe Schools Service V1'
}));
var _default = router;
exports.default = _default;
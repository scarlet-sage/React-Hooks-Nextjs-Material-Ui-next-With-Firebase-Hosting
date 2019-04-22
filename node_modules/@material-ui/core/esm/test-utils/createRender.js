import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import { render as enzymeRender } from 'enzyme'; // Generate a render to string function.

export default function createRender() {
  var options1 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var _options1$render = options1.render,
      render = _options1$render === void 0 ? enzymeRender : _options1$render,
      other1 = _objectWithoutProperties(options1, ["render"]);

  var renderWithContext = function renderWithContext(node) {
    var options2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    return render(node, _extends({}, other1, options2));
  };

  return renderWithContext;
}